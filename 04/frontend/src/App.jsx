import { useState } from 'react'
import Title from './components/Title'
import Input from './components/Input'
import Result from './components/Result'
import { getBirthdayDetails } from './api/birthday'
import './styles.css'

function App() {
  const [birthday, setBirthday] = useState("")
  const [bdaySet, setBdaySet] = useState(false)
  const [birthdayDetails, setBirthdayDetails] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  function handleBirthdayChange(event) {
    setBirthday(event.target.value)
  }

  async function handleCalculate() {
    // Check if birthday is a valid date
    if (birthday && !isNaN(new Date(birthday).getTime())) {
      setBdaySet(true);
      setIsLoading(true);
      const apiBirthdayDetails = await getBirthdayDetails(birthday)
      setBirthdayDetails(apiBirthdayDetails)
      setIsLoading(false);
    } else {
      setBdaySet(false);
    }
  }

  return (
    <div className="app-container">
      <Title />
      <Input birthday={birthday} onChange={handleBirthdayChange} onCalculate={handleCalculate} />
      {bdaySet && <Result birthday={birthday} birthdayDetails={birthdayDetails} isLoading={isLoading} />}
    </div>
  )
}

export default App

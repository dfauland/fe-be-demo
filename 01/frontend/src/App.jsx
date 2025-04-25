import { useState } from 'react'
import Title from './components/Title'
import Input from './components/Input'
import Result from './components/Result'
import './styles.css'

function App() {
  const [birthday, setBirthday] = useState("")
  const [bdaySet, setBdaySet] = useState(false)

  function handleBirthdayChange(event) {
    setBirthday(event.target.value)
  }

  function handleCalculate() {
    // Check if birthday is a valid date
    if (birthday && !isNaN(new Date(birthday).getTime())) {
      setBdaySet(true);
    } else {
      setBdaySet(false);
    }
  }

  return (
    <div className="app-container">
      <Title />
      <Input birthday={birthday} onChange={handleBirthdayChange} onCalculate={handleCalculate} />
      {bdaySet && <Result birthday={birthday} />}
    </div>
  )
}

export default App

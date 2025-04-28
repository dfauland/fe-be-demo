export default function Result({ birthday, birthdayDetails, isLoading }) {
    const dummyData = {
        age_in_years: "Loading...",
        age_in_months: "Loading...",
        age_in_days: "Loading...",
        days_since_last_birthday: "Loading...",
        days_until_next_birthday: "Loading...",
        zodiac: "Loading..."
    };

    const displayData = isLoading ? dummyData : birthdayDetails;

    return (
        <div className="result-container">
            <h2>Birthday Details</h2>
            <table>
                <thead>
                    <tr>
                        <th>Metric</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Age in Years</td>
                        <td>{displayData.age_in_years}</td>
                    </tr>
                    <tr>
                        <td>Age in Months</td>
                        <td>{displayData.age_in_months}</td>
                    </tr>
                    <tr>
                        <td>Age in Days</td>
                        <td>{displayData.age_in_days}</td>
                    </tr>
                    <tr>
                        <td>Days since last birthday</td>
                        <td>{displayData.days_since_last_birthday}</td>
                    </tr>
                    <tr>
                        <td>Days until next birthday</td>
                        <td>{displayData.days_until_next_birthday}</td>
                    </tr>
                    <tr>
                        <td>Zodiac Sign</td>
                        <td>{displayData.zodiac}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

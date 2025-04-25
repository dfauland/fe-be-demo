export default function Result({ birthday }) {
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
                        <td>123</td>
                    </tr>
                    <tr>
                        <td>Age in Months</td>
                        <td>123</td>
                    </tr>
                    <tr>
                        <td>Age in Days</td>
                        <td>123</td>
                    </tr>
                    <tr>
                        <td>Days since last birthday</td>
                        <td>123</td>
                    </tr>
                    <tr>
                        <td>Days until next birthday</td>
                        <td>123</td>
                    </tr>
                    <tr>
                        <td>Zodiac Sign</td>
                        <td>XYZ</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

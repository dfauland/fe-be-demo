export default function Input({ birthday, onChange, onCalculate }) {
    return (
        <div className="input-container">
            <label htmlFor="birthday">Birthday</label>
            <input type="date" id="birthday" value={birthday} onChange={onChange} />
            <button onClick={onCalculate}>Calculate</button>
        </div>
    );
}

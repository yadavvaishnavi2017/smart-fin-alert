function BudgetInput({ budget, setBudget }) {
  return (
    <div className="card">
      <h3>Monthly Budget</h3>

      <input
        type="number"
        placeholder="Enter monthly budget"
        value={budget}
        onChange={(e) => setBudget(Number(e.target.value))}
        style={inputStyle}
      />
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginTop: "10px",
  borderRadius: "6px",
  border: "none",
};

export default BudgetInput;

function SpendingList({ spendings }) {
  return (
    <div className="card">
      <h3>Spending History</h3>

      {spendings.length === 0 && (
        <p>No spending added yet</p>
      )}

      {spendings.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "8px 0",
            borderBottom: "1px solid #e5e7eb",
          }}
        >
          <span>₹{item.amount}</span>
          <span>{item.note}</span>
          <span style={{ fontSize: "12px", color: "#6b7280" }}>
            {item.date}
          </span>
        </div>
      ))}
    </div>
  );
}

export default SpendingList;

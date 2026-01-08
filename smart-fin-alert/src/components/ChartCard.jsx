const data = [1200, 900, 1800, 1400, 2200];

function ChartCard() {
  return (
    <div className="card">
      <h2 style={{ marginBottom: "16px" }}>Weekly Spending</h2>

      <div className="chart-bar">
        {data.map((value, index) => (
          <div
            key={index}
            className="bar"
            style={{ height: value / 15 }}
            title={`₹${value}`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default ChartCard;

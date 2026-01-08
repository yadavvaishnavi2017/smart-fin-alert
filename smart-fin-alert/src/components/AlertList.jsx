function AlertList({ budget, spendings, subscriptions }) {

  // ✅ PUT IT HERE (TOP)
  const totalSpent = spendings.reduce(
    (sum, item) => sum + item.amount,
    0
  );

  const alerts = [];

  // 1️⃣ Budget alert (70%)
  if (budget && totalSpent >= budget * 0.7) {
    alerts.push({
      title: "Budget Alert",
      message: `You have spent ${Math.round(
        (totalSpent / budget) * 100
      )}% of your monthly budget`,
      priority: "HIGH",
    });
  }

  // 2️⃣ Unusual spending alert
  if (spendings.length > 1) {
    const avg =
      totalSpent / spendings.length;
    const last =
      spendings[spendings.length - 1].amount;

    if (last > avg * 2) {
      alerts.push({
        title: "Unusual Spending",
        message: "Recent spending is higher than usual",
        priority: "HIGH",
      });
    }
  }

  // 3️⃣ Subscription renewal alert
  subscriptions.forEach((sub) => {
    const today = new Date();
    const renewal = new Date(sub.renewalDate);
    const daysLeft =
      (renewal - today) / (1000 * 60 * 60 * 24);

    if (daysLeft <= 2) {
      alerts.push({
        title: "Subscription Renewal",
        message: `${sub.name} renews soon`,
        priority: "MEDIUM",
      });
    }
  });

  return (
    <div>
      <h2>Active Alerts</h2>

      {alerts.length === 0 && <p>No alerts 🎉</p>}

      {alerts.map((alert, index) => (
        <div key={index}>
          <h3>{alert.title}</h3>
          <p>{alert.message}</p>
        </div>
      ))}
    </div>
  );
}

export default AlertList;

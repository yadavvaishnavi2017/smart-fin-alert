export function generateAlerts(transactions, budget, income) {
  const alerts = [];

  // 1. Budget Risk
  const totalSpent = transactions.reduce((s, t) => s + t.amount, 0);
  if (totalSpent > budget * 0.9) {
    alerts.push({
      title: "Budget Risk",
      message: "You are close to exceeding your budget",
      priority: "HIGH",
    });
  }

  // 2. Spending Spike
  const dailyAvg = totalSpent / 30;
  const todaySpent = transactions
    .filter(t => t.day === "today")
    .reduce((s, t) => s + t.amount, 0);

  if (todaySpent > dailyAvg * 2) {
    alerts.push({
      title: "Spending Spike",
      message: "Today's spending is unusually high",
      priority: "HIGH",
    });
  }

  // 3. EMI Overload
  const emiTotal = transactions
    .filter(t => t.type === "EMI")
    .reduce((s, t) => s + t.amount, 0);

  if (emiTotal > income * 0.4) {
    alerts.push({
      title: "EMI Burden",
      message: "High EMI load detected",
      priority: "MEDIUM",
    });
  }

  return alerts;
}

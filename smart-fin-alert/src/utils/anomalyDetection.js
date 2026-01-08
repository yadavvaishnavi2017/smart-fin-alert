export function detectAnomaly(transactions) {
  const amounts = transactions.map(t => t.amount);
  const avg = amounts.reduce((a, b) => a + b, 0) / amounts.length;

  const variance =
    amounts.reduce((s, v) => s + Math.pow(v - avg, 2), 0) / amounts.length;

  const stdDev = Math.sqrt(variance);

  return transactions.filter(t => t.amount > avg + 2 * stdDev);
}

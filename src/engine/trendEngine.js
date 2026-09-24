function calculateTrend(history) {
  if (history.length < 2) {
    return "Stable";
  }

  const first = history[0];
  const last = history[history.length - 1];

  const change = last - first;

  if (change > 5) {
    return "Rising";
  }

  if (change < -5) {
    return "Falling";
  }

  return "Stable";
}

export default calculateTrend;
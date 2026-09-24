function calculateForecast(history) {
  if (history.length === 0) {
    return 0;
  }

  if (history.length < 2) {
    return history[0];
  }

  const first = history[0];
  const last = history[history.length - 1];

  const averageChange =
    (last - first) / (history.length - 1);

  const forecast =
    last + averageChange * 15;

  // Keep the simulated forecast within a realistic range
  const limitedForecast = Math.min(
    200,
    Math.max(10, forecast)
  );

  return Math.round(limitedForecast);
}

export default calculateForecast;
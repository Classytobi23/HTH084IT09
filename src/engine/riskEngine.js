function calculateRisk(
  pm25,
  forecast,
  sensitivity,
  exposureBonus
) {
  const effectiveExposure =
    pm25 * 0.6 + forecast * 0.4;

  const baseRisk =
    Math.min(100, (effectiveExposure / 150) * 100);

  const populationRisk =
    baseRisk * sensitivity;

  const finalRisk =
    Math.min(100, populationRisk + exposureBonus);

  return Math.round(finalRisk);
}

export default calculateRisk;
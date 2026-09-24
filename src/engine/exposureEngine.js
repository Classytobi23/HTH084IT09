function calculateExposureBonus(history) {
  const elevatedReadings = history.filter(
    (value) => value >= 75
  ).length;

  if (elevatedReadings >= 5) {
    return 10;
  }

  if (elevatedReadings >= 3) {
    return 5;
  }

  return 0;
}

export default calculateExposureBonus;
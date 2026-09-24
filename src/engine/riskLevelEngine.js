function getRiskLevel(riskScore) {
  if (riskScore >= 75) {
    return "Very High";
  }

  if (riskScore >= 50) {
    return "High";
  }

  if (riskScore >= 25) {
    return "Moderate";
  }

  return "Low";
}

export default getRiskLevel;
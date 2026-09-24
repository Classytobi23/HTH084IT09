function getRecommendation(zoneName, populationGroup, riskLevel) {
  if (riskLevel === "Very High") {
    if (populationGroup === "Children") {
      return "Move activities indoors and reduce outdoor exposure.";
    }

    if (populationGroup === "Patients") {
      return "Limit outdoor exposure and strengthen indoor air protection.";
    }

    if (populationGroup === "Commuters") {
      return "Reduce time near the junction and use protective measures.";
    }

    if (populationGroup === "Workers") {
      return "Reduce prolonged worker exposure and follow workplace air-quality precautions.";
    }

    if (populationGroup === "General Residents") {
      return "Reduce outdoor exposure and improve indoor air protection.";
    }

    return "Reduce outdoor exposure and increase air-quality precautions.";
  }

  if (riskLevel === "High") {
    if (populationGroup === "Children") {
      return "Limit outdoor activities and monitor air-quality conditions.";
    }

    if (populationGroup === "Patients") {
      return "Limit prolonged exposure and maintain good indoor air protection.";
    }

    if (populationGroup === "Workers") {
      return "Limit prolonged worker exposure and monitor workplace air quality.";
    }

    if (populationGroup === "Commuters") {
      return "Limit time near high-traffic areas and monitor air quality.";
    }

    return "Limit prolonged exposure and monitor air-quality conditions.";
  }

  if (riskLevel === "Moderate") {
    return "Sensitive individuals should reduce prolonged outdoor exposure.";
  }

  return "Normal activity; continue monitoring air quality.";
}

export default getRecommendation;
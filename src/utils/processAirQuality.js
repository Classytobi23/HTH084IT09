import getRecommendation from "../engine/recommendationEngine";
import calculateTrend from "../engine/trendEngine";
import calculateForecast from "../engine/forecastEngine";
import calculateRisk from "../engine/riskEngine";
import getRiskLevel from "../engine/riskLevelEngine";
import calculateExposureBonus from "../engine/exposureEngine";
import populationProfiles from "../data/populationProfiles";

function processAirQuality(zone) {
  const forecast = calculateForecast(zone.pm25History);

  const exposureBonus = calculateExposureBonus(
    zone.pm25History
  );

  const riskScore = calculateRisk(
    zone.pm25,
    forecast,
    populationProfiles[zone.name].sensitivity,
    exposureBonus
  );

  const riskLevel = getRiskLevel(riskScore);

  const recommendation = getRecommendation(
  zone.name,
  populationProfiles[zone.name].group,
  riskLevel
);

  return {
    name: zone.name,
    type: zone.type,
    pm25: zone.pm25,
    pm25History: zone.pm25History,

    trend: calculateTrend(zone.pm25History),
    forecast: forecast,

    populationGroup: populationProfiles[zone.name].group,
    sensitivity: populationProfiles[zone.name].sensitivity,

    exposureBonus: exposureBonus,
    riskScore: riskScore,
    riskLevel: riskLevel,
    recommendation: recommendation,

    temperature: zone.temperature,
    humidity: zone.humidity,
    mqValue: zone.mqValue,
    co2: zone.co2
  };
}

export default processAirQuality;
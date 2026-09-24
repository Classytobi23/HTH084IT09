function ZoneCard({ zone }) {
  return (
    <div className="zone-card">
      <h2>{zone.name}</h2>

      <p>PM2.5: {zone.pm25}</p>
      <p>Population: {zone.populationGroup}</p>
      <p>Trend: {zone.trend}</p>
      <p>15-min Forecast: {zone.forecast} µg/m³</p>
      
      <div className="risk-section">
  <p>Risk Score: {zone.riskScore}/100</p>
  <p>Risk Level: {zone.riskLevel}</p>
  <p>Exposure Bonus: +{zone.exposureBonus}</p>
  <p>Recommendation: {zone.recommendation}</p>
</div>

      <p>Temperature: {zone.temperature} °C</p>
      <p>Humidity: {zone.humidity} %</p>
      <p>MQ Sensor: {zone.mqValue}</p>
      <p>CO₂: {zone.co2} ppm</p>
    </div>
  );
}

export default ZoneCard;
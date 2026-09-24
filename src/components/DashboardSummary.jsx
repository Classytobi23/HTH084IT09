function DashboardSummary({ zones }) {
  const highRiskZones = zones.filter(
    (zone) =>
      zone.riskLevel === "High" ||
      zone.riskLevel === "Very High"
  );

  const highestRiskZone = zones.reduce(
    (highest, zone) =>
      zone.riskScore > highest.riskScore ? zone : highest,
    zones[0]
  );

  return (
    <div className="dashboard-summary">
      <div>
        <strong>{zones.length}</strong>
        <span>Zones Monitored</span>
      </div>

      <div>
        <strong>{highRiskZones.length}</strong>
        <span>High-Risk Zones</span>
      </div>

      <div>
        <strong>{highestRiskZone.name}</strong>
        <span>Highest Current Risk</span>
      </div>
    </div>
  );
}

export default DashboardSummary;
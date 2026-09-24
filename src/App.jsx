import "./App.css";
import zones from "./data/zones";
import ZoneCard from "./components/ZoneCard";
import DashboardSummary from "./components/DashboardSummary";
import useSimulatedData from "./hooks/useSimulatedData";
import processAirQuality from "./utils/processAirQuality";

function App() {
  const [data] = useSimulatedData(zones);
  const processedData = data.map(processAirQuality);

  return (
    <div>
      <h1>Multi-Zone Air Quality Dashboard</h1>

      <DashboardSummary zones={processedData} />

      <div className="zone-grid">
        {processedData.map((zone) => (
          <ZoneCard key={zone.name} zone={zone} />
        ))}
      </div>
    </div>
  );
}

export default App;
import { useEffect, useState } from "react";

function useSimulatedData(zones) {
  const [data, setData] = useState(
  zones.map((zone) => ({
    ...zone,
    pm25History: [zone.pm25]
  }))
);

  useEffect(() => {
    const timer = setInterval(() => {
      setData((currentData) =>
        currentData.map((zone) => {
          if (zone.type !== "simulated") {
            return zone;
          }
const newPm25 = Math.max(
  10,
  zone.pm25 + Math.floor(Math.random() * 11) - 5
);

const newHistory = [
  ...zone.pm25History,
  newPm25
].slice(-5);
          return {
  ...zone,
  pm25: newPm25,
  pm25History: newHistory,
            temperature: Math.max(
              20,
              zone.temperature + Math.floor(Math.random() * 3) - 1
            ),
            humidity: Math.max(
              30,
              zone.humidity + Math.floor(Math.random() * 5) - 2
            ),
            mqValue: Math.max(
              50,
              zone.mqValue + Math.floor(Math.random() * 21) - 10
            ),
            co2: Math.max(
              300,
              zone.co2 + Math.floor(Math.random() * 41) - 20
            )
          };
        })
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return [data, setData];
}

export default useSimulatedData;
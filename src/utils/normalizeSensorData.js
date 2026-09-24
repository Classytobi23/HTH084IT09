function normalizeSensorData(sensorData) {
  return {
    pm25: sensorData.pm25,
    temperature: sensorData.temperature,
    humidity: sensorData.humidity,
    mqValue: sensorData.mqValue,
    co2: sensorData.co2
  };
}

export default normalizeSensorData;
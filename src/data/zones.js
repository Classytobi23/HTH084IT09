const zones = [
  {
    name: "Industrial Zone",
    type: "physical",
    pm25: 85,
    temperature: 32,
    humidity: 58,
    mqValue: 420,
    co2: 650
  },
  {
    name: "School & Playground Zone",
    type: "physical",
    pm25: 42,
    temperature: 30,
    humidity: 62,
    mqValue: 250,
    co2: 520
  },
  {
    name: "Residential Zone",
    type: "physical",
    pm25: 55,
    temperature: 31,
    humidity: 60,
    mqValue: 300,
    co2: 580
  },
  {
    name: "Hospital Zone",
    type: "simulated",
    pm25: 35,
    temperature: 29,
    humidity: 65,
    mqValue: 180,
    co2: 480
  },
  {
    name: "Traffic Junction Zone",
    type: "simulated",
    pm25: 110,
    temperature: 34,
    humidity: 52,
    mqValue: 520,
    co2: 850
  }
];

export default zones;
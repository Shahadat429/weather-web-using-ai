import { Card } from "@/components/ui/card";

export default function WeatherCard({ data }: { data: any }) {
  // If no data yet
  if (!data) {
    return (
      <Card className="p-6 text-center">
        <p className="text-gray-500">Search a city to see weather</p>
      </Card>
    );
  }

  return (
    <Card className="p-6 space-y-3">
      {/* City name */}
      <h2 className="text-2xl font-bold">{data.name}</h2>

      {/* Temperature */}
      <p>🌡 Temperature: {data.main.temp}°C</p>

      {/* Weather condition */}
      <p>🌤 Condition: {data.weather[0].main}</p>

      {/* Humidity */}
      <p>💧 Humidity: {data.main.humidity}%</p>

      {/* Wind */}
      <p>🌬 Wind: {data.wind.speed} m/s</p>
    </Card>
  );
}
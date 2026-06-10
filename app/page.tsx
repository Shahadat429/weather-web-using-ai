"use client";

import { useState } from "react";
import WeatherSearch from "./components/weather/WeatherSearch";
import WeatherCard from "./components/weather/WeatherCard";

export default function Home() {
  // Store weather result
  const [weather, setWeather] = useState(null);

  return (
    <main className="max-w-2xl mx-auto p-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-6">
        🌦 Weather App
      </h1>

      {/* Search component */}
      <WeatherSearch onResult={setWeather} />

      {/* Weather display */}
      <WeatherCard data={weather} />
    </main>
  );
}
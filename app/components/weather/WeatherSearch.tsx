"use client";

import { useState } from "react";

type WeatherSearchProps = {
  onResult: (data: any) => void;
};

export default function WeatherSearch({ onResult }: WeatherSearchProps) {
  // ✅ state must be string (VERY IMPORTANT)
  const [city, setCity] = useState<string>("");

  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!city.trim()) return;

    setLoading(true);

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}&units=metric`
      );

      const data = await res.json();
      onResult(data);
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <div className="flex gap-2 mb-6">
      {/* ✅ Controlled input */}
      <input
        type="text"
        value={city} // must be string
        onChange={(e) => setCity(e.target.value)} // must update state
        placeholder="Enter city..."
        className="w-full p-3 rounded-lg bg-amber-50 text-black border"
      />

      <button
        onClick={handleSearch}
        className="bg-blue-500 px-4 py-2 rounded-lg"
      >
        {loading ? "..." : "Search"}
      </button>
    </div>
  );
}
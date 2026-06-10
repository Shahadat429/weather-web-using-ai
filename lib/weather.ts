// app/lib/weather.ts

// This file handles all weather API requests

const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;

// Function to fetch weather by city name
export async function getWeather(city: string) {
  try {
    // Call OpenWeather API
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    // If response fails
    if (!res.ok) {
      throw new Error("City not found");
    }

    // Convert response to JSON
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
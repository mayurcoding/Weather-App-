import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "c43d3fe508e0bd91b2b1164dedfb0915"; // Replace with your OpenWeather API key

function WeatherApp() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("London");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!city) return; // Prevent unnecessary API calls

    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
        );
        setWeatherData(response.data);
        setError(null); // Reset error if request is successful
      } catch (err) {
        setError("City not found. Please enter a valid city name.");
        setWeatherData(null);
      }
    };

    // Debounce API calls to avoid excessive requests
    const timeoutId = setTimeout(fetchWeather, 1000);
    return () => clearTimeout(timeoutId);
  }, [city]);

  const handleSearch = (e) => {
    setCity(e.target.value);
  };

  return (
    <div style={styles.container}>
      <div style={styles.innerContainer}>
        <h1 style={styles.heading}>Weather App 🌤️</h1>
        <input
          type="text"
          value={city}
          onChange={handleSearch}
          placeholder="Enter city name..."
          style={styles.input}
        />
        {error && <p style={styles.error}>{error}</p>}
        {weatherData && (
          <div style={styles.weatherInfo}>
            <h2>{weatherData.name}</h2>
            <p>Temperature: {(weatherData.main.temp - 273.15).toFixed(2)}°C</p>
            <p>Humidity: {weatherData.main.humidity}%</p>
            <p>Condition: {weatherData.weather[0].description}</p>
          </div>
        )}
      </div>
    </div>
  );
}

// Basic styling
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundImage: 'url("https://images.unsplash.com/photo-1676846631735-e10bf09d49d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  innerContainer: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "rgba(0, 0, 0, 0.6)", // Slight transparent background
    borderRadius: "15px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
    color: "#fff",
    width: "80%",
    maxWidth: "500px",
    margin: "0 15px",
  },
  heading: {
    fontSize: "36px",
    fontWeight: "700",
    marginBottom: "20px",
    letterSpacing: "1px",
  },
  input: {
    padding: "12px",
    margin: "10px",
    width: "80%",
    maxWidth: "400px",
    borderRadius: "25px",
    border: "2px solid #fff",
    fontSize: "18px",
    outline: "none",
    transition: "border-color 0.3s",
  },
  inputFocus: {
    borderColor: "#4CAF50",
  },
  weatherInfo: {
    marginTop: "20px",
    padding: "15px",
    border: "1px solid #fff",
    display: "inline-block",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: "10px",
    width: "100%",
  },
  error: {
    color: "red",
    fontSize: "18px",
    marginTop: "10px",
    fontWeight: "bold",
  },
  // Responsive styles
  "@media (max-width: 768px)": {
    innerContainer: {
      width: "90%",
      maxWidth: "400px",
      padding: "15px",
    },
    heading: {
      fontSize: "28px",
    },
    input: {
      width: "90%",
      maxWidth: "350px",
    },
    weatherInfo: {
      padding: "10px",
    },
  },
  "@media (max-width: 480px)": {
    innerContainer: {
      width: "100%",
      maxWidth: "360px",
      padding: "10px",
    },
    heading: {
      fontSize: "24px",
    },
    input: {
      width: "100%",
      maxWidth: "320px",
      fontSize: "16px",
    },
    weatherInfo: {
      padding: "8px",
    },
  },
};

export default WeatherApp;

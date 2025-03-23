# Weather App 🌤️

## Overview

This Weather App allows users to check the current weather of any city around the world. It fetches real-time weather data using the OpenWeather API and displays information like temperature, humidity, and weather condition.

## Functionality

- **Search Weather by City**: Users can input the name of a city and get the current weather conditions for that city.
- **Temperature**: Displays the temperature in Celsius.
- **Humidity**: Shows the humidity percentage of the selected city.
- **Weather Condition**: Displays a brief description of the weather condition (e.g., sunny, rainy, etc.).
- **Error Handling**: Displays an error message if the city is not found or if there’s an issue with the API call.
- **Responsive Design**: The app is fully responsive, ensuring a great user experience across mobile, tablet, and desktop screens.

## Technologies Used

- **React**: The frontend framework used to build the app.
- **OpenWeather API**: Provides real-time weather data.
- **Axios**: Used to make HTTP requests to the OpenWeather API.
- **CSS**: For styling and responsive design.

## Features

- **Real-Time Weather Data**: Fetches live weather data from OpenWeather.
- **Debounce Search**: To prevent excessive API calls, the search input is debounced, which delays the API call until the user stops typing.
- **Modern Design**: Stylish, modern UI with responsive design for various screen sizes.
- **Error Handling**: User-friendly error messages when an invalid city is entered.

## How to Set Up and Run the Weather App

### Prerequisites

Make sure you have **Node.js** and **npm** installed. You can download and install Node.js from [here](https://nodejs.org/).

### Steps to Run the App

1. **Clone the Repository**
   
   First, clone this repository to your local machine:
   ```bash
   git clone https://github.com/yourusername/weather-app.git
   ```

2. **Navigate to the Project Directory**
   
   Change into the project directory:
   ```bash
   cd weather-app
   ```

3. **Install Dependencies**
   
   Run the following command to install the necessary dependencies:
   ```bash
   npm install
   ```

4. **Get Your OpenWeather API Key**
   
   - Go to [OpenWeather](https://openweathermap.org/api) and sign up for a free API key.
   - Replace the placeholder API key in the `WeatherApp.js` file with your API key:
   ```javascript
   const API_KEY = "your-api-key"; // Replace with your OpenWeather API key
   ```

5. **Start the Development Server**
   
   Now, you can start the app:
   ```bash
   npm start
   ```

   The app will open in your default browser at `http://localhost:3000`.

6. **Enjoy the App**: Now, you should be able to search for weather information by typing the name of a city!

## Folder Structure

```
/weather-app
  /src
    /components
      WeatherApp.js          // The main component with logic
    App.js                   // The root component
    index.js                 // The entry point of the React app
  /public
    index.html               // The main HTML file
  package.json               // Project metadata and dependencies
```

## Notes

- The app uses OpenWeather's free API, so there might be some rate-limiting if there are too many requests in a short period.
- Feel free to enhance the app by adding more features, like a 5-day forecast, different units for temperature, or a background change based on weather conditions.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
import React, { useState } from "react";
import axios from "axios";
// import { BASE_URL, API_KEY } from "./src/constant";
import { View, StyleSheet, ActivityIndicator, Text } from "react-native";
import WeatherSearch from "./src/components/weatherSearch";
import WeatherInfo from "./src/components/weatherInfo";

type TRenderComponent = {
  weatherData: any;
  status: any;
};

// Definisikan function renderComponent
const renderComponent = ({ weatherData, status }: TRenderComponent) => {
  switch (status) {
    case "loading":
      return <ActivityIndicator size="large" />;
    case "success":
      return <WeatherInfo weatherData={weatherData} />;
    case "error":
      return (
        <Text>
          Something went wrong. Please try again with a correct city name.
        </Text>
      );
    default:
      return;
  }
};

const App = () => {
  const [weatherData, setWeatherData] = useState("");
  const [status, setStatus] = useState("");

  const searchWeather = (location: string) => {
    // Mengatur status ke "loading"
    // console.log(location);
    const BASE_URL = process.env.EXPO_PUBLIC_API_URL;
    const API_KEY  = process.env.EXPO_PUBLIC_API_KEY;
    setStatus("loading");
    axios
      .get(`${BASE_URL}?q=${location}&appid=${API_KEY}`)
      .then((response) => {
        //Promise From axios
        const data = response.data;
        data.visibility /= 1000;
        data.visibility = data.visibility.toFixed(2);
        data.main.temp -= 273.15;
        data.main.temp = data.main.temp.toFixed(2);
        setWeatherData(data);
        // Mengatur status ke "success"
        setStatus("success");
      })
      .catch((error) => {
        // Mengatur status ke "error"
        setStatus("error");
      });
  };

  return (
    <View style={styles.container}>
      <WeatherSearch searchWeather={searchWeather} />
      {/* Menggunakan function renderComponent di sini */}
      <View style={styles.margintTop20}>
        {renderComponent({ weatherData, status })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  margintTop20: {
    marginTop: 20,
  },
});

export default App;

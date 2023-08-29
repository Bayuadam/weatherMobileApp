// Import useState
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import CustomTextInput from "./customTextInput";
import { Button } from "@rneui/themed";

type TSearchWeather = {
  searchWeather: any;
};
// Tambahkan searchWeather sebagai sebuah prop
const WeatherSearch = ({ searchWeather }: TSearchWeather) => {
  const [location, setLocation] = useState("");
  return (
    <View>
      <CustomTextInput
        placeholder="Search the weather of your city"
        numberOfLines={1}
        // Tambahkan text dan onChange
        text={location}
        onChange={setLocation}
      />
      <View style={styles.buttonWrapper}>
        {/* Jalankan function searchWeather dengan parameter location */}
        <Button
          // type="outline"
          title="Search"
          color="success"
          icon={{
            name: "search",
            size: 15,
            color: "white",
          }}
          onPress={() => searchWeather(location)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    marginTop: 20,
  },
});

export default WeatherSearch;

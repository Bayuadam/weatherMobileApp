import React from "react";
import { TextInput, View, StyleSheet } from "react-native";

type TCustomTextInput = {
  text: string;
  onChange: (value: string) => void;
  multiline?: any | boolean;
  placeholder: string;
  numberOfLines?: string | any;
};

const CustomTextInput = ({
  text,
  onChange,
  multiline = false,
  placeholder,
  numberOfLines,
}: TCustomTextInput) => (
  <View style={styles.container}>
    <TextInput
      multiline={multiline}
      numberOfLines={numberOfLines}
      style={styles.input}
      placeholder={placeholder}
      onChangeText={onChange}
      defaultValue={text}
    />
  </View>
);

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: "#DDDDDD",
    padding: 10,
  },
  container: {
    marginTop: 20,
  },
});

export default CustomTextInput;

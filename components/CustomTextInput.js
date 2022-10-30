import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";

const CustomTextInput = ({
  valueState,
  errorState,
  placeholder,
  mode = 0,
  isHalf = false,
  isSecure = false,
  capitalize = true,
  number = false,
  passw = false,
  rec = false,
}) => {
  const [value, setValue] = valueState;
  const [error, setError] = errorState;

  const styles = StyleSheet.create({
    input: {
      backgroundColor: "#f3f2f860",
      padding: 16,
      borderColor: error ? "#FA0000" : "#f3f2f800",
      borderWidth: 1,
      borderRadius: 16,
      width: passw ? "80%" : isHalf ? "48%" : rec ? "80%" : "100%",
      marginVertical: 8,
      marginLeft: isHalf ? 8 : 0,
      fontSize: 18,
      color: "black",
      minHeight: mode == 0 ? 128 : 64,
    },
  });

  return (
    <TextInput
      value={value}
      onChangeText={(text) => {
        setError(false);
        setValue(text);
      }}
      placeholderTextColor={mode == 0 ? "#2A2A2A" : "#2A2A2A"}
      placeholder={placeholder}
      style={styles.input}
      secureTextEntry={isSecure}
      autoCapitalize={capitalize ? "sentences" : "none"}
      keyboardType={number ? "numeric" : "default"}
    />
  );
};

export default CustomTextInput;

import React from "react";
import { TextInput, StyleSheet } from "react-native";

const FormInput = ({
  placeholder,
  onChangeText,
  keyboardType = "",
  value,
  secureTextEntry = false,
}) => {
  return (
    <>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor="#999"
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        autoCapitalize="none"
        secureTextEntry={secureTextEntry}
      />
    </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 16,
    color: "#333",
  },
});

export default FormInput;

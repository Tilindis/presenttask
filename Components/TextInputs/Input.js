import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";

const Input = ({
  maxLength,
  bgcolor,
  ktype,
  value,
  onChangeText,
  height,
  placeholder,
  title,
  secure,
}) => (
  <View style={{ width: "95%", height: height }}>
    {title && <Text style={styles.title}>{title}</Text>}
    <TextInput
      style={styles.input}
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
      secureTextEntry={secure}
      keyboardType={ktype}
      backgroundColor={bgcolor}
      maxLength={maxLength}
    />
  </View>
);

export default Input;

const styles = StyleSheet.create({
  input: {
    padding: 7,
    backgroundColor: "rgba(255,255,255,0.4)",
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 10,
    flex: 1,
    marginBottom: 5,
    color: "black",
    fontWeight: "bold",
  },
  title: {
    paddingTop: 10,
    paddingBottom: 5,
    fontSize: 16,
    textAlign: "left",
    color: "lightgrey",
    fontWeight: "bold",
  },
});

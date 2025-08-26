import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const BackButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.backButton} onPress={onPress}>
      <FontAwesome5 name="arrow-left" size={20} color="#17a2b8" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  backIcon: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#777",
  },
});

export default BackButton;

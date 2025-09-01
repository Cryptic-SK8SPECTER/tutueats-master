import React from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";

const SearchBar = ({ placeholder, onChangeText, onFilterPress }) => {
  return (
    <View style={styles.searchContainer}>
      <FontAwesome5 name="search" style={styles.icon} />
      <TextInput
        placeholder={placeholder || "Buscar por restaurante ou prato"}
        style={styles.searchInput}
        placeholderTextColor="#9CA3AF"
        onChangeText={onChangeText}
      />
      <TouchableOpacity style={styles.filterButton} onPress={onFilterPress}>
        <Ionicons name="menu" size={20} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F4F6",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  icon: {
    fontSize: 17,
    color: "#17a2b8",
  },
  filterButton: {
    marginLeft: 8,
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    color: "#374151",
  },
});

export default SearchBar;

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const MenuItem = ({ item }) => {
  return (
    <View style={styles.menuItem}>
      <Image source={{ uri: item.image }} style={styles.menuItemImage} />
      <View style={styles.menuItemContent}>
        <View style={styles.menuItemHeader}>
          <Text style={styles.menuItemName}>{item.name}</Text>
          <TouchableOpacity>
            <Text style={styles.heartIcon}>
              <FontAwesome name="heart-o" size={20} />
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.menuItemDescription}>{item.description}</Text>
        <Text style={styles.menuItemCalories}>{item.calories}</Text>
        <View style={styles.menuItemFooter}>
          <Text style={styles.menuItemPrice}>{item.price}</Text>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menuItem: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    shadowColor: "#777",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
    alignItems: "center", // centraliza verticalmente
  },
  menuItemImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 12,
    alignSelf: "center", // centraliza horizontalmente
  },
  menuItemContent: {
    flex: 1,
  },
  menuItemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menuItemName: {
    fontSize: 16,
    fontWeight: "600",
    flex: 1,
    color: "#777",
  },
  heartIcon: {
    fontSize: 18,
    color: "#00BCD4",
  },
  menuItemDescription: {
    fontSize: 12,
    color: "#6b7280",
    marginVertical: 4,
  },
  menuItemCalories: {
    fontSize: 12,
    color: "#9ca3af",
    marginBottom: 8,
  },
  menuItemFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menuItemPrice: {
    fontSize: 16,
    fontWeight: "600",
    color: "#777",
  },
  addButton: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: "#22d3ee",
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});

export default MenuItem;

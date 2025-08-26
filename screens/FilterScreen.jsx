import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const FilterScreen = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    type: "Spicy",
    category: "Meat",
    dietary: "Nut-Free",
  });

  const toggleFilter = (section, value) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [section]: prev[section] === value ? null : value,
    }));
  };

  const FilterButton = ({ title, isSelected, onPress }) => (
    <TouchableOpacity
      style={[styles.filterButton, isSelected && styles.filterButtonSelected]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.filterButtonText,
          isSelected && styles.filterButtonTextSelected,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="#2F3542" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Filter</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Type Filter */}
        <View style={styles.filterSection}>
          <View style={styles.typeFilters}>
            <FilterButton
              title="New"
              isSelected={selectedFilters.type === "New"}
              onPress={() => toggleFilter("type", "New")}
            />
            <FilterButton
              title="Spicy"
              isSelected={selectedFilters.type === "Spicy"}
              onPress={() => toggleFilter("type", "Spicy")}
            />
          </View>
        </View>

        {/* Category Section */}
        <View style={styles.filterSection}>
          <Text style={styles.sectionTitle}>Category</Text>
          <View style={styles.categoryFilters}>
            <View style={styles.categoryRow}>
              <FilterButton
                title="Salads"
                isSelected={selectedFilters.category === "Salads"}
                onPress={() => toggleFilter("category", "Salads")}
              />
              <FilterButton
                title="Meat"
                isSelected={selectedFilters.category === "Meat"}
                onPress={() => toggleFilter("category", "Meat")}
              />
              <FilterButton
                title="Pasta"
                isSelected={selectedFilters.category === "Pasta"}
                onPress={() => toggleFilter("category", "Pasta")}
              />
            </View>
            <View style={styles.categoryRow}>
              <FilterButton
                title="Desserts"
                isSelected={selectedFilters.category === "Desserts"}
                onPress={() => toggleFilter("category", "Desserts")}
              />
              <FilterButton
                title="Drinks"
                isSelected={selectedFilters.category === "Drinks"}
                onPress={() => toggleFilter("category", "Drinks")}
              />
              <FilterButton
                title="Soups"
                isSelected={selectedFilters.category === "Soups"}
                onPress={() => toggleFilter("category", "Soups")}
              />
            </View>
            <View style={styles.categoryRow}>
              <FilterButton
                title="Snacks"
                isSelected={selectedFilters.category === "Snacks"}
                onPress={() => toggleFilter("category", "Snacks")}
              />
            </View>
          </View>
        </View>

        {/* Dietary Preferences Section */}
        <View style={styles.filterSection}>
          <Text style={styles.sectionTitle}>Dietary Preferences</Text>
          <View style={styles.dietaryFilters}>
            <View style={styles.dietaryRow}>
              <FilterButton
                title="Vegetarian"
                isSelected={selectedFilters.dietary === "Vegetarian"}
                onPress={() => toggleFilter("dietary", "Vegetarian")}
              />
              <FilterButton
                title="Vegan"
                isSelected={selectedFilters.dietary === "Vegan"}
                onPress={() => toggleFilter("dietary", "Vegan")}
              />
              <FilterButton
                title="Gluten-Free"
                isSelected={selectedFilters.dietary === "Gluten-Free"}
                onPress={() => toggleFilter("dietary", "Gluten-Free")}
              />
            </View>
            <View style={styles.dietaryRow}>
              <FilterButton
                title="Nut-Free"
                isSelected={selectedFilters.dietary === "Nut-Free"}
                onPress={() => toggleFilter("dietary", "Nut-Free")}
              />
              <FilterButton
                title="Keto"
                isSelected={selectedFilters.dietary === "Keto"}
                onPress={() => toggleFilter("dietary", "Keto")}
              />
            </View>
            <View style={styles.dietaryRow}>
              <FilterButton
                title="Low-Fat"
                isSelected={selectedFilters.dietary === "Low-Fat"}
                onPress={() => toggleFilter("dietary", "Low-Fat")}
              />
              <FilterButton
                title="Organic"
                isSelected={selectedFilters.dietary === "Organic"}
                onPress={() => toggleFilter("dietary", "Organic")}
              />
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Buttons */}
      <View style={styles.bottomButtons}>
        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.applyButtonText}>Apply Filters</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.resetButton}>
          <Text style={styles.resetButtonText}>Reset Filters</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#F8F9FA",
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#2F3542",
  },
  headerRight: {
    width: 40,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  filterSection: {
    marginBottom: 35,
  },
  typeFilters: {
    flexDirection: "row",
    gap: 12,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2F3542",
    marginBottom: 18,
  },
  categoryFilters: {
    gap: 12,
  },
  categoryRow: {
    flexDirection: "row",
    gap: 12,
    flexWrap: "wrap",
  },
  dietaryFilters: {
    gap: 12,
  },
  dietaryRow: {
    flexDirection: "row",
    gap: 12,
    flexWrap: "wrap",
  },
  filterButton: {
    backgroundColor: "#E8EAED",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  filterButtonSelected: {
    backgroundColor: "#00BCC9",
  },
  filterButtonText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#5A6C7D",
  },
  filterButtonTextSelected: {
    color: "#FFFFFF",
  },
  bottomButtons: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 10,
    gap: 12,
  },
  applyButton: {
    backgroundColor: "#00BCC9",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  applyButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  resetButton: {
    backgroundColor: "transparent",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#00BCC9",
  },
  resetButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#00BCC9",
  },
});

export default FilterScreen;

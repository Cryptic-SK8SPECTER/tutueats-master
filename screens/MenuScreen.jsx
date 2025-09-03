import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { Header, SearchBar, MenuItem } from "../components";

const categories = ["Salads", "Meat", "Pasta", "Soups", "Hot Meals", "Fish"];

const menuItems = [
  {
    id: 1,
    name: "Beef Stroganoff",
    description:
      "Combining yogurt with herbs, garlic, lemon juice, and spices can create a tangy and light dressing option.",
    calories: "110 kcal - 200g",
    price: "1499 MZN",
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=80&h=80&fit=crop",
  },
  {
    id: 2,
    name: "Caesar Salad",
    description: "Fresh lettuce with chicken, croutons, and parmesan cheese.",
    calories: "120 kcal - 180g",
    price: "1299 MZN",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=80&q=80",
  },
  {
    id: 3,
    name: "Grilled Salmon",
    description: "Succulent salmon fillet with a lemon herb sauce.",
    calories: "150 kcal - 250g",
    price: "1899 MZN",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=80&q=80",
  },
  {
    id: 4,
    name: "Vegetarian Pasta",
    description: "Pasta with seasonal vegetables and olive oil dressing.",
    calories: "130 kcal - 220g",
    price: "1349 MZN",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=80&q=80",
  },
  {
    id: 5,
    name: "Chicken Parmesan",
    description: "Breaded chicken with marinara sauce and melted cheese.",
    calories: "200 kcal - 300g",
    price: "1699 MZN",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=80&q=80",
  },
  {
    id: 6,
    name: "Mushroom Risotto",
    description: "Creamy risotto with wild mushrooms and parmesan.",
    calories: "140 kcal - 200g",
    price: "1549 MZN",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=80&q=80",
  },
];

export default function MenuScreen() {
  const renderItem = ({ item }) => <MenuItem item={item} />;
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Pasta");
  const [cartTotal, setCartTotal] = useState(156.9);

  return (
    <>
      <Header />

      <SafeAreaView style={styles.container}>
        {/* Header */}
        {/* Search */}
        <View style={styles.searchContainer}>
          <SearchBar />
        </View>

        {/* Categories */}
        <View style={styles.categoriesContainer}>
          {categories.map((cat) => (
            <TouchableOpacity
              key={cat}
              style={[
                styles.categoryButton,
                selectedCategory === cat && styles.categoryButtonActive,
              ]}
              onPress={() => setSelectedCategory(cat)}
            >
              <Text
                style={[
                  styles.categoryText,
                  selectedCategory === cat && styles.categoryTextActive,
                ]}
              >
                {cat}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Menu Items */}
        <FlatList
          data={menuItems.filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
          )}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 100 }}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafb",
    paddingHorizontal: 16,
  },
  cartContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#06B6D4",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 20,
  },
  cartTotal: {
    color: "#fff",
    fontWeight: "600",
    marginRight: 4,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginVertical: 12,
    gap: 8,
  },
  categoriesContainer: {
    flexDirection: "row",
    marginBottom: 12,
    gap: 8,
  },
  categoryButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: "#fff",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  categoryButtonActive: {
    backgroundColor: "#fff",
    borderColor: "#06B6D4",
  },
  categoryText: {
    fontSize: 14,
    color: "#6b7280",
  },
  categoryTextActive: {
    color: "#06B6D4",
    fontWeight: "600",
  },
});

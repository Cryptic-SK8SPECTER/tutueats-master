import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  SafeAreaView,
} from "react-native";
import { UserNavigation } from "../components";

const MenuScreen = () => {
  const menuItems = [
    {
      id: 1,
      name: "Creamy Chicken Alfredo",
      description:
        "Combining yogurt with herbs, garlic, lemon juice, and spices can create a tangy and light dressing option.",
      calories: "110 kcal - 200g",
      price: "$13.49",
      image: {
        uri: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=80&h=80&fit=crop",
      },
      isNew: true,
      isSpicy: false,
    },
    {
      id: 2,
      name: "Pan-Seared Salmon",
      description:
        "Combining yogurt with herbs, garlic, lemon juice, and spices can create a tangy and light dressing option.",
      calories: "110 kcal - 200g",
      price: "$15.99",
      image: {
        uri: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=80&h=80&fit=crop",
      },
      isNew: false,
      isSpicy: false,
    },
    {
      id: 3,
      name: "Pan-Seared Duck",
      description:
        "Combining yogurt with herbs, garlic, lemon juice, and spices can create a tangy and light dressing option.",
      calories: "110 kcal - 200g",
      price: "$18.99",
      image: {
        uri: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=80&h=80&fit=crop",
      },
      isNew: false,
      isSpicy: true,
    },
  ];

  const categories = ["Salads", "Meat", "Pasta", "Soups", "Hot Meals", "Fish"];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backArrow}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Menu</Text>
        <View style={styles.headerRight}>
          <View style={styles.cartContainer}>
            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>2</Text>
            </View>
            <TouchableOpacity style={styles.cartButton}>
              <View style={styles.cartIconContainer}>
                <Text style={styles.cartIcon}>🛒</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <View style={styles.searchIconContainer}>
            <Text style={styles.searchIcon}>🔍</Text>
          </View>
          <TextInput
            style={styles.searchInput}
            placeholder="Pesquisar ..."
            placeholderTextColor="#a0a0a0"
          />
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterIcon}>☰</Text>
        </TouchableOpacity>
      </View>

      {/* Category Tabs */}
      <View style={styles.categoryWrapper}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoryContainer}
          contentContainerStyle={styles.categoryContentContainer}
        >
          {categories.map((category, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.categoryTab,
                category === "Meat" && styles.activeCategoryTab,
              ]}
            >
              <Text
                style={[
                  styles.categoryText,
                  category === "Meat" && styles.activeCategoryText,
                ]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Menu Items */}
      <ScrollView
        style={styles.menuContainer}
        showsVerticalScrollIndicator={false}
      >
        {menuItems.map((item) => (
          <View key={item.id} style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <View style={styles.menuItemImageContainer}>
                <Image
                  source={item.image}
                  style={styles.itemImage}
                  defaultSource={{
                    uri: "https://via.placeholder.com/70x70/cccccc/ffffff?text=Food",
                  }}
                />
                {item.isNew && (
                  <View style={styles.newBadge}>
                    <Text style={styles.newBadgeText}>NEW</Text>
                  </View>
                )}
                {item.isSpicy && (
                  <View style={styles.spicyBadge}>
                    <Text style={styles.spicyIcon}>🌶️</Text>
                  </View>
                )}
              </View>
            </View>

            <View style={styles.menuItemRight}>
              <View style={styles.menuItemHeader}>
                <Text style={styles.menuItemName}>{item.name}</Text>
                <TouchableOpacity style={styles.favoriteButton}>
                  <Text style={styles.favoriteIcon}>♡</Text>
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
        ))}
      </ScrollView>
      <UserNavigation activeTab={1} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  backArrow: {
    fontSize: 28,
    color: "#333",
    fontWeight: "300",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
    flex: 1,
    textAlign: "center",
    marginRight: 40, // Balance the back button
  },
  headerRight: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  cartContainer: {
    position: "relative",
  },
  cartBadge: {
    position: "absolute",
    top: -8,
    right: -8,
    backgroundColor: "#00bcd4",
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  cartBadgeText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "bold",
  },
  cartButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  cartIconContainer: {
    backgroundColor: "#f5f5f5",
    borderRadius: 20,
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
  },
  cartIcon: {
    fontSize: 18,
  },
  searchContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginRight: 10,
  },
  searchIconContainer: {
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  searchIcon: {
    fontSize: 16,
    color: "#a0a0a0",
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    paddingVertical: 0,
  },
  filterButton: {
    backgroundColor: "#f5f5f5",
    borderRadius: 25,
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  filterIcon: {
    fontSize: 18,
    color: "#666",
  },
  categoryWrapper: {
    backgroundColor: "#fff",
    paddingBottom: 20,
  },
  categoryContainer: {
    paddingHorizontal: 20,
  },
  categoryContentContainer: {
    alignItems: "center",
  },
  categoryTab: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    marginRight: 12,
    borderRadius: 25,
    backgroundColor: "#f5f5f5",
    minWidth: 80,
    alignItems: "center",
  },
  activeCategoryTab: {
    backgroundColor: "#00bcd4",
  },
  categoryText: {
    fontSize: 15,
    color: "#666",
    fontWeight: "500",
  },
  activeCategoryText: {
    color: "#fff",
    fontWeight: "600",
  },
  menuContainer: {
    flex: 1,
    paddingTop: 10,
  },
  menuItem: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginBottom: 15,
    borderRadius: 15,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  menuItemLeft: {
    marginRight: 15,
  },
  menuItemImageContainer: {
    position: "relative",
    width: 80,
    height: 80,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 45,
  },
  newBadge: {
    position: "absolute",
    top: -8,
    left: -8,
    backgroundColor: "#ff4757",
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  newBadgeText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },
  spicyBadge: {
    position: "absolute",
    bottom: -8,
    left: -8,
    backgroundColor: "#fff",
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  spicyIcon: {
    fontSize: 14,
  },
  menuItemRight: {
    flex: 1,
    justifyContent: "space-between",
  },
  menuItemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 2,
  },
  menuItemName: {
    fontSize: 17,
    fontWeight: "600",
    color: "#333",
    flex: 1,
    marginRight: 10,
  },
  favoriteButton: {
    padding: 5,
  },
  favoriteIcon: {
    fontSize: 22,
    color: "#ddd",
  },
  menuItemDescription: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
    marginBottom: 8,
  },
  menuItemCalories: {
    fontSize: 12,
    color: "#999",
    marginBottom: 12,
  },
  menuItemFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menuItemPrice: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
  },
  addButton: {
    backgroundColor: "#f5f5f5",
    borderRadius: 20,
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    fontSize: 22,
    fontWeight: "300",
    color: "#666",
  },
});

export default MenuScreen;

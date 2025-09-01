import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import { Header, DiscountBanner, FoodCard, SearchBar } from "../components";

// Note: In React Native, you would import icons from react-native-vector-icons
// For this demo, I'm using simple text representations
const MapPinIcon = () => <Text style={styles.icon}>📍</Text>;
const SearchIcon = () => <Text style={styles.icon}>🔍</Text>;
const BellIcon = () => <Text style={styles.icon}>🔔</Text>;
const StarIcon = () => <Text style={styles.icon}>⭐</Text>;
const PlusIcon = () => <Text style={styles.icon}>+</Text>;
const MinusIcon = () => <Text style={styles.icon}>-</Text>;
const HomeIcon = () => <Text style={styles.icon}>🏠</Text>;
const OrderIcon = () => <Text style={styles.icon}>📋</Text>;
const MessageIcon = () => <Text style={styles.icon}>💬</Text>;
const CartIcon = () => <Text style={styles.icon}>🛒</Text>;
const UserIcon = () => <Text style={styles.icon}>👤</Text>;
const FilterIcon = () => <Text style={styles.icon}>☰</Text>;

const FoodDeliveryApp = () => {
  const [currentScreen, setCurrentScreen] = useState("home");
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Pan-Seared Salmon",
      calories: "110 kcal - 200g",
      price: 15.99,
      quantity: 7,
    },
    {
      id: 2,
      name: "Creamy Chicken Alfredo",
      calories: "110 kcal - 200g",
      price: 13.49,
      quantity: 2,
      isNew: true,
    },
  ]);

  const featuredRestaurants = [
    {
      id: 1,
      name: "Pizza Palace",
      rating: 4.8,
      time: "30-45min",
      logo: "Logo Rest.",
    },
    {
      id: 2,
      name: "Burger House",
      rating: 4.6,
      time: "25-40min",
      logo: "Logo Rest.",
    },
    {
      id: 3,
      name: "Sushi Zen",
      rating: 4.9,
      time: "40-55min",
      logo: "Logo Rest.",
    },
    {
      id: 4,
      name: "Sushi Zen",
      rating: 4.9,
      time: "40-55min",
      logo: "Logo Rest.",
    },
    {
      id: 5,
      name: "Sushi Zen",
      rating: 4.9,
      time: "40-55min",
      logo: "Logo Rest.",
    },
  ];

  const featuredDishes = [
    {
      id: 1,
      name: "Pizza Margherita",
      restaurant: "Pizza Palace",
      price: 29.9,
    },
    { id: 2, name: "X-Bacon Duplo", restaurant: "Burger House", price: 24.9 },
  ];

  const nearbyRestaurants = [
    {
      id: 1,
      name: "Cantina Italiana",
      cuisine: "Italiana • $$",
      rating: 4.7,
      time: "35-50min",
      distance: "1.2km",
      status: "Aberto",
    },
    {
      id: 2,
      name: "Açaí da Praia",
      cuisine: "Açaí • $",
      rating: 4.5,
      time: "15-25min",
      distance: "0.8km",
      status: "Aberto",
    },
  ];

  const updateQuantity = (id, change) => {
    setCartItems((items) =>
      items
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(0, item.quantity + change) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const getSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const getTotal = () => {
    const subtotal = getSubtotal();
    const delivery = 0;
    return subtotal + delivery;
  };

  const HomeScreen = () => (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView style={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
          {/* Search Bar */}
          <SearchBar />
        </View>

        {/* Promotional Banner */}
        <DiscountBanner />

        {/* Featured Restaurants */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Restaurantes em Destaque</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.horizontalScroll}
          >
            {featuredRestaurants.map((restaurant) => (
              <TouchableOpacity
                key={restaurant.id}
                style={styles.restaurantCard}
              >
                <View style={styles.restaurantLogo}>
                  <Text style={styles.restaurantLogoText}>
                    {restaurant.logo}
                  </Text>
                </View>
                <Text style={styles.restaurantName}>{restaurant.name}</Text>
                <View style={styles.restaurantInfo}>
                  <FontAwesome5 name="star" style={styles.icon} />
                  <Text style={styles.restaurantInfoText}>
                    {restaurant.rating} • {restaurant.time}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Featured Dishes */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Pratos em Destaque</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.horizontalScroll}
          >
            {featuredDishes.map((dish) => (
              <FoodCard
                key={dish.id}
                name={dish.name}
                price={dish.price}
                image={dish.image}
                isNew={dish.isNew}
              />
            ))}
          </ScrollView>
        </View>

        {/* Nearby Restaurants */}
        <View style={[styles.section, styles.lastSection]}>
          <Text style={styles.sectionTitle}>Restaurantes Próximos</Text>
          {nearbyRestaurants.map((restaurant) => (
            <View key={restaurant.id} style={styles.nearbyCard}>
              <View style={styles.nearbyImage}>
                <Text style={styles.nearbyImageText}>Rest.</Text>
              </View>
              <View style={styles.nearbyInfo}>
                <View style={styles.nearbyHeader}>
                  <Text style={styles.nearbyName}>{restaurant.name}</Text>
                  <Text style={styles.nearbyStatus}>{restaurant.status}</Text>
                </View>
                <Text style={styles.nearbyCuisine}>{restaurant.cuisine}</Text>
                <View style={styles.nearbyDetails}>
                  <StarIcon />
                  <Text style={styles.nearbyDetailsText}>
                    {restaurant.rating} • {restaurant.time} •{" "}
                    {restaurant.distance}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );

  const OrderScreen = () => (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />

      {/* Header */}
      <View style={styles.orderHeader}>
        <Text style={styles.orderTitle}>Order</Text>
        <View style={styles.orderTotal}>
          <Text style={styles.orderTotalText}>${getTotal().toFixed(2)}</Text>
          <CartIcon />
        </View>
      </View>

      <ScrollView style={styles.scrollContainer}>
        {/* Cart Items */}
        <View style={styles.cartContainer}>
          {cartItems.map((item) => (
            <View key={item.id} style={styles.cartItem}>
              <View style={styles.cartItemContent}>
                <View style={styles.cartItemImageContainer}>
                  <View style={styles.cartItemImage} />
                  {item.isNew && (
                    <View style={styles.newBadge}>
                      <Text style={styles.newBadgeText}>NEW</Text>
                    </View>
                  )}
                </View>

                <View style={styles.cartItemInfo}>
                  <Text style={styles.cartItemName}>{item.name}</Text>
                  <Text style={styles.cartItemCalories}>{item.calories}</Text>
                  <Text style={styles.cartItemPrice}>
                    ${item.price.toFixed(2)}
                  </Text>
                </View>

                <View style={styles.quantityControls}>
                  <TouchableOpacity
                    onPress={() => updateQuantity(item.id, -1)}
                    style={styles.quantityButton}
                  >
                    <MinusIcon />
                  </TouchableOpacity>

                  <Text style={styles.quantityText}>{item.quantity}</Text>

                  <TouchableOpacity
                    onPress={() => updateQuantity(item.id, 1)}
                    style={styles.quantityButton}
                  >
                    <PlusIcon />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </View>

        {/* Order Summary */}
        <View style={styles.summaryContainer}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Subtotal</Text>
            <Text style={styles.summaryValue}>${getSubtotal().toFixed(2)}</Text>
          </View>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabelSecondary}>Delivery</Text>
            <Text style={styles.summaryValueSecondary}>$0</Text>
          </View>

          <View style={styles.summaryDivider} />

          <View style={styles.summaryRow}>
            <Text style={styles.summaryTotal}>Total</Text>
            <Text style={styles.summaryTotal}>${getTotal().toFixed(2)}</Text>
          </View>
        </View>

        {/* Checkout Button */}
        <View style={styles.checkoutContainer}>
          <TouchableOpacity style={styles.checkoutButton}>
            <Text style={styles.checkoutButtonText}>Checkout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );

  const BottomNavigation = () => (
    <View style={styles.bottomNav}>
      <TouchableOpacity
        onPress={() => setCurrentScreen("home")}
        style={[
          styles.navItem,
          currentScreen === "home" && styles.navItemActive,
        ]}
      >
        <HomeIcon />
        <Text
          style={[
            styles.navText,
            currentScreen === "home" && styles.navTextActive,
          ]}
        >
          Início
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItem}>
        <OrderIcon />
        <Text style={styles.navText}>Pedidos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItem}>
        <MessageIcon />
        <Text style={styles.navText}>Mensagens</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setCurrentScreen("order")}
        style={[
          styles.navItem,
          currentScreen === "order" && styles.navItemActive,
        ]}
      >
        <View style={styles.cartIconContainer}>
          <CartIcon />
          {cartItems.length > 0 && (
            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>
                {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
              </Text>
            </View>
          )}
        </View>
        <Text
          style={[
            styles.navText,
            currentScreen === "order" && styles.navTextActive,
          ]}
        >
          Carrinho
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItem}>
        <UserIcon />
        <Text style={styles.navText}>Perfil</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.appContainer}>
      {currentScreen === "home" ? <HomeScreen /> : <OrderScreen />}
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  scrollContainer: {
    flex: 1,
  },

  // Header Styles
  header: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  headerTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    marginLeft: 8,
    color: "#374151",
    fontWeight: "500",
  },

  // Search Bar Styles

  // Section Styles
  section: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  lastSection: {
    paddingBottom: 100,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#777",
    marginBottom: 16,
  },

  // Restaurant Card Styles
  horizontalScroll: {
    marginHorizontal: -8,
  },
  restaurantCard: {
    marginHorizontal: 8,
  },
  restaurantLogo: {
    backgroundColor: "#D1D5DB",
    borderRadius: 12,
    padding: 32,
    width: 128,
    height: 96,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  restaurantLogoText: {
    color: "#FFFFFF",
    fontWeight: "500",
  },
  restaurantName: {
    fontWeight: "bold",
    color: "#777",
    marginBottom: 4,
  },
  restaurantInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  restaurantInfoText: {
    marginLeft: 4,
    color: "#6B7280",
    fontSize: 14,
  },

  // Dish Card Styles
  dishCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  dishImage: {
    backgroundColor: "#D1D5DB",
    borderRadius: 12,
    width: 64,
    height: 64,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  dishImageText: {
    color: "#FFFFFF",
    fontSize: 12,
  },
  dishInfo: {
    flex: 1,
  },
  dishName: {
    fontWeight: "bold",
    color: "#111827",
  },
  dishRestaurant: {
    color: "#6B7280",
    fontSize: 14,
  },
  dishPrice: {
    color: "#111827",
    fontWeight: "bold",
  },
  addButton: {
    backgroundColor: "#111827",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
  },
  addButtonText: {
    color: "#FFFFFF",
    fontWeight: "500",
  },

  // Nearby Restaurant Styles
  nearbyCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  nearbyImage: {
    backgroundColor: "#D1D5DB",
    borderRadius: 12,
    width: 64,
    height: 64,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  nearbyImageText: {
    color: "#FFFFFF",
    fontSize: 12,
  },
  nearbyInfo: {
    flex: 1,
  },
  nearbyHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  nearbyName: {
    fontWeight: "bold",
    color: "#777",
  },
  nearbyStatus: {
    fontSize: 14,
    color: "#6B7280",
  },
  nearbyCuisine: {
    color: "#6B7280",
    fontSize: 14,
    marginBottom: 4,
  },
  nearbyDetails: {
    flexDirection: "row",
    alignItems: "center",
  },
  nearbyDetailsText: {
    marginLeft: 4,
    color: "#6B7280",
    fontSize: 14,
  },

  // Order Screen Styles
  orderHeader: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  orderTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111827",
  },
  orderTotal: {
    backgroundColor: "#14B8A6",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  orderTotalText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    marginRight: 4,
  },

  // Cart Item Styles
  cartContainer: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  cartItem: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  cartItemContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  cartItemImageContainer: {
    position: "relative",
    marginRight: 16,
  },
  cartItemImage: {
    backgroundColor: "#FED7AA",
    borderRadius: 32,
    width: 64,
    height: 64,
  },
  newBadge: {
    position: "absolute",
    top: -8,
    left: -8,
    backgroundColor: "#EF4444",
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  newBadgeText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "bold",
  },
  cartItemInfo: {
    flex: 1,
  },
  cartItemName: {
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 4,
  },
  cartItemCalories: {
    color: "#6B7280",
    fontSize: 14,
    marginBottom: 8,
  },
  cartItemPrice: {
    fontWeight: "bold",
    color: "#111827",
  },

  // Quantity Controls
  quantityControls: {
    alignItems: "center",
  },
  quantityButton: {
    width: 32,
    height: 32,
    backgroundColor: "#F3F4F6",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  quantityText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#111827",
    marginBottom: 8,
  },

  // Summary Styles
  summaryContainer: {
    marginHorizontal: 24,
    marginBottom: 24,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 24,
    borderWidth: 2,
    borderColor: "#A7F3D0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  summaryLabel: {
    color: "#374151",
  },
  summaryValue: {
    fontWeight: "bold",
    color: "#111827",
  },
  summaryLabelSecondary: {
    color: "#6B7280",
  },
  summaryValueSecondary: {
    color: "#6B7280",
  },
  summaryDivider: {
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    paddingTop: 16,
  },
  summaryTotal: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111827",
  },

  // Checkout Button
  checkoutContainer: {
    paddingHorizontal: 24,
    paddingBottom: 100,
  },
  checkoutButton: {
    backgroundColor: "#14B8A6",
    paddingVertical: 16,
    borderRadius: 12,
  },
  checkoutButtonText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },

  // Bottom Navigation Styles
  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    paddingHorizontal: 24,
    paddingVertical: 12,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  navItem: {
    alignItems: "center",
    paddingVertical: 8,
    opacity: 0.5,
  },
  navItemActive: {
    opacity: 1,
  },
  navText: {
    fontSize: 12,
    marginTop: 4,
    color: "#6B7280",
  },
  navTextActive: {
    color: "#14B8A6",
  },
  cartIconContainer: {
    position: "relative",
  },
  cartBadge: {
    position: "absolute",
    top: -4,
    right: -4,
    backgroundColor: "#EF4444",
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  cartBadgeText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "bold",
  },
});

export default FoodDeliveryApp;

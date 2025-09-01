import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from "react-native";

import { Header } from "./../components";

const OrderScreen = () => {
  const [quantity, setQuantity] = useState(7);

  const itemPrice = 15.99;
  const subtotal = quantity * itemPrice;
  const delivery = 0;
  const total = 100;

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Header */}
      <Header />

      {/* Order Item */}
      <View style={styles.orderItem}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=80&h=80&fit=crop",
          }}
          style={styles.foodImage}
        />
        <View style={styles.itemDetails}>
          <Text style={styles.itemName}>Pan-Seared Salmon</Text>
          <Text style={styles.itemInfo}>110 kcal - 200g</Text>
          <Text style={styles.itemPrice}>{itemPrice.toFixed(2)} MZN</Text>
        </View>
        <View style={styles.quantityControls}>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={decrementQuantity}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableOpacity
            style={[styles.quantityButton, styles.plusButton]}
            onPress={incrementQuantity}
          >
            <Text style={styles.plusButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Order Summary */}
      <View style={styles.summaryContainer}>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Subtotal</Text>
          <Text style={styles.summaryValue}>{subtotal.toFixed(2)} MZN</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Delivery</Text>
          <Text style={styles.summaryValue}>{delivery}</Text>
        </View>
        <View style={[styles.summaryRow, styles.totalRow]}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalValue}>{total.toFixed(2)} MZN</Text>
        </View>
      </View>

      {/* Checkout Button */}
      <TouchableOpacity
        style={styles.checkoutButton}
        onPress={() => console.log("Proceeding to checkout")}
      >
        <Text style={styles.checkoutText}>Confirmar pagamento</Text>
      </TouchableOpacity>
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
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  profileContainer: {
    width: 40,
  },
  profileImage: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },

  orderItem: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginTop: 20,
    padding: 15,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  foodImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 15,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  itemInfo: {
    fontSize: 12,
    color: "#999",
    marginBottom: 4,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  quantityControls: {
    alignItems: "center",
  },
  quantityButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  plusButton: {
    backgroundColor: "#e0f7fa",
    marginTop: 8,
    marginBottom: 0,
  },
  buttonText: {
    fontSize: 18,
    color: "#666",
    fontWeight: "600",
  },
  plusButtonText: {
    fontSize: 18,
    color: "#00BCD4",
    fontWeight: "600",
  },
  quantity: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    paddingVertical: 4,
  },
  summaryContainer: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginTop: 20,
    padding: 20,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#00BCD4",
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  summaryLabel: {
    fontSize: 14,
    color: "#666",
  },
  summaryValue: {
    fontSize: 14,
    color: "#333",
    fontWeight: "500",
  },
  totalRow: {
    marginTop: 8,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#eee",
    marginBottom: 0,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  totalValue: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  checkoutButton: {
    backgroundColor: "#00BCD4",
    marginHorizontal: 20,
    marginTop: 30,
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
  },
  checkoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  bottomNav: {
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingVertical: 15,
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderTopColor: "#eee",
    marginTop: "auto",
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
  activeNavItem: {
    opacity: 1,
  },
  navIcon: {
    fontSize: 24,
    opacity: 0.5,
  },
  activeNavIcon: {
    fontSize: 24,
    opacity: 1,
  },
});

export default OrderScreen;

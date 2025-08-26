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
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import { Header, UserNavigation } from "../components";

const FoodDetailsScreen = () => {
  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      {/* Header */}
      <Header />
      {/* Product Image */}
      <View style={styles.imageContainer}>
        <View style={styles.dishPlate}>
          <Image
            source={{
              uri: "https://placehold.co/600x400/EEE/31343C?font=lora&text=Lora",
            }}
            style={styles.foodImage}
          />
        </View>
      </View>

      {/* Product Details */}
      <View style={styles.productDetails}>
        <Text style={styles.productTitle}>Creamy Chicken Alfredo</Text>
        <Text style={styles.productInfo}>110 kcal - 200g</Text>
        <Text style={styles.productDescription}>
          Combinar iogurte com ervas, alho, suco de limão e especiarias pode
          criar uma opção de molho leve e picante.
        </Text>

        {/* Price and Quantity */}
        <View style={styles.priceContainer}>
          <Text style={styles.price}>1349 MZN</Text>

          <View style={styles.quantityContainer}>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={decrementQuantity}
            >
              {/* <Minus size={16} color="#666" /> */}
              <FontAwesome5 name="minus" size={20} color="#666" />
            </TouchableOpacity>
            <Text style={styles.quantity}>{quantity}</Text>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={incrementQuantity}
            >
              <FontAwesome5 name="plus" size={20} color="#666" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Add to Cart Button */}
        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartText}>
            <FontAwesome5 name="plus" size={20} color="#fff" /> Adicionar ao
            carinho
          </Text>
        </TouchableOpacity>

        {/* Reviews Button */}
        <TouchableOpacity style={styles.reviewsButton}>
          <Text style={styles.reviewsText}>Avaliações</Text>
        </TouchableOpacity>
      </View>

      <UserNavigation />
    </SafeAreaView>
  );
};

export default FoodDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  backButton: {
    padding: 5,
  },
  cartContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  cartPrice: {
    fontSize: 16,
    fontWeight: "600",
    color: "#00BCD4",
  },
  cartButton: {
    backgroundColor: "#00BCD4",
    borderRadius: 8,
    padding: 8,
  },
  imageContainer: {
    alignItems: "center",
    paddingVertical: 30,
    flex: 1,
    justifyContent: "center",
  },
  dishPlate: {
    width: 280,
    height: 280,
    borderRadius: 140,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  creamySauce: {
    width: 240,
    height: 240,
    borderRadius: 120,
    backgroundColor: "#FFF8E1",
    position: "relative",
  },
  chickenPiece: {
    position: "absolute",
    width: 35,
    height: 25,
    backgroundColor: "#F4E4BC",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  mushroom: {
    position: "absolute",
    width: 20,
    height: 20,
    backgroundColor: "#E8E8E8",
    borderRadius: 10,
  },
  herb: {
    position: "absolute",
    width: 3,
    height: 8,
    backgroundColor: "#4CAF50",
    borderRadius: 2,
  },
  productDetails: {
    padding: 25,
    paddingTop: 15,
  },
  productTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#333",
    marginBottom: 8,
  },
  productInfo: {
    fontSize: 14,
    color: "#888",
    marginBottom: 12,
  },
  productDescription: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
    marginBottom: 25,
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
  },
  price: {
    fontSize: 24,
    fontWeight: "700",
    color: "#333",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  quantityButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
  },
  quantity: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    minWidth: 20,
    textAlign: "center",
  },
  addToCartButton: {
    backgroundColor: "#00BCD4",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 15,
  },
  addToCartText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  reviewsButton: {
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#00BCD4",
  },
  reviewsText: {
    color: "#00BCD4",
    fontSize: 16,
    fontWeight: "600",
  },
});

import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Heart, Plus } from "lucide-react-native";

export default function FoodCard({ name, price, image, isNew }) {
  return (
    <View style={styles.card}>
      {isNew && (
        <View style={styles.newBadge}>
          <Text style={styles.newBadgeText}>NEW</Text>
        </View>
      )}
      {/* Imagem */}
      <Image
        source={
          image
            ? { uri: image }
            : {
                uri: "https://george-fx.github.io/dinehub_api/assets/dishes/03.jpg",
              }
        }
        style={styles.image}
      />

      {/* Botões de ação */}
      <View style={styles.actionRow}>
        <TouchableOpacity>
          <Heart size={22} color="#17a2b8" fill="#17a2b8" />
        </TouchableOpacity>
      </View>

      {/* Nome */}
      <Text style={styles.title}>{name}</Text>

      {/* Preço */}
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{price} MZN</Text>
        <TouchableOpacity style={styles.addButton}>
          <Plus size={20} color="#777" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f9fdfd",
    borderRadius: 16,
    padding: 12,
    margin: 10,
    width: 180,
    alignItems: "center",
    shadowColor: "#777",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
    position: "relative",
  },
  newBadge: {
    position: "absolute",
    top: 16,
    left: 16,
    backgroundColor: "#ff4757",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    zIndex: 10,
  },
  newBadgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  actionRow: {
    position: "absolute",
    top: 12,
    right: 12,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 6,
    width: "100%",
    color: "#777",
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#777",
  },
  weight: {
    fontSize: 14,
    color: "#999",
    marginLeft: 8,
  },
  addButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
  },
});

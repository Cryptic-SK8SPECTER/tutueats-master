import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Burger from "./../assets/img/burger-master.png";

const DiscountBanner = () => {
  return (
    <TouchableOpacity style={styles.bannerContainer} activeOpacity={0.8}>
      <View style={styles.contentContainer}>
        <View style={styles.textSection}>
          <Text style={styles.discountText}>30%</Text>
          <Text style={styles.discountLabel}>DISCOUNT ONLY</Text>
          <Text style={styles.validText}>VALID FOR TODAY!</Text>
        </View>

        <View style={styles.imageSection}>
          <Image
            source={Burger}
            style={styles.burgerImage}
            resizeMode="cover"
          />

          {/* Overlay para melhor destaque */}
          <View style={styles.imageOverlay} />
        </View>
      </View>

      {/* Elemento decorativo */}
      <View style={styles.decorativeCircle} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    backgroundColor: "#17a2b8",
    borderRadius: 16,
    marginHorizontal: 20,
    marginVertical: 15,
    overflow: "hidden",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    paddingLeft: 20,
    paddingRight: 15,
    minHeight: 130,
  },
  textSection: {
    flex: 1,
    justifyContent: "center",
  },
  discountText: {
    fontSize: 48,
    fontWeight: "900",
    color: "#FFFFFF",
    lineHeight: 50,
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  discountLabel: {
    fontSize: 14,
    fontWeight: "700",
    color: "#FFFFFF",
    letterSpacing: 1,
    marginTop: -5,
  },
  validText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#E8F5E8",
    marginTop: 4,
    letterSpacing: 0.5,
  },
  imageSection: {
    width: 120,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  burgerImage: {
    width: 160,
    height: 160,
  },
  decorativeCircle: {
    position: "absolute",
    top: -40,
    right: -40,
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 0.08)",
  },
  imageOverlay: {
    position: "absolute",
    top: 10,
    right: 10,
    bottom: 10,
    left: 10,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.3)",
  },
});

export default DiscountBanner;

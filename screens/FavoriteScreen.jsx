import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Image,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const FavoriteScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>👨</Text>
          </View>
        </View>

        <Text style={styles.headerTitle}>Favorite</Text>

        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>$155.90</Text>
          <MaterialIcons
            name="shopping-cart"
            size={20}
            color="#fff"
            style={styles.cartIcon}
          />
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        {/* Phone with Heart Animation */}
        <View style={styles.phoneContainer}>
          <View style={styles.heartContainer}>
            <Image
              source={{
                uri: "https://george-fx.github.io/dinehub_api/assets/images/01.jpg",
              }}
              style={{ width: 300, height: 300 }}
              resizeMode="contain"
            />
          </View>
        </View>

        {/* Text Content */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>Sua lista de favoritos está vazia!</Text>
          <Text style={styles.subtitle}>
            Sua lista de pratos favoritos é atualmente{"\n"}
            vazio. Por que não começar a adicionar pratos{"\n"}
            que você ama?
          </Text>
        </View>
      </View>

      {/* Bottom Navigation */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#F8F9FA",
  },
  avatarContainer: {
    width: 40,
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    backgroundColor: "#FFE5B4",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    fontSize: 18,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#2F3542",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#00BCC9",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  },
  priceText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
    marginRight: 5,
  },
  cartIcon: {
    marginLeft: 2,
  },
  mainContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  phoneContainer: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50,
    height: 250,
    width: width * 0.8,
  },
  splashContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  splash: {
    position: "absolute",
    borderRadius: 50,
  },
  splash1: {
    width: 60,
    height: 40,
    backgroundColor: "#FF6B35",
    top: 20,
    left: 50,
    transform: [{ rotate: "15deg" }],
  },
  splash2: {
    width: 80,
    height: 60,
    backgroundColor: "#FF8C42",
    top: 10,
    right: 40,
    transform: [{ rotate: "-25deg" }],
  },
  splash3: {
    width: 45,
    height: 30,
    backgroundColor: "#FFB347",
    bottom: 50,
    left: 30,
    transform: [{ rotate: "45deg" }],
  },
  splash4: {
    width: 70,
    height: 50,
    backgroundColor: "#FF6B35",
    bottom: 30,
    right: 50,
    transform: [{ rotate: "-15deg" }],
  },
  splash5: {
    width: 35,
    height: 25,
    backgroundColor: "#FFB347",
    top: 60,
    left: 20,
    transform: [{ rotate: "-30deg" }],
  },
  splash6: {
    width: 55,
    height: 35,
    backgroundColor: "#FF8C42",
    top: 80,
    right: 20,
    transform: [{ rotate: "60deg" }],
  },
  splashTeal1: {
    width: 40,
    height: 30,
    backgroundColor: "#00BCC9",
    top: 40,
    left: 100,
    transform: [{ rotate: "-45deg" }],
  },
  splashTeal2: {
    width: 50,
    height: 35,
    backgroundColor: "#4ECDC4",
    bottom: 60,
    right: 80,
    transform: [{ rotate: "30deg" }],
  },
  splashTeal3: {
    width: 30,
    height: 20,
    backgroundColor: "#00BCC9",
    top: 120,
    left: 60,
    transform: [{ rotate: "75deg" }],
  },
  dot: {
    position: "absolute",
    borderRadius: 5,
  },
  dot1: {
    width: 8,
    height: 8,
    backgroundColor: "#FF6B35",
    top: 30,
    left: 80,
  },
  dot2: {
    width: 6,
    height: 6,
    backgroundColor: "#00BCC9",
    top: 70,
    right: 60,
  },
  dot3: {
    width: 10,
    height: 10,
    backgroundColor: "#FFB347",
    bottom: 40,
    left: 70,
  },
  dot4: {
    width: 5,
    height: 5,
    backgroundColor: "#4ECDC4",
    bottom: 80,
    right: 30,
  },
  dot5: {
    width: 7,
    height: 7,
    backgroundColor: "#FF8C42",
    top: 50,
    right: 90,
  },
  phone: {
    width: 120,
    height: 200,
    backgroundColor: "#fff",
    borderRadius: 25,
    padding: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 10,
    zIndex: 10,
  },
  phoneScreen: {
    flex: 1,
    backgroundColor: "#00BCC9",
    borderRadius: 18,
    overflow: "hidden",
  },
  phoneTopBar: {
    height: 20,
    backgroundColor: "#00BCC9",
  },
  phoneContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heartContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 30,
    padding: 15,
  },
  phoneHomeButton: {
    width: 30,
    height: 4,
    backgroundColor: "#fff",
    alignSelf: "center",
    marginBottom: 8,
    borderRadius: 2,
  },
  phoneShadow: {
    position: "absolute",
    bottom: -20,
    width: 140,
    height: 20,
    backgroundColor: "#00BCC9",
    borderRadius: 70,
    opacity: 0.3,
    zIndex: 1,
  },
  textContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#2F3542",
    marginBottom: 15,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 15,
    color: "#8E9AAF",
    textAlign: "center",
    lineHeight: 22,
  },
});

export default FavoriteScreen;

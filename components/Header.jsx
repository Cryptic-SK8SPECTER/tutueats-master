import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
  Platform,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import ProfileSidebar from "./ProfileSidebar";

const Header = ({ userName = "Alberto Dgegde" }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const total = 100;

  return (
    <>
      {/* Configura StatusBar */}
      <StatusBar
        barStyle="dark-content"
        backgroundColor="white"
        translucent={false} // importante
      />

      {/* SafeAreaView ajusta automaticamente altura para hora/entortamento */}
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.headerContainer}>
          {/* User Profile */}
          <TouchableOpacity
            style={styles.userSection}
            onPress={() => setShowSidebar(true)}
            activeOpacity={0.7}
          >
            <Image
              source={{
                uri: "https://ui-avatars.com/api/?name=Alberto+Dgedge=80&h=80&fit=crop&crop=face",
              }}
              style={styles.profileImage}
            />
            <Text style={styles.userName}>{userName}</Text>
          </TouchableOpacity>

          {/* Cart */}
          <View style={styles.totalBadge}>
            <Text style={styles.totalBadgeText}>{total.toFixed(2)} MZN</Text>
            <View style={styles.cartContainer}>
              <FontAwesome5 name="shopping-bag" size={20} color="#fff" />
              <View style={styles.quantityBadge}>
                <Text style={styles.quantityText}>0</Text>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>

      <ProfileSidebar
        isVisible={showSidebar}
        onClose={() => setShowSidebar(false)}
        userName={userName}
      />
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "white",
  },
  userSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 12,
  },
  userName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#777",
  },
  totalBadge: {
    backgroundColor: "#00BCD4",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  totalBadgeText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 5,
  },
  cartContainer: {
    position: "relative",
  },
  quantityBadge: {
    position: "absolute",
    top: -11,
    right: -12,
    backgroundColor: "#17a2b8",
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#fff",
  },
  quantityText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Header;

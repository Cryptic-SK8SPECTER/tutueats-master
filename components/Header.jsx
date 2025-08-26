import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import ProfileSidebar from "./ProfileSidebar";

const Header = ({ userName = "Alberto Dgegde", cartTotal = "1192 MZN" }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const total = 100;
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.headerContainer}>
          {/* User Profile Section */}
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

          {/* Cart Section */}

          <View style={styles.totalBadge}>
            <Text style={styles.totalBadgeText}>{total.toFixed(2)} MZN</Text>
            <View style={styles.cartContainer}>
              <FontAwesome5 name="shopping-bag" size={20} color="#fffd" />
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
    fontSize: 14,
    fontWeight: "600",
    marginRight: 5,
  },
  cartIcon: {
    fontSize: 16,
  },
  safeArea: {
    backgroundColor: "white",
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
  cartSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  cartTotal: {
    fontSize: 16,
    fontWeight: "600",
    color: "#06B6D4",
  },
  cartButton: {
    backgroundColor: "#06B6D4",
    width: 40,
    height: 40,
    borderRadius: 12,
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
  totalBadgeText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  cartContainer: {
    position: "relative",
    marginLeft: 10,
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

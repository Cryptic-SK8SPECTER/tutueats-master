import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function UserNavigation({ activeTab = 0, onTabPress }) {
  const tabs = [
    { name: "home", index: 0 },
    { name: "search", index: 1 },
    { name: "shopping-cart", index: 2 },
    { name: "heart", index: 3 },
    { name: "bell", index: 4 },
  ];

  return (
    <View style={styles.bottomNav}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.index}
          style={[
            styles.navItem,
            activeTab === tab.index && styles.activeNavItem,
          ]}
          onPress={() => onTabPress && onTabPress(tab.index)}
        >
          <FontAwesome5
            name={tab.name}
            size={24}
            color={activeTab === tab.index ? "#00BCD4" : "#999"}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
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

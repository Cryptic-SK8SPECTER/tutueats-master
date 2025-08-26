import React from "react";
import { View, StyleSheet } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const NotificationIcon = ({ type }) => {
  const getIconStyle = () => {
    switch (type) {
      case "delivery":
        return { backgroundColor: "#17a2b8", icon: "truck" };
      case "deal":
        return { backgroundColor: "#FF4757", icon: "gift" };
      case "confirmed":
        return { backgroundColor: "#17a2b8", icon: "check" };
      default:
        return { backgroundColor: "#17a2b8", icon: "bell" };
    }
  };

  const iconData = getIconStyle();

  return (
    <View
      style={[
        styles.notificationIcon,
        { backgroundColor: iconData.backgroundColor },
      ]}
    >
      <FontAwesome5 name={iconData.icon} size={14} color="#fff" />
    </View>
  );
};

const styles = StyleSheet.create({
  notificationIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  iconText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default NotificationIcon;

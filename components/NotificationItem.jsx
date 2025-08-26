import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import NotificationIcon from "./NotificationIcon";

const NotificationItem = ({ type, title, message, time, onMarkAsRead }) => {
  return (
    <View style={styles.notificationContainer}>
      <View style={styles.notificationContent}>
        <NotificationIcon type={type} />
        <View style={styles.textContent}>
          <Text style={styles.notificationTitle}>{title}</Text>
          <Text style={styles.notificationMessage}>{message}</Text>
          <View style={styles.bottomRow}>
            <Text style={styles.timeText}>{time}</Text>
            <TouchableOpacity onPress={onMarkAsRead}>
              <Text style={styles.markAsReadText}>Marcar como lido</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  notificationContainer: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 16,
    marginTop: 16,
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  notificationContent: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  textContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333333",
    marginBottom: 6,
  },
  notificationMessage: {
    fontSize: 14,
    color: "#666666",
    lineHeight: 20,
    marginBottom: 10,
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  timeText: {
    fontSize: 12,
    color: "#999999",
  },
  markAsReadText: {
    fontSize: 12,
    color: "#17a2b8",
    fontWeight: "500",
  },
});

export default NotificationItem;

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import StarRating from "./StarRating";

const ReviewItem = ({ name, date, rating, comment, avatar }) => {
  return (
    <View style={styles.reviewContainer}>
      <View style={styles.reviewHeader}>
        <View style={styles.userInfo}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatarText}>{name.charAt(0)}</Text>
          </View>
          <View>
            <Text style={styles.userName}>{name}</Text>
            <StarRating rating={rating} />
          </View>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>{date}</Text>
          <TouchableOpacity>
            <Text style={styles.replyButton}>Reply</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.comment}>{comment}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  reviewContainer: {
    backgroundColor: "#fff",
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
    shadowRadius: 4,
    elevation: 2,
  },
  reviewHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 12,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#E8F4F8",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  avatarText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#4A90A4",
  },
  userName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333333",
    marginBottom: 4,
  },
  dateContainer: {
    alignItems: "flex-end",
  },
  date: {
    fontSize: 12,
    color: "#999999",
    marginBottom: 4,
  },
  replyButton: {
    fontSize: 12,
    color: "#4A90E2",
    fontWeight: "500",
  },
  comment: {
    fontSize: 14,
    color: "#666666",
    lineHeight: 20,
  },
});

export default ReviewItem;

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { ReviewItem, CustomScrollView } from "../components";

const ReviewsScreen = () => {
  const reviews = [
    {
      id: 1,
      name: "Adrianna Mercado",
      date: "Aug 23, 2023",
      rating: 5,
      comment:
        "The product quality exceeded my expectations. Highly recommend it!",
    },
    {
      id: 2,
      name: "Dante Valdez",
      date: "Aug 23, 2023",
      rating: 4,
      comment: "Good value for the price, but delivery was slightly delayed.",
    },
    {
      id: 3,
      name: "Troy Ingram",
      date: "Aug 23, 2023",
      rating: 5,
      comment: "Amazing service and high-quality items. Will order again!",
    },
    {
      id: 4,
      name: "Joshua Bean",
      date: "Aug 23, 2023",
      rating: 5,
      comment:
        "Fast delivery and excellent customer support. Highly satisfied!",
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backArrow}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Avaliações</Text>
        <View style={styles.headerRight} />
      </View>

      {/* Reviews List */}
      <CustomScrollView>
        {reviews.map((review) => (
          <ReviewItem
            key={review.id}
            name={review.name}
            date={review.date}
            rating={review.rating}
            comment={review.comment}
          />
        ))}
      </CustomScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingVertical: 12,
    paddingTop: 50, // Para compensar a status bar
    borderBottomWidth: 0.5,
    borderBottomColor: "#E0E0E0",
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  backArrow: {
    fontSize: 24,
    color: "#333333",
    fontWeight: "300",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333333",
  },
  headerRight: {
    width: 40,
  },
});

export default ReviewsScreen;

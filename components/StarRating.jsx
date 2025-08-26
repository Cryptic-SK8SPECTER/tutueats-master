import { View, Text, StyleSheet } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const StarRating = ({ rating = 5 }) => {
  return (
    <View style={styles.starContainer}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Text
          key={star}
          style={[
            styles.star,
            { color: star <= rating ? "#00BCD4" : "#E0E0E0" },
          ]}
        >
          <FontAwesome5 name="star" />
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  starContainer: {
    flexDirection: "row",
  },
  star: {
    fontSize: 14,
    marginRight: 2,
  },
});

export default StarRating;

import React from "react";
import { ScrollView, StyleSheet } from "react-native";

const CustomScrollView = ({ children }) => {
  return (
    <ScrollView
      style={styles.scrollContainer}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollContent}
    >
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
});

export default CustomScrollView;

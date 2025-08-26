import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
  Modal,
  Animated,
  Switch,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

const { width } = Dimensions.get("window");

const ProfileSidebar = ({
  isVisible,
  onClose,
  userName = "Alberto Dgedge",
  userEmail = "albertodgedge@mail.com",
}) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [faceIdEnabled, setFaceIdEnabled] = useState(false);

  const menuItems = [
    {
      title: "Personal information",
      icon: "user",
      hasArrow: true,
      onPress: () => console.log("Personal information pressed"),
    },
    {
      title: "My orders",
      icon: "shopping-bag",
      hasArrow: true,
      onPress: () => console.log("My orders pressed"),
    },
    {
      title: "Promocodes & gift cards",
      icon: "gift",
      hasArrow: true,
      onPress: () => console.log("Promocodes pressed"),
    },
    {
      title: "Notifications",
      icon: "bell",
      hasSwitch: true,
      switchValue: notificationsEnabled,
      onSwitchChange: setNotificationsEnabled,
    },
    {
      title: "Face ID",
      icon: "shield",
      hasSwitch: true,
      switchValue: faceIdEnabled,
      onSwitchChange: setFaceIdEnabled,
    },
    {
      title: "Support center",
      icon: "help-circle",
      hasArrow: false,
      onPress: () => console.log("Support center pressed"),
    },
  ];

  const handleSignOut = () => {
    console.log("Sign out pressed");
    onClose();
  };

  // Animation setup
  const slideAnim = useRef(new Animated.Value(-width * 0.85)).current;

  useEffect(() => {
    if (isVisible) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: -width * 0.85,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [isVisible, slideAnim]);

  return (
    <Modal
      visible={isVisible}
      animationType="none"
      transparent
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        {/* Sidebar animado */}
        <Animated.View
          style={[styles.sidebar, { transform: [{ translateX: slideAnim }] }]}
        >
          <SafeAreaView style={styles.safeArea}>
            {/* Header with cart */}
            <View style={styles.sidebarHeader}>
              <View style={styles.cartSection}>
                <Text style={styles.cartTotal}>$111.92</Text>
                <TouchableOpacity style={styles.cartButton}>
                  <Icon name="shopping-bag" size={20} color="white" />
                </TouchableOpacity>
              </View>
            </View>

            {/* User Profile Section */}
            <View style={styles.userProfileSection}>
              <Image
                source={{
                  uri: "https://ui-avatars.com/api/?name=Alberto+Dgedge=80&h=80&fit=crop&crop=face",
                }}
                style={styles.userProfileImage}
              />
              <View style={styles.userInfo}>
                <Text style={styles.userProfileName}>{userName}</Text>
                <Text style={styles.userProfileEmail}>{userEmail}</Text>
              </View>
            </View>

            {/* Menu Items */}
            <View style={styles.menuContainer}>
              {menuItems.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.menuItem}
                  onPress={item.onPress}
                  activeOpacity={0.7}
                >
                  <Text style={styles.menuItemText}>{item.title}</Text>
                  {item.hasArrow && (
                    <Icon name="chevron-right" size={20} color="#9CA3AF" />
                  )}
                  {item.hasSwitch && (
                    <Switch
                      value={item.switchValue}
                      onValueChange={item.onSwitchChange}
                      trackColor={{ false: "#E5E7EB", true: "#06B6D4" }}
                      thumbColor={item.switchValue ? "#FFFFFF" : "#FFFFFF"}
                      ios_backgroundColor="#E5E7EB"
                    />
                  )}
                </TouchableOpacity>
              ))}
            </View>

            {/* Sign Out */}
            <TouchableOpacity
              style={styles.signOutButton}
              onPress={handleSignOut}
            >
              <Text style={styles.signOutText}>Sign out</Text>
            </TouchableOpacity>
          </SafeAreaView>
        </Animated.View>
        {/* Backdrop */}
        <TouchableOpacity
          style={styles.backdrop}
          activeOpacity={1}
          onPress={onClose}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  // Sidebar Styles
  overlay: {
    flex: 1,
    flexDirection: "row",
  },
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  sidebar: {
    width: width * 0.85,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: -2,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 10,
  },
  safeArea: {
    flex: 1,
  },
  sidebarHeader: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    alignItems: "flex-end",
  },
  userProfileSection: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  userProfileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  userInfo: {
    flex: 1,
  },
  userProfileName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 4,
  },
  userProfileEmail: {
    fontSize: 14,
    color: "#9CA3AF",
  },
  menuContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },
  menuItemText: {
    fontSize: 16,
    color: "#374151",
    flex: 1,
  },
  signOutButton: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: "#F3F4F6",
  },
  signOutText: {
    fontSize: 16,
    color: "#EF4444",
    fontWeight: "500",
  },
});

export default ProfileSidebar;

import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Animated,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { BackButton, Header } from "../components";

const { width } = Dimensions.get("window");

export default function RestaurantDetailsScreen() {
  const [activeTab, setActiveTab] = useState("Info");
  const scrollY = new Animated.Value(0);

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 200],
    outputRange: [1, 0.8],
    extrapolate: "clamp",
  });

  const tabs = ["Info", "Menu", "Reserva", "Avaliações"];

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
      >
        {/* Header Image with Parallax Effect */}
        <Animated.View
          style={[styles.imageContainer, { opacity: headerOpacity }]}
        >
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
            }}
            style={styles.headerImage}
          />
          <View style={styles.imageOverlay} />
          <View style={styles.ratingBadge}>
            <View style={styles.starContainer}>
              <Text style={styles.starIcon}>
                <FontAwesome5 name="star" color="#17a2b8" />
              </Text>
            </View>
            <Text style={styles.ratingText}>4.8</Text>
          </View>
          {/* Back Button */}
          <BackButton />
          {/* Favorite Button */}
          <TouchableOpacity style={styles.favoriteButton}>
            <Text style={styles.heartIcon}>
              <FontAwesome5 name="heart" color="#17a2b8" />
            </Text>
          </TouchableOpacity>
        </Animated.View>

        {/* Content Container with Rounded Corners */}
        <View style={styles.contentContainer}>
          {/* Restaurant Header */}
          <View style={styles.headerSection}>
            <Text style={styles.restaurantName}>Namaaz Dining</Text>
            <Text style={styles.restaurantSubname}>Senopati</Text>
            <View style={styles.cuisineBadge}>
              <Text style={styles.cuisineType}>
                <Ionicons name="restaurant-outline" color="#fff" size={15} />{" "}
                Comida italiana
              </Text>
            </View>
          </View>

          {/* Location & Status Card */}
          <View style={styles.locationCard}>
            <View style={styles.locationLeft}>
              <View style={styles.locationIconContainer}>
                <Text style={styles.locationPin}>
                  <FontAwesome5 name="map-pin" color="#17a2b8" size={18} />
                </Text>
              </View>
              <View>
                <Text style={styles.locationText}>South Jakarta</Text>
                <Text style={styles.distance}>1.5 km away</Text>
              </View>
            </View>
            <View style={styles.statusContainer}>
              <View style={styles.statusIndicator}>
                <View style={styles.statusDot} />
                <Text style={styles.statusText}>Aberto</Text>
              </View>
              <Text style={styles.statusSubtext}>Até 10:00 PM</Text>
            </View>
          </View>

          {/* Enhanced Tab Navigation */}
          <View style={styles.tabsWrapper}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.tabScrollView}
            >
              <View style={styles.tabContainer}>
                {tabs.map((tab) => (
                  <TouchableOpacity
                    key={tab}
                    style={[styles.tab, activeTab === tab && styles.activeTab]}
                    onPress={() => setActiveTab(tab)}
                  >
                    <Text
                      style={[
                        styles.tabText,
                        activeTab === tab && styles.activeTabText,
                      ]}
                    >
                      {tab}
                    </Text>
                    {activeTab === tab && (
                      <View style={styles.activeTabUnderline} />
                    )}
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </View>

          {/* Enhanced About Section */}
          <View style={styles.card}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Sobre</Text>
              <Text style={styles.sectionIcon}>
                <FontAwesome5 name="info-circle" color="#17a2b8" size={24} />
              </Text>
            </View>
            <Text style={styles.aboutText}>
              Experimente a autêntica culinária italiana no coração de Jacarta.
              Nossos chefs trazem receitas tradicionais com um toque moderno,
              usando apenas os melhores ingredientes importados diretamente da
              Itália.
            </Text>
            <TouchableOpacity style={styles.readMoreButton}>
              <Text style={styles.readMore}>Ler mais</Text>
              <Text style={styles.readMoreIcon}>
                <FontAwesome name="arrow-right" />
              </Text>
            </TouchableOpacity>
          </View>

          {/* Enhanced Opening Hours Card */}
          <View style={styles.card}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Horário de funcionamento</Text>
              <Text style={styles.sectionIcon}></Text>
              <FontAwesome name="clock-o" color="#17a2b8" size={24} />
            </View>
            <View style={styles.hoursContainer}>
              <View style={styles.hoursRow}>
                <View style={styles.hoursLeft}>
                  <View style={styles.clockIconContainer}>
                    <Text style={styles.clockIcon}>
                      <FontAwesome name="clock-o" color="#17a2b8" size={24} />
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.hoursText}>08:00 AM - 10:00 PM</Text>
                    <Text style={styles.daysText}>Segunda-feira - domingo</Text>
                  </View>
                </View>
                <View style={styles.openBadge}>
                  <Text style={styles.openBadgeText}>Aberto</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Enhanced Contact Section */}
          <View style={styles.card}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Contacto</Text>
              <Text style={styles.sectionIcon}>
                <FontAwesome name="phone" size={20} />
              </Text>
            </View>
            <View style={styles.contactContainer}>
              <TouchableOpacity style={styles.contactButton}>
                <View style={styles.contactIconContainer}>
                  <Text style={styles.phoneIcon}>
                    <FontAwesome name="phone" />
                  </Text>
                </View>
                <View style={styles.contactInfo}>
                  <Text style={styles.contactLabel}>Phone</Text>
                  <Text style={styles.contactValue}>021 456 888</Text>
                </View>
                <Text style={styles.contactArrow}>
                  <FontAwesome name="arrow-right" />
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.contactButton}>
                <View style={styles.contactIconContainer}>
                  <Text style={styles.whatsappIcon}>
                    <FontAwesome name="wechat" color="#17a2b8" size={20} />
                  </Text>
                </View>
                <View style={styles.contactInfo}>
                  <Text style={styles.contactLabel}>WhatsApp</Text>
                  <Text style={styles.contactValue}>+62 123 456 789</Text>
                </View>
                <Text style={styles.contactArrow}>
                  <FontAwesome name="arrow-right" />
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Enhanced Address Section */}
          <View style={styles.card}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Endereço</Text>
              <Text style={styles.sectionIcon}>
                <FontAwesome5 name="map-pin" color="#17a2b8" size={18} />
              </Text>
            </View>
            <View style={styles.addressContainer}>
              <View style={styles.addressIconContainer}>
                <Text style={styles.addressPin}>
                  <FontAwesome5 name="map-pin" color="#17a2b8" size={18} />
                </Text>
              </View>
              <View style={styles.addressContent}>
                <Text style={styles.addressText}>
                  Jl. Senopati Raya Street No.63, RT.5/RW.2, Seneng, Kebayoran
                  Baru, South Jakarta City, Special Capital Region of Jakarta
                  12110, Indonesia
                </Text>
                <TouchableOpacity style={styles.directionsButton}>
                  <Text style={styles.directionsText}>Obter direções</Text>
                  <Text style={styles.directionsIcon}>
                    <FontAwesome name="location-arrow" color="#fff" />
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Enhanced Map */}
          <View style={styles.mapCard}>
            <View style={styles.mapContainer}>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=400&h=200&fit=crop",
                }}
                style={styles.mapImage}
              />
              <View style={styles.mapOverlay}>
                <TouchableOpacity style={styles.mapPin}>
                  <Text style={styles.mapPinIcon}>
                    <FontAwesome5 name="map-pin" color="#17a2b8" size={18} />
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.mapControls}>
                <TouchableOpacity style={styles.mapButton}>
                  <Text style={styles.mapButtonText}>
                    <FontAwesome name="plus" color="#17a2b8" />
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.mapButton}>
                  <Text style={styles.mapButtonText}>
                    <FontAwesome name="minus" color="#17a2b8" />
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Action Buttons */}
          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.primaryButton}>
              <Text style={styles.primaryButtonText}>Fazer Reserva</Text>
              <Text style={styles.buttonIcon}>
                <FontAwesome name="calendar" color="#fff" />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.secondaryButton}>
              <Text style={styles.secondaryButtonText}>Ver Menu</Text>
              <Text style={styles.buttonIcon}>
                <MaterialIcons
                  name="restaurant-menu"
                  color="#17a2b8"
                  size={17}
                />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  imageContainer: {
    position: "relative",
    height: 300,
  },
  headerImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  imageOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  ratingBadge: {
    position: "absolute",
    top: 50,
    right: 20,
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
  starContainer: {
    marginRight: 4,
  },
  starIcon: {
    fontSize: 14,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#777",
  },
  favoriteButton: {
    position: "absolute",
    top: 100,
    right: 20,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  heartIcon: {
    fontSize: 16,
  },
  contentContainer: {
    backgroundColor: "#ffffff",
    marginTop: -20,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 24,
    paddingHorizontal: 20,
    shadowColor: "#777",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 12,
  },
  headerSection: {
    alignItems: "center",
    marginBottom: 20,
  },
  restaurantName: {
    fontSize: 28,
    fontWeight: "800",
    color: "#777",
    textAlign: "center",
  },
  restaurantSubname: {
    fontSize: 18,
    fontWeight: "500",
    color: "#666666",
    marginBottom: 12,
  },
  cuisineBadge: {
    backgroundColor: "#17a2b8",
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 16,
  },
  cuisineType: {
    fontSize: 14,
    color: "#ffffff",
    fontWeight: "600",
  },
  locationCard: {
    backgroundColor: "#f8f9fa",
    borderRadius: 16,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderWidth: 1,
    borderColor: "#e9ecef",
  },
  locationLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationIconContainer: {
    backgroundColor: "#FFE8E8",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  locationPin: {
    fontSize: 16,
  },
  locationText: {
    fontSize: 16,
    color: "#777",
    fontWeight: "600",
  },
  distance: {
    fontSize: 14,
    color: "#666666",
    marginTop: 2,
  },
  statusContainer: {
    alignItems: "flex-end",
  },
  statusIndicator: {
    flexDirection: "row",
    alignItems: "center",
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#61C5D3",
    marginRight: 6,
  },
  statusText: {
    fontSize: 14,
    color: "#61C5D3",
    fontWeight: "600",
  },
  statusSubtext: {
    fontSize: 12,
    color: "#666666",
    marginTop: 2,
  },
  tabsWrapper: {
    marginBottom: 24,
  },
  tabScrollView: {
    flexGrow: 0,
  },
  tabContainer: {
    flexDirection: "row",
    paddingBottom: 12,
  },
  tab: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginRight: 24,
    position: "relative",
  },
  activeTab: {
    backgroundColor: "rgba(78, 205, 196, 0.1)",
    borderRadius: 12,
  },
  tabText: {
    fontSize: 16,
    color: "#999999",
    fontWeight: "500",
  },
  activeTabText: {
    color: "#17a2b8",
    fontWeight: "700",
  },
  activeTabUnderline: {
    position: "absolute",
    bottom: 0,
    left: 20,
    right: 20,
    height: 3,
    backgroundColor: "#17a2b8",
    borderRadius: 2,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
    borderWidth: 1,
    borderColor: "#f0f0f0",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#777",
  },
  sectionIcon: {
    fontSize: 20,
    color: "#17a2b8",
  },
  aboutText: {
    fontSize: 15,
    color: "#555555",
    lineHeight: 24,
    marginBottom: 12,
  },
  readMoreButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  readMore: {
    color: "#17a2b8",
    fontWeight: "600",
    fontSize: 15,
  },
  readMoreIcon: {
    color: "#17a2b8",
    marginLeft: 4,
    fontSize: 14,
  },
  hoursContainer: {
    marginTop: 8,
  },
  hoursRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  hoursLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  clockIconContainer: {
    backgroundColor: "#BCF0F7",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  clockIcon: {
    fontSize: 16,
  },
  hoursText: {
    fontSize: 16,
    color: "#777",
    fontWeight: "600",
  },
  daysText: {
    fontSize: 14,
    color: "#666666",
    marginTop: 2,
  },
  openBadge: {
    backgroundColor: "#BCF0F7",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  openBadgeText: {
    color: "#777",
    fontWeight: "600",
    fontSize: 12,
  },
  contactContainer: {
    gap: 12,
  },
  contactButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    padding: 16,
    borderRadius: 12,
  },
  contactIconContainer: {
    backgroundColor: "#BCF0F7",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  phoneIcon: {
    fontSize: 16,
    color: "#17a2b8",
  },
  whatsappIcon: {
    fontSize: 16,
  },
  contactInfo: {
    flex: 1,
  },
  contactLabel: {
    fontSize: 12,
    color: "#61C5D3",
    fontWeight: "500",
  },
  contactValue: {
    fontSize: 16,
    color: "#777",
    fontWeight: "600",
    marginTop: 2,
  },
  contactArrow: {
    fontSize: 16,
    color: "#17a2b8",
  },
  addressContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  addressIconContainer: {
    backgroundColor: "#BCF0F7",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
    marginTop: 4,
  },
  addressPin: {
    fontSize: 16,
  },
  addressContent: {
    flex: 1,
  },
  addressText: {
    fontSize: 15,
    color: "#555555",
    lineHeight: 22,
    marginBottom: 12,
  },
  directionsButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#17a2b8",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
    alignSelf: "flex-start",
  },
  directionsText: {
    color: "#ffffff",
    fontWeight: "600",
    fontSize: 14,
  },
  directionsIcon: {
    marginLeft: 4,
    fontSize: 14,
  },
  mapCard: {
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  mapContainer: {
    position: "relative",
    height: 200,
  },
  mapImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  mapOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  mapPin: {
    backgroundColor: "#ffffff",
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
  mapPinIcon: {
    fontSize: 24,
  },
  mapControls: {
    position: "absolute",
    right: 16,
    top: 16,
    gap: 8,
  },
  mapButton: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  mapButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  actionButtons: {
    gap: 12,
    marginBottom: 32,
  },
  primaryButton: {
    backgroundColor: "#17a2b8",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
    borderRadius: 16,
    shadowColor: "#17a2b8",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  primaryButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
  },
  secondaryButton: {
    backgroundColor: "#f8f9fa",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#17a2b8",
  },
  secondaryButtonText: {
    color: "#17a2b8",
    fontSize: 16,
    fontWeight: "700",
  },
  buttonIcon: {
    marginLeft: 8,
    fontSize: 16,
  },
});

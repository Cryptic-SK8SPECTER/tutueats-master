import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {
  FoodDeliveryApp,
  OrderScreen,
  NotificationScreen,
  MenuScreen,
  FavoriteScreen,
} from "../screens";

const Tab = createBottomTabNavigator();

export default function MenuNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#00BCD4",
        tabBarInactiveTintColor: "#777",
      }}
    >
      <Tab.Screen
        name="Home"
        component={FoodDeliveryApp}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Pesquisar"
        component={MenuScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Pedidos"
        component={OrderScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="shopping-cart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Favoritos"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notificações"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="bell" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

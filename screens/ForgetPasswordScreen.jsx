import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      <View style={styles.content}>
        {/* Title */}
        <Text style={styles.title}>Recuperar Senha</Text>

        {/* Description */}
        <Text style={styles.description}>
          Insira seu endereço de e-mail. Você receberá um link para criar uma
          nova senha por e-mail.
        </Text>

        {/* Email Input */}
        <View style={styles.inputContainer}>
          <View style={styles.iconContainer}>
            <Ionicons name="mail" size={20} color="white" />
          </View>
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* Send Button */}
        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#2c3e50",
    marginBottom: 24,
    textAlign: "center",
  },
  description: {
    fontSize: 14,
    color: "#95a5a6",
    lineHeight: 20,
    marginBottom: 40,
    textAlign: "left",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e8f4f8",
    borderRadius: 8,
    marginBottom: 24,
    paddingVertical: 4,
  },
  iconContainer: {
    backgroundColor: "#17a2b8",
    padding: 12,
    borderRadius: 8,
    margin: 4,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 16,
    color: "#333",
  },
  sendButton: {
    backgroundColor: "#17a2b8",
    paddingVertical: 16,
    borderRadius: 8,
  },
  sendButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default ForgotPasswordScreen;

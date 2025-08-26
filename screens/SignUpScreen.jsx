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

const SignUpScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      <View style={styles.content}>
        {/* Title */}
        <Text style={styles.title}>Inscrever-se</Text>

        {/* Name Input */}
        <View style={styles.inputContainer}>
          <View style={styles.iconContainer}>
            <Ionicons name="person" size={20} color="white" />
          </View>
          <TextInput
            style={styles.textInput}
            placeholder="Nome"
            placeholderTextColor="#999"
            value={name}
            onChangeText={setName}
          />
        </View>

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
          <View style={styles.rightIcon}>
            <Ionicons name="checkmark" size={20} color="#17a2b8" />
          </View>
        </View>

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <View style={styles.iconContainer}>
            <Ionicons name="key" size={20} color="white" />
          </View>
          <TextInput
            style={styles.textInput}
            placeholder="Senha"
            placeholderTextColor="#999"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            style={styles.rightIcon}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Ionicons
              name={showPassword ? "eye" : "eye-off"}
              size={20}
              color="#999"
            />
          </TouchableOpacity>
        </View>

        {/* Confirm Password Input */}
        <View style={styles.inputContainer}>
          <View style={styles.iconContainer}>
            <Ionicons name="key" size={20} color="white" />
          </View>
          <TextInput
            style={styles.textInput}
            placeholder="Confirmar Senha"
            placeholderTextColor="#999"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!showConfirmPassword}
          />
          <TouchableOpacity
            style={styles.rightIcon}
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            <Ionicons
              name={showConfirmPassword ? "eye" : "eye-off"}
              size={20}
              color="#999"
            />
          </TouchableOpacity>
        </View>

        {/* Sign Up Button */}
        <TouchableOpacity style={styles.signUpButton}>
          <Text style={styles.signUpButtonText}>Inscrever</Text>
        </TouchableOpacity>

        {/* Sign In Link */}
        <View style={styles.signInContainer}>
          <Text style={styles.signInText}>Já tem uma conta? </Text>
          <TouchableOpacity>
            <Text style={styles.signInLink}>Entrar.</Text>
          </TouchableOpacity>
        </View>

        {/* Social Login Icons */}
        {/* <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.facebookIcon}>f</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.googleIcon}>G+</Text>
          </TouchableOpacity>
        </View> */}
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
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 40,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e8f4f8",
    borderRadius: 8,
    marginBottom: 16,
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
  rightIcon: {
    paddingHorizontal: 16,
  },
  signUpButton: {
    backgroundColor: "#17a2b8",
    paddingVertical: 16,
    borderRadius: 8,
    marginTop: 24,
    marginBottom: 24,
  },
  signUpButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
  signInContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },
  signInText: {
    fontSize: 14,
    color: "#999",
  },
  signInLink: {
    fontSize: 14,
    color: "#17a2b8",
    fontWeight: "500",
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 40,
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    borderWidth: 1,
    borderColor: "#dee2e6",
  },
  facebookIcon: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1877f2",
  },
  googleIcon: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#db4437",
  },
});

export default SignUpScreen;

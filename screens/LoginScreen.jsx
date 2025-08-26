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
import { FormInput } from "./../components";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      <View style={styles.content}>
        {/* Title */}
        <Text style={styles.title}>Welcome Back!</Text>
        <Text style={styles.subtitle}>Faça login para continuar</Text>

        {/* Email Input */}
        <View style={styles.inputContainer}>
          <View style={styles.iconContainer}>
            <Ionicons name="mail" size={20} color="white" />
          </View>
          <FormInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
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
          <FormInput
            placeholder="Senha"
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

        {/* Remember Me and Forgot Password */}
        <View style={styles.optionsRow}>
          <TouchableOpacity
            style={styles.rememberMeContainer}
            onPress={() => setRememberMe(!rememberMe)}
          >
            <View
              style={[styles.checkbox, rememberMe && styles.checkboxChecked]}
            >
              {rememberMe && (
                <Ionicons name="checkmark" size={14} color="#17a2b8" />
              )}
            </View>
            <Text style={styles.rememberMeText}>Lembre de mim</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>Esqueceu sua senha?</Text>
          </TouchableOpacity>
        </View>

        {/* Sign In Button */}
        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.signInButtonText}>Entrar</Text>
        </TouchableOpacity>

        {/* Sign Up Link */}
        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>Não tem uma conta? </Text>
          <TouchableOpacity>
            <Text style={styles.signUpLink}>Inscrever-se</Text>
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
    justifyContent: "center",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#95a5a6",
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
  optionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 32,
    marginTop: 8,
  },
  rememberMeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: "#dee2e6",
    borderRadius: 3,
    marginRight: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  checkboxChecked: {
    backgroundColor: "#e8f4f8",
    borderColor: "#17a2b8",
  },
  rememberMeText: {
    fontSize: 14,
    color: "#95a5a6",
  },
  forgotPasswordText: {
    fontSize: 14,
    color: "#17a2b8",
    fontWeight: "500",
  },
  signInButton: {
    backgroundColor: "#17a2b8",
    paddingVertical: 16,
    borderRadius: 8,
    marginBottom: 24,
  },
  signInButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },
  signUpText: {
    fontSize: 14,
    color: "#95a5a6",
  },
  signUpLink: {
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

export default LoginScreen;

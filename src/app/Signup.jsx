// import React, { useState } from 'react';

// import {
//   StyleSheet,
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   ScrollView,
// } from "react-native";

// // Signup Screen
// const Signup = ({ navigation }) => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [phone, setPhone] = useState('');

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Sign Up</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Name"
//         value={name}
//         onChangeText={setName}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         keyboardType="email-address"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Phone Number"
//         value={phone}
//         onChangeText={setPhone}
//         keyboardType="phone-pad"
//       />
//       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Dashboard')}>
//         <Text style={styles.buttonText}>Sign Up</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate('Login')}>
//         <Text style={styles.linkText}>Already have an account? Log In</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       padding: 20,
//       backgroundColor: "#f5f5f5",
//     },
//     title: {
//       fontSize: 24,
//       fontWeight: "bold",
//       marginBottom: 20,
//       textAlign: "center",
//     },
//     input: {
//       backgroundColor: "white",
//       paddingHorizontal: 15,
//       paddingVertical: 10,
//       borderRadius: 5,
//       marginBottom: 10,
//     },
//     button: {
//       backgroundColor: "#007AFF",
//       padding: 15,
//       borderRadius: 5,
//       alignItems: "center",
//     },
//     buttonText: {
//       color: "white",
//       fontWeight: "bold",
//     },
//     linkText: {
//       color: "#007AFF",
//       textAlign: "center",
//       marginTop: 15,
//     },
//     section: {
//       marginBottom: 20,
//     },
//     sectionTitle: {
//       fontSize: 20,
//       fontWeight: "bold",
//       marginBottom: 10,
//     },
//     sectionText: {
//       fontSize: 16,
//       lineHeight: 24,
//     },
//     card: {
//       borderRadius: 10,
//       marginBottom: 10,
//     },
//     cardText: {
//       marginBottom: 10,
//     },
//   });

//   export default Signup
import React from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";

const Signup = ({ navigation }) => (
  <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 24,
      backgroundColor: "#f2e7f4",
    }}
  >
    {/* Skip Button */}
    <Text
      style={{
        alignSelf: "flex-end",
        marginBottom: 16,
        color: "#569F50",
        fontWeight: "bold",
        fontSize: 16,
      }}
    >
      Skip
    </Text>

    {/* Image */}
    <Image
      source={require("../assets/images/img1.jpg")}
      style={{
        height: 250, // Adjust to your desired size
        width: 250,
        marginBottom: 24,
        
      }}
      resizeMode="contain"
    />

    {/* Text below the image */}
    <Text
      style={{
        textAlign: "center",
        color: "#5DBF67",
        fontSize: 18,
        marginBottom: 32,
        fontWeight: "bold",
      }}
    >
      BARNAID{"\n"}Disease Diagnostics & Reporting Portal
    </Text>

    {/* Email Input */}
    <TextInput
      placeholder="Email"
      style={{
        width: "80%",
        padding: 12,
        backgroundColor: "#E4F2E7",
        borderRadius: 6,
        marginBottom: 16,
        textAlign: "center",
      }}
    />

    {/* Password Input */}
    <TextInput
      placeholder="Password"
      secureTextEntry={true}
      style={{
        width: "80%",
        padding: 12,
        backgroundColor: "#E4F2E7",
        borderRadius: 6,
        marginBottom: 16,
        textAlign: "center",
      }}
    />

    {/* Sign Up Button */}
    <TouchableOpacity
      style={{
        backgroundColor: "green",
        padding: 12,
        width: "80%",
        borderRadius: 6,
        marginBottom: 16,
      }}
      onPress={() => navigation.navigate("Dashboard")}
    >
      <Text style={{fontSize:20 , color: "white", textAlign: "center", fontWeight: "bold" }}>
        Sign Up
      </Text>
    </TouchableOpacity>

    {/* Additional text for login */}
    <Text style={{ textAlign: "center", color: "grey" }}>
      or sign up using
    </Text>

    <TouchableOpacity
      style={{ marginTop: 16, textAlign: "center", color: "#7B8E69" , display: "flex", flexDirection: "row" }}
      onPress={() => navigation.navigate("Login")}
    >
      <Text>Already have an account? </Text>
      <Text style={{ color: "#5DBF67", fontWeight: "bold" }}>Log in</Text>
    </TouchableOpacity>
  </View>
);

export default Signup;

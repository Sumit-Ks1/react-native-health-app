// import React , {useState} from 'react';

// import {
//   StyleSheet,
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   ScrollView,
// } from "react-native";

// // Login Screen


// const Login = ({ navigation }) => {
//     const [phone, setPhone] = useState('');
//     const [password, setPassword] = useState('');
  
//     return (
//       <View style={styles.container}>
//         <Text style={styles.title}>Log In</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Phone Number"
//           value={phone}
//           onChangeText={setPhone}
//           keyboardType="phone-pad"
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry
//         />
//         <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Dashboard')}>
//           <Text style={styles.buttonText}>Log In</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
//           <Text style={styles.linkText}>Don't have an account? Sign Up</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   };

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
  
//   export default Login
import React,{useState} from 'react';

import { Text, View, Image, TextInput, TouchableOpacity,StyleSheet } from 'react-native';
// import img1 from '../../assets/images/img1.jpg'; // Your image import
const Login=({ navigation })=> {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

//   const Login = () => {
//     // Handle login logic
//     Alert.alert('Login', `Email: ${email}\nPassword: ${password}`);
//   };

  return (
    <View style={styles.container}>
      <Image
      source={require("../assets/images/img1.jpg")}
      style={{
        height: 250, // Adjust to your desired size
        width: 250,
        marginBottom: 24,
        alignSelf: 'center',
        borderRadius: 10, // Adjust to your desired border radius
      }}
      resizeMode="contain"
    />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#888"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity onPress={() => Alert.alert('Forgot Password', 'Reset Password')}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Dashboard')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: "#f2e7f4",
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  forgotPassword: {
    color: 'black',
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    width: 160,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Login;
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { StyleSheet } from "react-native";
import Signup from "./Signup.jsx";
import Login from "./Login.jsx";
const Stack = createStackNavigator();
import Dashboard from "./Dashboard.jsx";
import Feature from "./Feature";
import FarmerCommunity from "./FarmerCommunity";

// // Signup Screen
// import { NavigationProp } from '@react-navigation/native';

// // ...

// const SignupScreen = ({ navigation }: { navigation: NavigationProp<any, any> }) => {
//   // ...
// };
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

// // Login Screen
// const LoginScreen = ({ navigation }) => {
//   const [phone, setPhone] = useState('');
//   const [password, setPassword] = useState('');

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Log In</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Phone Number"
//         value={phone}
//         onChangeText={setPhone}
//         keyboardType="phone-pad"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Dashboard')}>
//         <Text style={styles.buttonText}>Log In</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
//         <Text style={styles.linkText}>Don't have an account? Sign Up</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// // Dashboard Screen
// const DashboardScreen = () => {
//   const diseases = [
//     {
//       name: "Foot and Mouth Disease",
//       description:
//         "A highly contagious viral disease affecting cloven-hoofed animals.",
//     },
//     {
//       name: "Bovine Respiratory Disease",
//       description:
//         "A complex of diseases that can affect the upper and lower respiratory tracts of cattle.",
//     },
//     {
//       name: "Mastitis",
//       description:
//         "An inflammation of the mammary gland and udder tissue in dairy cattle.",
//     },
//   ];

//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.title}>Dashboard</Text>
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Welcome to CattleHealth</Text>
//         <Text style={styles.sectionText}>
//           Our app helps detect and manage diseases in cattle and plants. Use our
//           advanced AI to identify potential health issues early and get expert
//           advice on treatment.
//         </Text>
//       </View>
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Common Cattle Diseases</Text>
//         {diseases.map((disease, index) => (
//           <Card key={index} containerStyle={styles.card}>
//             <Card.Title>{disease.name}</Card.Title>
//             <Card.Divider />
//             <Text style={styles.cardText}>{disease.description}</Text>
//           </Card>
//         ))}
//       </View>
//     </ScrollView>
//   );
// };

// App component
const App = () => {
  return (
    //   <Stack.Navigator
    //     initialRouteName="Signup"
    //     screenOptions={{ headerShown: false }}
    //   >
    //     <Stack.Screen name="Signup" component={Signup} />
    //     <Stack.Screen name="Login" component={Login} />
    //     <Stack.Screen name="Dashboard" component={Dashboard} />
    //   </Stack.Navigator>

    <NavigationContainer independent={true}>
      <Appi />
    </NavigationContainer>
  );
};

const Appi = () => {
  const issLoggedIn=false; // Will be chercked through useEffecrt containing verification from backend
  return (
    <Stack.Navigator
    initialRouteName={issLoggedIn? "Dashboard" : "Signup"}
      screenOptions={{ headerShown: false }}

    >
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Feature" component={Feature} />
      <Stack.Screen name="FarmerCommunity" component={FarmerCommunity} />
      
    </Stack.Navigator>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: "#f5f5f5",
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 20,
//     textAlign: "center",
//   },
//   input: {
//     backgroundColor: "white",
//     paddingHorizontal: 15,
//     paddingVertical: 10,
//     borderRadius: 5,
//     marginBottom: 10,
//   },
//   button: {
//     backgroundColor: "#007AFF",
//     padding: 15,
//     borderRadius: 5,
//     alignItems: "center",
//   },
//   buttonText: {
//     color: "white",
//     fontWeight: "bold",
//   },
//   linkText: {
//     color: "#007AFF",
//     textAlign: "center",
//     marginTop: 15,
//   },
//   section: {
//     marginBottom: 20,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   sectionText: {
//     fontSize: 16,
//     lineHeight: 24,
//   },
//   card: {
//     borderRadius: 10,
//     marginBottom: 10,
//   },
//   cardText: {
//     marginBottom: 10,
//   },
// });

export default App;

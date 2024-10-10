import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Appearance,
//   Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"; // For icons

const buttons = [
  { label: "Plant Disease Prediction", icon: "flower" },
  { label: "AI Animal Disease Prediction", icon: "paw" },
  { label: "Expert Consultation", icon: "account-question" },
  { label: "Disease & Treatment Info", icon: "information" },
  { label: "Plant Nutrition Planner", icon: "seed" },
  { label: "Animal Nutrition Planner", icon: "food" },
];

const Feature = ({ navigation }) => {
  const [isDarkMode, setIsDarkMode] = useState(
    Appearance.getColorScheme() === "dark"
  );
  // const screenHeight = Dimensions.get('window').height;
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <View>
      <ScrollView contentContainerStyle={styles.container(isDarkMode)}>
        <View style={styles.topNavBar(isDarkMode)}>
        {/* Top Navigation Bar */}
        <TouchableOpacity onPress={()=>{navigation.navigate("Dashboard")}}>
          <Icon name="arrow-left" size={25} color="white" />
        </TouchableOpacity>
          <Text style={styles.languageButton(isDarkMode)}>Lang</Text>
        </View>

        {/* Theme Toggle Button */}
        <TouchableOpacity
          style={styles.themeToggleButton}
          onPress={toggleTheme}
        >
          <Text style={styles.themeToggleText}>
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </Text>
        </TouchableOpacity>

        {/* Feature Boxes */}
        <View style={styles.boxContainer}>
          {buttons.map((button, index) => (
            <View key={index} style={styles.featureBox(isDarkMode)}>
              <Icon
                name={button.icon}
                size={40}
                color={isDarkMode ? "#E0E0E0" : "#4CAF50"}
                style={styles.icon}
              />
              <Text style={styles.featureText(isDarkMode)}>{button.label}</Text>
            </View>
          ))}
        </View>

        {/* Buttons */}
        {buttons.map((button, index) => (
          <TouchableOpacity
            key={index}
            style={
              index % 2 === 0
                ? styles.buttonGreen(isDarkMode)
                : styles.buttonGrey(isDarkMode)
              
            }
          
          >
            <Text style={styles.buttonText}>{button.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNavBar(isDarkMode)}>
        <Image
          style={styles.icon}
          source={require("../assets/images/snack-icon.png")}
        />
        <Image
          style={styles.icon}
          source={require("../assets/images/snack-icon.png")}
        />
        <Image
          style={styles.icon}
          source={require("../assets/images/snack-icon.png")}
        />
        <Image
          style={styles.icon}
          source={require("../assets/images/snack-icon.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: (isDarkMode) => ({
    alignItems: "center",
    paddingVertical: 50,
    paddingTop:20,
    marginHorizontal: 5,
    backgroundColor: isDarkMode ? "#121212" : "#F5F5F5",
  }),
  topNavBar: (isDarkMode) => ({
    backgroundColor: isDarkMode ? "#1F1B1B" : "#4CAF50",
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    alignItems: "flex-end",
    dislay: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  }),
  languageButton: (isDarkMode) => ({
    backgroundColor: isDarkMode ? "#333" : "#388E3C",
    color: isDarkMode ? "#FFF" : "white",
    paddingVertical: 8,
    paddingHorizontal: 16,
    paddingTop: 0,
    borderRadius: 5,
    fontWeight: "bold",
  }),
  themeToggleButton: {
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#4CAF50",
    borderRadius: 5,
  },
  themeToggleText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  boxContainer: {
    width: "100%",
    alignItems: "center",
    marginVertical: 20,
    marginTop: 0,
  },
  featureBox: (isDarkMode) => ({
    width: "90%",
    height: 120,
    backgroundColor: isDarkMode ? "#333" : "#ffffff",
    padding: 20,
    borderRadius: 12,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
    flexDirection: "row",
  }),
  featureText: (isDarkMode) => ({
    fontSize: 16,
    fontWeight: "600",
    color: isDarkMode ? "#E0E0E0" : "#333",
    textAlign: "center",
    flex: 1,
    marginLeft: 10,
  }),
  buttonGreen: (isDarkMode) => ({
    backgroundColor: isDarkMode ? "#2E7D32" : "#4CAF50",
    padding: 15,
    width: "80%",
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    elevation: 3,
  }),
  buttonGrey: (isDarkMode) => ({
    backgroundColor: isDarkMode ? "#616161" : "#E0E0E0",
    padding: 15,
    width: "80%",
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    elevation: 3,
  }),
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
  bottomNavBar: (isDarkMode) => ({
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    backgroundColor: isDarkMode ? "#1F1B1B" : "#4CAF50",
    // marginTop: 20,
    paddingVertical: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    position: 'absolute',
    bottom: 0,
  }),
  icon: {
    width: 30,
    height: 30,
  },
  down: {

  },
});

export default Feature;

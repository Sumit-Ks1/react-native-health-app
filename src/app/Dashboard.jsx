import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { Card } from "react-native-elements";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Dashboard = ({ navigation }) => {
  const diseases = [
    {
      name: "Foot and Mouth Disease",
      description: "A highly contagious viral disease affecting cloven-hoofed animals.",
      icon: "paw",
    },
    {
      name: "Bovine Respiratory Disease",
      description: "A complex of diseases that can affect the upper and lower respiratory tracts of cattle.",
      icon: "lungs",
    },
    {
      name: "Mastitis",
      description: "An inflammation of the mammary gland and udder tissue in dairy cattle.",
      icon: "medical-bag",
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#2E7D32" />
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Dashboard</Text>
          <View style={styles.navButtons}>
            <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("Feature")}>
              <Icon name="feature-search" size={24} color="#FFFFFF" />
              <Text style={styles.navButtonText}>Features</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("FarmerCommunity")}>
              <Icon name="chat" size={24} color="#FFFFFF" />
              <Text style={styles.navButtonText}>Chat</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Welcome to CattleHealth</Text>
          <Text style={styles.sectionText}>
            Our app helps detect and manage diseases in cattle and plants. Use our
            advanced AI to identify potential health issues early and get expert
            advice on treatment.
          </Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Common Cattle Diseases</Text>
          {diseases.map((disease, index) => (
            <Card key={index} containerStyle={styles.card}>
              <View style={styles.cardHeader}>
                <Icon name={disease.icon} size={24} color="#2E7D32" />
                <Text style={styles.cardTitle}>{disease.name}</Text>
              </View>
              <Card.Divider />
              <Text style={styles.cardText}>{disease.description}</Text>
            </Card>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#2E7D32",
  },
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    backgroundColor: "#2E7D32",
    padding: 20,
    paddingBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 15,
  },
  navButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  navButton: {
    alignItems: "center",
  },
  navButtonText: {
    color: "#FFFFFF",
    marginTop: 5,
  },
  section: {
    padding: 20,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2E7D32",
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333333",
  },
  card: {
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2E7D32",
    marginLeft: 10,
  },
  cardText: {
    fontSize: 14,
    lineHeight: 20,
    color: "#333333",
  },
});

export default Dashboard;
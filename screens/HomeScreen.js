import {
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Alert,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Linking,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-root-toast";

const image = require("../assets/bgGradient2.jpg");

const HomeScreen = ({ navigation }) => {

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : null}
    >
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <SafeAreaView edges={["right", "left", "top"]} style={{ flex: 1 }}>
          <ScrollView style={styles.container}>
            <View style={styles.wrapper}>
              <Text style={styles.heading}>Social Health Care</Text>
              <Text style={styles.subtext}>Home Screen</Text>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 48}}>
                <Image
                  style={styles.imageProp}
                  source={require('../assets/id.png')}
                ></Image>
                <Pressable
                  style={[styles.button, { width: '75%' }]}
                  onPress={() => {
                    navigation.navigate("Register");
                  }}
                >
                  <Text style={styles.buttonText}>Register</Text>
                </Pressable>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Image
                  style={styles.imageProp}
                  source={require('../assets/siren.png')}
                ></Image>
                <Pressable
                  style={[styles.button, { width: '75%' }]}
                  onPress={() => {
                    navigation.navigate("ReportEmergency");
                  }}
                >
                  <Text style={styles.buttonText}>Report Emergency</Text>
                </Pressable>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Image
                  style={styles.imageProp}
                  source={require('../assets/help.png')}
                ></Image>
                <Pressable
                  style={[styles.button, { width: '75%' }]}
                  onPress={() => {
                    navigation.navigate("Register");
                  }}
                >
                  <Text style={styles.buttonText}>Assist</Text>
                </Pressable>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Image
                  style={styles.imageProp}
                  source={require('../assets/hospital.png')}
                ></Image>
                <Pressable
                  style={[styles.button, { width: '75%' }]}
                  onPress={() => {
                    navigation.navigate("Hospitals");
                  }}
                >
                  <Text style={styles.buttonText}>Nearby Hospitals</Text>
                </Pressable>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Image
                  style={styles.imageProp}
                  source={require('../assets/call.png')}
                ></Image>
                <Pressable
                  style={[styles.button, { width: '75%' }]}
                  onPress={() => {
                    Linking.openURL(`tel:${108}`);
                  }}
                >
                  <Text style={styles.buttonText}>Call 108</Text>
                </Pressable>
              </View>

            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    minHeight: "100%",
  },
  wrapper: {
    padding: 16,
    justifyContent: "space-between",
    display: "flex",
    height: "100%",
  },
  heading: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#2A2A2A",
    width: "100%",
  },
  subtext: {
    color: "#2A2A2A",
    fontSize: 16,
    marginTop: 8,
    marginBottom: 24,
  },
  input: {
    padding: 16,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 16,
    width: "100%",
    marginVertical: 16,
    fontSize: 20,

    color: "#fff",
  },
  button: {
    width: "100%",
    height: 64,
    backgroundColor: "#FACD88",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    padding: 8,
    borderRadius: 20,
    elevation: 5,
    marginTop: 20,
    shadowColor: "#3b7197",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.11,
  },
  buttonText: {
    fontSize: 20,
    color: "#303030",
    fontWeight: "600",
  },
  align: {
    display: "flex",
    flexDirection: "row",
    marginLeft: -8,
  },
  right: {
    marginLeft: 8,
  },
  imageProp: {
    width: 60,
    height: 60,
    margin: 16,
  },
});

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
import * as Location from 'expo-location';

const image = require("../assets/bgGradient2.jpg");

const Hospitals = ({ navigation }) => {

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [lat, setLat] = useState("Waiting...");
  const [long, setLong] = useState("Waiting...");

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting...';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  useEffect(() => {
    if (text !== 'Waiting...') {
      var obj = JSON.parse(text);
      setLat(obj.coords.latitude);
      setLong(obj.coords.longitude);
    }
  }, [text]);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : null}
    >
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <SafeAreaView edges={["right", "left", "top"]} style={{ flex: 1 }}>
          <ScrollView style={styles.container}>
            <View style={styles.wrapper}>
              <Text style={styles.heading}>Nearby Hospitals</Text>
              <Text style={styles.subtext}>Find hospitals near you</Text>

              <View style={{ alignItems: "center" }}>
                <Image
                  style={styles.imageProp}
                  source={require('../assets/location.png')}
                ></Image>

                <Text style={[styles.subtext, { marginBottom: 0 }]}>Latitude: {lat}</Text>
                <Text style={styles.subtext}>Longitude: {long}</Text>
                <Text style={styles.h2}>Click on any of the hospitals to navigate</Text>
              </View>

              {location && (
                <View>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{
                      fontSize: 48,
                      fontWeight: "bold",
                      color: "#2A2A2A",
                      margin: 24,
                    }}>1.</Text>
                    <Pressable
                      style={[styles.button, { width: '75%' }]}
                      onPress={() => {
                        Linking.openURL(`https://www.google.com/maps/dir/?api=1&origin=${lat},${long}&destination=11.018519,77.007314&travelmode=driving`);
                      }}
                    >
                      <Text style={styles.buttonText}>PSG Hospital</Text>
                    </Pressable>
                  </View>

                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{
                      fontSize: 48,
                      fontWeight: "bold",
                      color: "#2A2A2A",
                      margin: 24,
                    }}>2.</Text>
                    <Pressable
                      style={[styles.button, { width: '75%' }]}
                      onPress={() => {
                        Linking.openURL(`https://www.google.com/maps/dir/?api=1&origin=${lat},${long}&destination=11.026548,77.017467&travelmode=driving`);
                      }}
                    >
                      <Text style={styles.buttonText}>Sumith Hospital</Text>
                    </Pressable>
                  </View>

                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{
                      fontSize: 48,
                      fontWeight: "bold",
                      color: "#2A2A2A",
                      margin: 24,
                    }}>3.</Text>
                    <Pressable
                      style={[styles.button, { width: '75%' }]}
                      onPress={() => {
                        Linking.openURL(`https://www.google.com/maps/dir/?api=1&origin=${lat},${long}&destination=11.019692,76.994999&travelmode=driving`);
                      }}
                    >
                      <Text style={styles.buttonText}>Hindusthan Hospital</Text>
                    </Pressable>
                  </View>
                </View>
              )}

            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default Hospitals;

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
  h2: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2A2A2A",
    width: "100%",
    textAlign: "center",
    marginBottom: 24,
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

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
import { db } from "../firebase-config.js";
import { ref, onValue, push, update, remove } from "firebase/database";

const image = require("../assets/bgGradient2.jpg");

const Assist = ({ navigation }) => {

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [lat, setLat] = useState("Waiting...");
  const [long, setLong] = useState("Waiting...");

  const [emergencies, setEmergencies] = useState([]);

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

  // useEffect(() => {
  //   onValue(ref(db, `/Emergency/`), (querySnapShot) => {
  //     let data = querySnapShot.val() || {};
  //     console.log(data);
  //     setEmergencies(Object.keys(data).map(key => {
  //       return {
  //         id: key,
  //         type: data[key]["Details"],
  //       }
  //     })
  //     );
  //   });
  // }, []);


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

  // useEffect(() => {
  //   console.log(emergencies)

  // }, [emergencies])


  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : null}
    >
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <SafeAreaView edges={["right", "left", "top"]} style={{ flex: 1 }}>
          <ScrollView style={styles.container}>
            <View style={styles.wrapper}>
              <Text style={styles.heading}>Volunteer</Text>
              <Text style={[styles.subtext, { marginBottom: 36 }]}>Help people near you</Text>

              {!location && (
                <View style={{ alignItems: "center" }}>
                  <Image
                    style={{ width: 125, height: 125, color: "#303030" }}
                    source={require("../assets/loading.gif")}
                  ></Image>
                  <Text style={styles.h2}>Waiting for location...</Text>
                  <Text style={styles.h2}>Searching nearbing emergencies</Text>
                </View>
              )}

              {location && (
                <View>

                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: "center" }}>
                    <Text style={{
                      fontSize: 48,
                      fontWeight: "bold",
                      color: "#2A2A2A",
                      margin: 16,
                      paddingTop: 16
                    }}>1.</Text>
                    <Pressable
                      style={styles.boxes}
                    >
                      <Text style={styles.buttonText}>Fire Outbreak</Text>
                    </Pressable>
                    <Pressable
                      style={[styles.button, { width: "20%" }]}
                      onPress={() => {
                        Linking.openURL(`https://www.google.com/maps/dir/?api=1&origin=${lat},${long}&destination=11.025,77.007314&travelmode=driving`);
                      }}
                    >
                      <Image
                        style={{ width: 30, height: 30 }}
                        source={require('../assets/gps-navigation.png')}
                      ></Image>
                    </Pressable>
                  </View>

                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: "center" }}>
                    <Text style={{
                      fontSize: 48,
                      fontWeight: "bold",
                      color: "#2A2A2A",
                      margin: 16,
                      paddingTop: 16
                    }}>2.</Text>
                    <Pressable
                      style={styles.boxes}
                    >
                      <Text style={styles.buttonText}>Accidents</Text>
                    </Pressable>
                    <Pressable
                      style={[styles.button, { width: "20%" }]}
                      onPress={() => {
                        Linking.openURL(`https://www.google.com/maps/dir/?api=1&origin=${lat},${long}&destination=11.018519,77.006314&travelmode=driving`);
                      }}
                    >
                      <Image
                        style={{ width: 30, height: 30 }}
                        source={require('../assets/gps-navigation.png')}
                      ></Image>
                    </Pressable>
                  </View>

                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: "center" }}>
                    <Text style={{
                      fontSize: 48,
                      fontWeight: "bold",
                      color: "#2A2A2A",
                      margin: 16,
                      paddingTop: 16
                    }}>3.</Text>
                    <Pressable
                      style={styles.boxes}
                    >
                      <Text style={styles.buttonText}>Assault</Text>
                    </Pressable>
                    <Pressable
                      style={[styles.button, { width: "20%" }]}
                      onPress={() => {
                        Linking.openURL(`https://www.google.com/maps/dir/?api=1&origin=${lat},${long}&destination=11.028519,77.002314&travelmode=driving`);
                      }}
                    >
                      <Image
                        style={{ width: 30, height: 30 }}
                        source={require('../assets/gps-navigation.png')}
                      ></Image>
                    </Pressable>
                  </View>

                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: "center" }}>
                    <Text style={{
                      fontSize: 48,
                      fontWeight: "bold",
                      color: "#2A2A2A",
                      margin: 16,
                      paddingTop: 16
                    }}>4.</Text>
                    <Pressable
                      style={styles.boxes}
                    >
                      <Text style={styles.buttonText}>Natural Disaster</Text>
                    </Pressable>
                    <Pressable
                      style={[styles.button, { width: "20%" }]}
                      onPress={() => {
                        Linking.openURL(`https://www.google.com/maps/dir/?api=1&origin=${lat},${long}&destination=11.000519,77.007314&travelmode=driving`);
                      }}
                    >
                      <Image
                        style={{ width: 30, height: 30 }}
                        source={require('../assets/gps-navigation.png')}
                      ></Image>
                    </Pressable>
                  </View>

                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: "center" }}>
                    <Text style={{
                      fontSize: 48,
                      fontWeight: "bold",
                      color: "#2A2A2A",
                      margin: 16,
                      paddingTop: 16
                    }}>5.</Text>
                    <Pressable
                      style={styles.boxes}
                    >
                      <Text style={styles.buttonText}>Medical</Text>
                    </Pressable>
                    <Pressable
                      style={[styles.button, { width: "20%" }]}
                      onPress={() => {
                        Linking.openURL(`https://www.google.com/maps/dir/?api=1&origin=${lat},${long}&destination=11.018519,77.017314&travelmode=driving`);
                      }}
                    >
                      <Image
                        style={{ width: 30, height: 30 }}
                        source={require('../assets/gps-navigation.png')}
                      ></Image>
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

export default Assist;

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
  boxes: {
    width: "50%",
    height: 64,
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
    backgroundColor: '#00000000',
    borderColor: '#FACD88',
    borderWidth: 2,
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

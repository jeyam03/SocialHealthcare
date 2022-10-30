import {
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Alert,
  ImageBackground,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import CustomTextInput from "../components/CustomTextInput";
import CustomDropDown from "../components/CustomDropDown";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-root-toast";

const image = require("../assets/bgGradient2.jpg");

const Register = ({ navigation }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);
  const [gender, setGender] = useState(null);
  const [bloodGroup, setBloodGroup] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const [errorName, setErrorName] = useState(false);
  const [errorAge, setErrorAge] = useState(false);
  const [errorGender, setErrorGender] = useState(false);
  const [errorBloodGroup, setErrorBloodGroup] = useState(false);
  const [errorPhoneNumber, setErrorPhoneNumber] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorAddress, setErrorAddress] = useState(false);

  var detailsNotNull = true;
  var count = 0;

  const genderOptions = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ];

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : null}
    >
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <SafeAreaView edges={["right", "left", "top"]} style={{ flex: 1 }}>
          <ScrollView style={styles.container}>
            <View style={styles.wrapper}>
              <Text style={styles.heading}>Registration</Text>
              <Text style={styles.subtext}>Enter the required details</Text>
              <CustomTextInput
                mode={1}
                valueState={[name, setName]}
                errorState={[errorName, setErrorName]}
                placeholder="Name"
              />
              <View style={styles.align}>
                <CustomTextInput
                  mode={1}
                  valueState={[age, setAge]}
                  errorState={[errorAge, setErrorAge]}
                  placeholder="Age"
                  isHalf
                  number={true}
                />
                <CustomDropDown
                  placeholder={"Gender"}
                  options={genderOptions}
                  valueState={[gender, setGender]}
                  errorState={[errorGender, setErrorGender]}
                  isHalf
                  mode={1}
                />
              </View>
              <CustomTextInput
                mode={1}
                valueState={[bloodGroup, setBloodGroup]}
                errorState={[errorBloodGroup, setErrorBloodGroup]}
                placeholder="Blood Group"
              />
              <CustomTextInput
                mode={1}
                valueState={[phoneNumber, setPhoneNumber]}
                errorState={[errorPhoneNumber, setErrorPhoneNumber]}
                placeholder="Phone Number"
                number={true}
              />
              <CustomTextInput
                mode={1}
                valueState={[email, setEmail]}
                errorState={[errorEmail, setErrorEmail]}
                placeholder="Email ID"
                number={true}
              />
              <CustomTextInput
                mode={0}
                valueState={[address, setAddress]}
                errorState={[errorAddress, setErrorAddress]}
                placeholder="Address"
              />

              <Pressable
                style={styles.button}
                onPress={() => {
                  count = 0;

                  name.length <= 0
                    ? (setErrorName(true), count++)
                    : setErrorName(false);
                  isNaN(+age) || age === null
                    ? (setErrorAge(true), count++)
                    : setErrorAge(false);
                  gender === null
                    ? (setErrorGender(true), count++)
                    : setErrorGender(false);
                  bloodGroup.length <= 0
                    ? (setErrorBloodGroup(true), count++)
                    : setErrorBloodGroup(false);
                  isNaN(+phoneNumber) || phoneNumber === null
                    ? (setErrorPhoneNumber(true), count++)
                    : setErrorPhoneNumber(false);
                  email.length <= 0
                    ? (setErrorEmail(true), count++)
                    : setErrorEmail(false);
                  address.length <= 0
                    ? (setErrorAddress(true), count++)
                    : setErrorAddress(false);

                  count === 0
                    ? (detailsNotNull = true)
                    : (detailsNotNull = false);

                  if (detailsNotNull) {
                    navigation.navigate("HomeScreen");
                    // set(ref(db, "/Details/" + user), {
                    //   Name: name,
                    //   Age: age,
                    //   Gender: gender,
                    //   BloodGroup: bloodGroup,
                    //   PhoneNumber: phoneNumber,
                    //   Email: email,
                    //   Address: address,
                    // });
                  } else {
                    Toast.show("Please enter all the details", {
                      duration: Toast.durations.LONG,
                      position: Toast.positions.BOTTOM,
                      shadow: true,
                      animation: true,
                      hideOnPress: true,
                      delay: 0,
                    });
                  }
                }}
              >
                <Text style={styles.buttonText}>Submit</Text>
              </Pressable>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default Register;

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
    paddingHorizontal: 16,
    paddingBottom: 32,
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
});

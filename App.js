import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootSiblingParent as ToastContainer } from "react-native-root-siblings";

import Register from "./screens/Register";
import HomeScreen from "./screens/HomeScreen";
import ReportEmergency from "./screens/ReportEmergency";
import Hospitals from "./screens/Hospitals";

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <ToastContainer>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="ReportEmergency" component={ReportEmergency} />
          <Stack.Screen name="Hospitals" component={Hospitals} />
        </Stack.Navigator>
      </NavigationContainer>
    </ToastContainer>
  );
};

export default App;

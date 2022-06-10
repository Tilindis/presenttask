import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import InsideDataScreen from "./Screens/InsideData";
import AddDataScreen from "./Screens/AddData";
import MainDataScreen from "./Screens/GetData";

const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.topContainer}></View>
        <View style={styles.middleContainer}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="mainscreen">
              <Stack.Screen
                name="mainscreen"
                component={MainDataScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="data"
                component={InsideDataScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="dataadd"
                component={AddDataScreen}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
        <View style={styles.bottombContainer}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,120,255,0.75)",
  },
  topContainer: {
    flex: 0.4,
  },
  middleContainer: {
    flex: 9.2,
  },
  bottombContainer: {
    flex: 0.4,
  },
});

export default App;

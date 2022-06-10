import { StatusBar } from "expo-status-bar";
import { Text, View, Alert, ImageBackground } from "react-native";
import React, { useState } from "react";
import Styles from "./Styles";
import Button from "../Components/Buttons/Button";
import Input from "../Components/TextInputs/Input";
import axios from "axios";

const image = { uri: "https://i.imgur.com/EFr6mOH.png" };
const httpMethodPOST = "/posts";

export default function AddDataScreen({ navigation: { navigate } }) {
  const [inputData, setInputData] = useState({
    title: "",
    body: "",
    userID: "",
  });

  const navigateToMainScreen = () => {
    navigate("mainscreen");
  };

  const setNewData = () => {
    addData();
    alertShow();
  };

  const clearInput = () => {
    setInputData("");
  };

  const alertShow = () => {
    Alert.alert(
      "Data was added.",
      "",
      [{ text: "OK", onPress: () => clearInput() }],
      { cancelable: false }
    );
  };

  async function addData() {
    axios
      .post(process.env.API_URL + httpMethodPOST, {
        title: inputData.title,
        body: inputData.body,
        userId: inputData.userID,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const updateInputs = (givenProperty, text) => {
    setInputData((previousState) => {
      return (
        (givenProperty === "title" && { ...previousState, title: text }) ||
        (givenProperty === "userID" && { ...previousState, userID: text }) ||
        (givenProperty === "body" && { ...previousState, body: text })
      );
    });
  };

  return (
    <View style={Styles.baseStyles.container}>
      <ImageBackground source={image} style={Styles.baseStyles.image}>
        <StatusBar style="auto" />
        <View style={Styles.dataAddStyles.mainContainer}>
          <Input
            title={"Title"}
            value={inputData.title}
            onChangeText={(text) => updateInputs("title", text)}
            height={80}
          />
          <Input
            title={"Body"}
            value={inputData.body}
            onChangeText={(text) => updateInputs("body", text)}
            height={80}
          />
          <Input
            title={"User ID"}
            value={inputData.userID}
            ktype={"numeric"}
            onChangeText={(text) => updateInputs("userID", text)}
            height={80}
          />
        </View>
        <View style={Styles.dataAddStyles.buttonContainer}>
          <Button
            title={" < Back "}
            backgroundColor={"rgba(0,16,255,0.9)"}
            H={50}
            W={150}
            textcolor={"white"}
            textsize={22}
            onPress={() => {
              navigateToMainScreen();
            }}
          />
          <Text> </Text>
          <Button
            title={" + Add Data "}
            backgroundColor={"rgba(0,16,255,0.9)"}
            H={50}
            W={150}
            textcolor={"white"}
            textsize={22}
            onPress={() => {
              setNewData();
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

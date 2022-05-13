import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert } from "react-native";
import React, { useState, useEffect } from "react";

import Button from "../Components/Buttons/Button";
import Input from "../Components/TextInputs/Input";

import axios from "axios";

export default function AddDataScreen({ navigation: { navigate } }) {
    
    const [title, setTitle] = useState();
    const [body, setBody] = useState();
    const [userID, setUserID] = useState();

    const navigateToMainScreen = () => {
        navigate('mainscreen');
    }
    
    const setNewData = () => {
      addData();
      alertShow();
    }

    const clearInput = () => {
        setBody('');
        setTitle('');
        setUserID('');
    }

    const alertShow = () => {
        Alert.alert(
            "Data was added.",
            "", [{ text: "OK",  onPress:() => clearInput()}],
            { cancelable: false }
        );
    }

    async function addData() {
        axios
        .post('https://jsonplaceholder.typicode.com/posts', {
            title: title,
            body: body,
            userId: userID
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    };

    return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.mainContainer}>
        <Input title={'Title'} value={title} onChangeText={(title) => setTitle(title)} height={80} />
        <Input title={'Body'} value={body} onChangeText={(body) => setBody(body)} height={80} />
        <Input title={'User ID'} value={userID} ktype={'numeric'} onChangeText={(userID) => setUserID(userID)} height={80} />
      </View>
      <View style={styles.buttonContainer}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,120,255,0.75)",
  },
  mainContainer: {
    flex: 4,
    backgroundColor: "rgba(0,120,255,0.5)",
    paddingTop: 15,
    alignItems: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: "rgba(0,120,255,0.5)",
    justifyContent: "center",
    alignItems: "center",
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
});

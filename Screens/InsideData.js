import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, ImageBackground } from "react-native";
import Styles from "./Styles";
import Button from "../Components/Buttons/Button";
import axios from "axios";
import Input from "../Components/TextInputs/Input";

const image = { uri: "https://i.imgur.com/EFr6mOH.png" };
const httpMethodGET = "/posts";

export default function InsideDataScreen({ route, navigation: { navigate } }) {
  const { data } = route.params;
  const [number, setNumber] = useState();
  const [dataSource, setDataSource] = useState();
  const [counter, setCounter] = useState(0);

  const navigateToMainScreen = () => {
    navigate("mainscreen");
  };

  useEffect(() => {
    getDataWithID();
  }, [counter]);

  const getDataWithID = async () => {
    await axios
      .get(process.env.API_URL + httpMethodGET, {
        params: {
          id: number,
        },
      })
      .then((res) => {
        setDataSource(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const changeCounter = () => {
    setCounter(counter + 1);
  };

  const defaultView = () => {
    return (
      <View style={Styles.insideDataStyles.mainContainer}>
        <Text style={Styles.insideDataStyles.title}> {data.title} </Text>
        <Text style={Styles.insideDataStyles.body}> {data.body} </Text>
        <Text style={Styles.insideDataStyles.body}>
          {" "}
          Belongs to user: {data.userId}{" "}
        </Text>
      </View>
    );
  };

  const findView = () => {
    if (typeof dataSource !== "undefined") {
      return (
        <View style={Styles.insideDataStyles.mainContainer}>
          <Text style={Styles.insideDataStyles.title}>
            {" "}
            {dataSource[0].title}{" "}
          </Text>
          <Text style={Styles.insideDataStyles.body}> {dataSource[0].body} </Text>
          <Text style={Styles.insideDataStyles.body}>
            {" "}
            Belongs to user: {dataSource[0].userId}{" "}
          </Text>
        </View>
      );
    }

    return (
      <View style={Styles.insideDataStyles.mainContainer}>
        <Text style={Styles.insideDataStyles.title}> Wrong Data </Text>
        <Text style={Styles.insideDataStyles.body}> Wrong Data </Text>
        <Text style={Styles.insideDataStyles.body}> Wrong Data </Text>
      </View>
    );
  };

  return (
    <View style={Styles.baseStyles.container}>
      <ImageBackground source={image} style={Styles.baseStyles.image}>
        <StatusBar style="auto" />

        {counter === 0 && defaultView()}
        {counter !== 0 && findView()}

        <View style={Styles.insideDataStyles.middleContainer}>
          <View style={Styles.insideDataStyles.middleColorContainer}>
            <View style={Styles.insideDataStyles.middleInsideContainer}>
              <Input
                ktype={"numeric"}
                value={number}
                onChangeText={(number) => setNumber(number)}
                height={50}
                placeholder={"Find another ID"}
              />
              <Button
                title={" Find "}
                backgroundColor={"rgba(0,16,255,0.9)"}
                H={50}
                W={150}
                textcolor={"white"}
                textsize={22}
                onPress={() => {
                  changeCounter();
                }}
              />
            </View>
          </View>
        </View>

        <View style={Styles.insideDataStyles.buttonContainer}>
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
        </View>
      </ImageBackground>
    </View>
  );
}
import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, FlatList, TouchableOpacity, ImageBackground } from "react-native";
import Styles from "./Styles";
import Button from "../Components/Buttons/Button";
import axios from "axios";
import Input from "../Components/TextInputs/Input";

const image = { uri: "https://i.imgur.com/EFr6mOH.png" };
const httpMethodGET = "/posts";

export default function MainDataScreen({ navigation: { navigate } }) {
  const [apiData, setApiData] = useState();
  const [originalApiData, setOriginalApiData] = useState();
  const [number, setNumber] = useState();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    axios.get(process.env.API_URL + httpMethodGET).then((res) => {
      setOriginalApiData(res.data);
      setApiData(res.data);
    });
  }

  const navigateToAddData = () => {
    navigate("dataadd");
  };

  const listFilter = () => {
    setApiData(originalApiData);
    {
      number &&
        setApiData((data) => {
          return data.filter((item) => item.userId == number);
        });
    }
  };

  const listSort = () => {
    setApiData(originalApiData);
    setApiData((data) => {
      return data.sort((a, b) => a.title.localeCompare(b.title));
    });
  };

  const listbyID = () => {
    setApiData(originalApiData);
    setApiData((data) => {
      return data.sort((a, b) => a.id - b.id);
    });
  };

  const RenderApiDataList = (itemData) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() =>
            navigate("data", {
              body: itemData.item.body,
              title: itemData.item.title,
              userId: itemData.item.userId,
            })
          }
          style={Styles.getDataStyles.flatListItem}
        >
          <Text style={Styles.getDataStyles.flatListButtonText}>
            {itemData.item.title}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={Styles.baseStyles.container}>
      <ImageBackground source={image} style={Styles.baseStyles.image}>
        <StatusBar style="auto" />

        <View style={Styles.getDataStyles.sortMenu}>
          <View style={Styles.getDataStyles.sortView}>
            <Button
              title={" By ID "}
              backgroundColor={"rgba(0,16,255,0.9)"}
              H={50}
              W={80}
              textcolor={"white"}
              textsize={22}
              onPress={() => {
                listbyID();
              }}
            />
          </View>

          <View style={Styles.getDataStyles.sortView}>
            <Button
              title={" Title "}
              backgroundColor={"rgba(0,16,255,0.9)"}
              H={50}
              W={80}
              textcolor={"white"}
              textsize={22}
              onPress={() => {
                listSort();
              }}
            />
          </View>

          <View style={Styles.getDataStyles.filterView}>
            <Input
              ktype={"numeric"}
              value={number}
              onChangeText={(number) => setNumber(number)}
              height={50}
            />
          </View>

          <View style={Styles.getDataStyles.filterView}>
            <Button
              title={" Find "}
              backgroundColor={"rgba(0,16,255,0.9)"}
              H={50}
              W={100}
              textcolor={"white"}
              textsize={22}
              onPress={() => {
                listFilter();
              }}
            />
          </View>
        </View>

        <View style={Styles.getDataStyles.flatContainer}>
          <FlatList
            data={apiData}
            renderItem={RenderApiDataList}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>

        <View style={Styles.getDataStyles.buttonContainer}>
          <Button
            title={" + Add Data "}
            backgroundColor={"rgba(0,16,255,0.9)"}
            H={50}
            W={150}
            textcolor={"white"}
            textsize={22}
            onPress={() => {
              navigateToAddData();
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

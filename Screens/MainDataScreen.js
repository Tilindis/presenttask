import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Button from "../Components/Buttons/Button";
import axios from "axios";
import Input from "../Components/TextInputs/Input";

const image = { uri: "https://i.imgur.com/EFr6mOH.png" };

export default function MainDataScreen({ navigation: { navigate } }) {
  const [apiData, setApiData] = useState();
  const [originalApiData, setOriginalApiData] = useState();
  const [number, setNumber] = useState();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
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
          style={styles.flatListItem}
        >
          <Text style={styles.flatListButtonText}>{itemData.item.title}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <StatusBar style="auto" />

        <View style={styles.sortMenu}>
          <View style={styles.sortView}>
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

          <View style={styles.sortView}>
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

          <View style={styles.filterView}>
            <Input
              ktype={"numeric"}
              value={number}
              onChangeText={(number) => setNumber(number)}
              height={50}
            />
          </View>

          <View style={styles.filterView}>
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

        <View style={styles.flatContainer}>
          <FlatList
            data={apiData}
            renderItem={RenderApiDataList}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>

        <View style={styles.buttonContainer}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,120,255,0.75)",
  },
  sortMenu: {
    flex: 0.5,
    flexDirection: "row",
    backgroundColor: "rgba(0,120,255,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  flatContainer: {
    flex: 3.5,
    backgroundColor: "rgba(0,120,255,0.75)",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
    paddingTop: 10,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "rgba(0,120,255,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  flatListItem: {
    flex: 1,
    margin: 5,
    height: 70,
    backgroundColor: "rgba(0,16,255,0.5)",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  flatListButtonText: {
    fontSize: 14,
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  sortView: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  filterView: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
});

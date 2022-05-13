import React, { useState, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../Components/Buttons/Button';
import axios from 'axios';
import Input from '../Components/TextInputs/Input';

export default function InsideDataScreen({ route, navigation: { navigate }}) {
  
    const { title, body, userId } = route.params;
    const [number, setNumber] = useState();
    const [apiData, setApiData] = useState();
    const [counter, setCounter] = useState(0);

    const navigateToMainScreen = () => {
      navigate('mainscreen');
    }

    useEffect(() => {
      getDataWithID();
    }, [counter]);

    async function getDataWithID() {
      axios.get('https://jsonplaceholder.typicode.com/posts/', {
        params:{
          id: number,
        }
      }).then((res) => {
        setApiData(res.data);
      }).catch((err) => {
        //console.log(err);
      });
    }

    const changeCounter = () => {
      setCounter(counter+1);
    };

    const defaultView = () => {
      return (
        <View style={styles.mainContainer}>
          <Text style={styles.title}> {title} </Text>
          <Text style={styles.body}> {body} </Text>
          <Text style={styles.body}>Belongs to user: {userId} </Text>
        </View>
      );
    };

    // const findView = () => {
       
    //   return (
    //     <View style={styles.mainContainer}>
    //       {apiData[0].title &&  <Text style={styles.title}> {apiData[0].title} </Text> }
    //       {apiData[0].body &&  <Text style={styles.body}> {apiData[0].body} </Text> }
    //       {apiData[0].userId &&  <Text style={styles.body}> Belongs to user: {apiData[0].userId} </Text> }
    //     </View>
    //   );
    // };
    

    const findView = () => {
       
      if (typeof apiData !== 'undefined'){
        return (
          <View style={styles.mainContainer}>
            <Text style={styles.title}> {apiData[0].title} </Text>
            <Text style={styles.body}> {apiData[0].body} </Text>
            <Text style={styles.body}> Belongs to user: {apiData[0].userId} </Text>
          </View>
        );
      }
      
      return (
        <View style={styles.mainContainer}>
          <Text style={styles.title}> Wrong Data </Text>
          <Text style={styles.body}> Wrong Data </Text>
          <Text style={styles.body}> Wrong Data </Text>
        </View>
      );

    };

    return (
    
    <View style={styles.container}>
      
      <StatusBar style="auto" />
        {/* <Text style={styles.title}> {title} </Text>
        <Text style={styles.body}> {body} </Text>
        <Text style={styles.body}>Belongs to user: {userId} </Text> */}
        { counter === 0 && defaultView()}
        { counter !== 0 && findView()}
      
      <View style={styles.middleContainer} >
        
        <View style={styles.middleInsideContainer}>
          <Input
                ktype={"numeric"}
                value={number}
                onChangeText={(number) => setNumber(number)}
                height={50}
                placeholder={'Find another ID'}
              />
          <Button 
              title={' Find '}
              backgroundColor={'rgba(0,16,255,0.9)'}
              H={50}
              W={150}
              textcolor={'white'}
              textsize={22}
              onPress={() => {
                changeCounter();
              }} 
            />
          </View>
      </View>
      
      <View style={styles.buttonContainer}>
            
        <Button 
          title={' < Back '}
          backgroundColor={'rgba(0,16,255,0.9)'}
          H={50}
          W={150}
          textcolor={'white'}
          textsize={22}
          onPress={() => {
              navigateToMainScreen();
          }} 
        />
            
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,120,255,0.75)',
  },
  mainContainer: {
    flex: 2.5,
    backgroundColor: 'rgba(0,120,255,0.5)',
    paddingTop: 15,
    alignItems: 'center',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  body: {
    color: 'white',
    fontSize: 20,
    padding: 10,
  },
  middleContainer: {
    flex: 1.5,
    backgroundColor: 'rgba(0,120,255,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleInsideContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,120,255,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
});
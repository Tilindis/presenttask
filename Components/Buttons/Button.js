import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';

const Button = ({title, onPress, disabled, backgroundColor, W, H, textsize, textcolor}) => (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
        <View style={styles.buttonBackground} width={W} height={H} backgroundColor={backgroundColor} >
            <Text style={{fontSize: textsize, color: textcolor}}  > {title} </Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 22,
    color: "white",
  },
  buttonBackground: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
});

export default Button;
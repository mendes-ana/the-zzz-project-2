import React from 'react';

import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import mainbackground from "./backgroundImage.png"

const GameOverScreen1 = () => {
  return (
    <ImageBackground source={mainbackground} resizeMode="cover" style={styles.image}>
      <View>
        <Text style={styles.text}>Game Over</Text>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  text:{
      fontFamily: 'JacquesFrancoisShadow',
        color: 'white',
        fontSize: 50,
        textAlign: 'center',
  }
});
export default GameOverScreen1;
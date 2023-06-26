import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import mainbackground from "./backgroundImage.png";
import Fimjogo from "./Fimjogo";
import Revelar from "./Revelar";

const Tab = createBottomTabNavigator()
const GameOverScreen1 = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false
    }}>
      <Tab.Screen name="Fim de jogo" component={Fimjogo} />
      <Tab.Screen name="Revelar Assassinos" component={Revelar} />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text:{
      fontFamily: 'JacquesFrancoisShadow',
        color: 'white',
        fontSize: 50,
        textAlign: 'center',
  }
});
export default GameOverScreen1;
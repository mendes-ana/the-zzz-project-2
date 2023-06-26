import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Neopolitan from './src/components/Neopolitan';
import { PlayerProvider2 } from './src/components/Playercontext2';
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    JacquesFrancoisShadow: require('./src/fonts/JacquesFrancoisShadow-Regular.ttf'),
  });
  return (
    <View style={{flex: 1}}>
      <PlayerProvider2>
      <NavigationContainer>
        <Neopolitan></Neopolitan>
      </NavigationContainer>
      </PlayerProvider2>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
});

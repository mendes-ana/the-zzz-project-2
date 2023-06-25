import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Neo from './src/components/Neo';
import Randomizer from './src/components/Randomizer';
import { PlayerProvider2 } from './src/components/Player_context2';


export default function App() {

return (
    <View style={{flex: 1}}>
    <PlayerProvider2>
      <NavigationContainer>
        <Neo></Neo>
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
    alignContent: 'center',
  },
});

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Neo from './src/components/Neo';
import Randomizer from './src/components/Randomizer';


export default function App() {

return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Randomizer n_players={10} n_ass={2} n_xer={2} n_ang={1}/>
      </NavigationContainer>
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

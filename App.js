import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Neo from './src/components/Neo';
import PlayerList from './src/components/Playerlist';
import Players from './src/components/Players';
import { Randomizer } from './src/components/Randomizer';

export default function App() {
  
  const roles = [];
  for (let i = 1; i <= 2; i++) {
    roles.push('Assassino');
  }
  for (let i = 1; i <= 2; i++) {
    roles.push('Xerife');
  }
  for (let i = 1; i <= 2; i++) {
    roles.push('Anjo');
  }
  for (let i = 1; i <= 4; i++) {
    roles.push('Civil');
  }
  const assignedRoles = [];
  for (let i = 0; i <10; i++) {
    //indice aleatório 
    const randomIndex = Math.floor(Math.random() * roles.length);    
    const role = roles.splice(randomIndex, 1)[0];
    assignedRoles.push(role);
  }
  Players.forEach((player)=> {
    const role = assignedRoles.pop();
    player.role = role;
  })

return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <PlayerList Players={Players}/>
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

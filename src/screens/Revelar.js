import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, Button, FlatList, StyleSheet } from 'react-native';
import { PlayerContext2 } from '../components/Playercontext2';


export default props => {
  const {players} = useContext(PlayerContext2);
  const assassins = players.filter(player => player.role === 'Assassino');

  const renderPlayerItem = ({item}) => (
    <View style={styles.playerItem}>
      <Text style={styles.playerName}>{item.name}</Text>
      <Text style={styles.playerName}>{item.role} </Text>
    </View>    
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Os assassinos da partida!</Text>
      <FlatList
        style={styles.text}
        data={assassins}
        renderItem={renderPlayerItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
        justifyContent: 'center'
      },
      text:{
        fontFamily: 'JacquesFrancoisShadow',
          color: 'white',
          fontSize: 30,
          textAlign: 'center',
          marginTop: 100
    }
  });
import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import { PlayerContext2 } from '../components/Player_context2';
import Change_screen from '../components/Change_screen';


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
    <View>
      <Text>Os assassinos da partida!</Text>
      <FlatList
        data={assassins}
        renderItem={renderPlayerItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

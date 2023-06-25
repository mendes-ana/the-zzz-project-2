import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Button } from 'react-native';
import Players from '../components/Players';

const AngelScreen = ({ players, onConfirmVote }) => {
  
  const [selectedPlayer, setSelectedPlayer] = useState('');

  const handlePlayerSelection = player => {
    setSelectedPlayer(player);
  };

  const renderItem = ({ item }) => {
    const playerName = item.name;
    const isSelected = selectedPlayer === playerName;

    return (
      <TouchableOpacity
        style={[styles.playerItem, isSelected && styles.selectedPlayerItem]}
        onPress={() => handlePlayerSelection(playerName)}
      >
        <Text style={isSelected ? styles.selectedPlayerText : styles.playerText}>{playerName}</Text>
      </TouchableOpacity>
    );
  };

  const handleVoteConfirm = () => {
    if (selectedPlayer) {
      onConfirmVote(selectedPlayer);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a player to Attack:</Text>
      <FlatList
        data={Players.filter(player => !player.dead)}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        extraData={selectedPlayer}
      />
      <Button
        title="Attack"
        onPress={handleVoteConfirm}
        disabled={!selectedPlayer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  playerItem: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginVertical: 4,
    borderRadius: 4,
    backgroundColor: '#fff',
  },
  selectedPlayerItem: {
    backgroundColor: '#d3d3d3',
  },
  playerText: {
    fontSize: 16,
    color: '#000',
  },
  selectedPlayerText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default AngelScreen;

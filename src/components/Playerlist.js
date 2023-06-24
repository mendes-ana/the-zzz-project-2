import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Players from './Players';

const PlayerList = ({Players}) => {
  // Render each player item
  const renderPlayerItem = ({item}) => (
    <View style={styles.playerItem}>
      <Text style={styles.playerName}>{item.name}</Text>
      <Text style={styles.playerName}>{item.role} </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Player List</Text>
      <FlatList
        data={Players}
        renderItem={renderPlayerItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  playerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  playerName: {
    fontSize: 18,
    marginLeft: 8,
  },
};

export default PlayerList;

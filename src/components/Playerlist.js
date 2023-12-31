import React, {useContext} from 'react';
import { View, Text, FlatList } from 'react-native';
import { PlayerContext2 } from './Playercontext2';
import Change_screen from './Change_screen';


const PlayerList = () => {

  const { players, updatePlayerFlags,initializePlayers } = useContext(PlayerContext2);
  // Render each player item
  const renderPlayerItem = ({item}) => (
    <View style={styles.playerItem}>
      <Text style={styles.playerName}>{item.name}</Text>
      <Text style={styles.playerName}>{item.role} </Text>
      <Change_screen {...props} avancar='Debug' text='Next'></Change_screen>
    </View>

  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Player List</Text>
      <FlatList
        data={players}
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
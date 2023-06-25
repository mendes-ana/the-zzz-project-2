import React, {useContext} from 'react';
import { View, Text, FlatList } from 'react-native';
import { PlayerContext2 } from '../components/Player_context2';
import Change_screen from '../components/Change_screen';


export default props => {

  const { players} = useContext(PlayerContext2);
  // Render each player item
  const renderPlayerItem = ({item}) => (
    <View style={styles.playerItem}>
      <Text style={styles.playerName}>{item.name}</Text>
      <Text style={styles.playerName}>{item.role} </Text>
    </View>    
  );

  const attackedPlayers = players.filter(player => player.attacked);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Player List</Text>
      <FlatList
        data={attackedPlayers}
        renderItem={renderPlayerItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <Change_screen {...props} avancar='Assassin' text='Ok'></Change_screen>
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

import React, {useContext} from 'react';
import { View, Text, FlatList } from 'react-native';
import { PlayerContext2 } from '../components/Playercontext2';
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

  const protegidos = players.filter(player => player.protected);
  const atacados = players.filter(player => player.attacked);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Lista de Jogadores</Text>
      <FlatList
        data={players}
        renderItem={renderPlayerItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <Text style={styles.heading}>Lista de Protegidos</Text>
      <FlatList
        data={protegidos}
        renderItem={renderPlayerItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <Text style={styles.heading}>Lista de Atacados</Text>
      <FlatList
        data={atacados}
        renderItem={renderPlayerItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <Change_screen {...props} avancar='Investigationscreen' text='Iniciar'></Change_screen>
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
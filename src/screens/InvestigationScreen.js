import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, Button,StyleSheet } from 'react-native';
import { PlayerContext2 } from '../components/Player_context2';
import Change_screen from '../components/Change_screen';
import { Alert } from 'react-native';

  export default props => {
  const { players } = useContext(PlayerContext2);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const handlePlayerSelection = (playerId) => {
    setSelectedPlayer(playerId);
  };

  const handleInvestigate = () => {
    const player = players.find(player => player.id === selectedPlayer);
    if (player) {
      Alert.alert('Resultado', ` ${player.name} é um ${player.role}`);
    }
    setSelectedPlayer(null);
  };

  
  const alivePlayers = players.filter(player => !player.dead && player.role !== 'Xerife');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha um jogador para investigar:</Text>
      <View>
        {alivePlayers.map(player => (
          <TouchableOpacity
            key={player.id}
            style={[
              styles.playerButton,
              selectedPlayer === player.id && styles.selectedPlayerButton,
            ]}
            onPress={() => handlePlayerSelection(player.id)}
            disabled={!!selectedPlayer}
          >
            <Text style={styles.playerName}>{player.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Button
        title="Investigate"
        onPress={handleInvestigate}
        disabled={!selectedPlayer}
      />
      <Change_screen {...props} avancar='AngelScreen' text='Anjos'></Change_screen>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  playerButton: {
    padding: 10,
    backgroundColor: '#eaeaea',
    marginVertical: 5,
    borderRadius: 5,
  },
  selectedPlayerButton: {
    backgroundColor: '#aaf',
  },
  playerName: {
    fontSize: 16,
  },
});


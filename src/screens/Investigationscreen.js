import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, Button, StyleSheet, Dimensions } from 'react-native';
import { PlayerContext2 } from '../components/Playercontext2';
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
      <TouchableOpacity onPress={handleInvestigate}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>Investigar</Text>
            </View>
        </TouchableOpacity>
      <Change_screen {...props} avancar='AngelScreen' text='Anjos'></Change_screen>
    </View>
  );
};

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 2;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  title: {
    textAlign: 'center',
    paddingBottom: 30,
    color: 'white',
    fontSize: 30,
    margin: 12,
    fontFamily: 'JacquesFrancoisShadow',
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
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontFamily: 'JacquesFrancoisShadow',
  },
  button: {
    marginBottom: 30,
    width: buttonWidth,
    alignItems: 'center',
    backgroundColor: '#3B3636',
    borderRadius: 202,
    
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'white',
    fontSize: 30,
    fontFamily: 'JacquesFrancoisShadow',
  },
});

import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { PlayerContext2 } from '../components/Playercontext2';
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
    props.navigation.navigate('ProtectAction');
  };

  
  const alivePlayers = players.filter(player => !player.dead && player.role !== 'Xerife');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha um jogador para investigar:</Text>
      <View>
        {alivePlayers.map(player => (
          <TouchableOpacity
            key={player.id}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 10,
            }}
            onPress={() => handlePlayerSelection(player.id)}
            disabled={!!selectedPlayer}
          >
            <View
            style={{
              height: 20,
              width: 20,
              borderRadius: 10,
              borderWidth: 2,
              borderColor: selectedPlayer === player.id ? 'red' : 'gray',
              marginRight: 10,
              backgroundColor: selectedPlayer === player.id ? 'red' : 'transparent',
            }}
          />
            <Text style={styles.buttonText}>{player.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity onPress={handleInvestigate}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>Investigar</Text>
            </View>
        </TouchableOpacity>
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
    fontSize: 20,
    fontFamily: 'JacquesFrancoisShadow',
  },
});

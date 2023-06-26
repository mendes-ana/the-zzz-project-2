import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, Button, SafeAreaView, StyleSheet, Dimensions} from 'react-native';
import { PlayerContext2 } from '../components/Playercontext2';
import Change_screen from '../components/Change_screen';


export default props => {
  const { players, updatePlayerFlags, config } = useContext(PlayerContext2);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  // Function to handle player selection
  const handlePlayerSelection = (playerId) => {
    if (selectedPlayers.includes(playerId)) {
      setSelectedPlayers(selectedPlayers.filter(id => id !== playerId));
    } else {
      if (selectedPlayers.length < 2) {
        setSelectedPlayers([...selectedPlayers, playerId]);
      }
    }
  };

  // Function to handle the attack on selected players
  const handleAttack = () => {
    selectedPlayers.forEach(playerId => {
      const playerIndex = players.findIndex(player => player.id === playerId);
      if (playerIndex !== -1) {
        updatePlayerFlags(playerIndex, { attacked: true });
      }
    });
    setSelectedPlayers([]);
  };

  // Get the list of alive players (excluding Mafia)
  const alivePlayers = players.filter(player => !player.dead && player.role !== 'Assassino');

  // Render the attack screen
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Assassinos, escolham {config.numAssassin} jogador(es) para eliminar nesta noite</Text>
      {alivePlayers.map(player => (
        <TouchableOpacity
          key={player.id}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
          }}
          onPress={() => handlePlayerSelection(player.id)}
          disabled={selectedPlayers.length === config.numAssassin && !selectedPlayers.includes(player.id)}
        >
          <View
            style={{
              height: 20,
              width: 20,
              borderRadius: 10,
              borderWidth: 2,
              borderColor: selectedPlayers.includes(player.id) ? 'green' : 'gray',
              marginRight: 10,
              backgroundColor: selectedPlayers.includes(player.id) ? 'green' : 'transparent',
            }}
          />
          <Text>{player.name}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity onPress={handleAttack}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>Confirmar</Text>
            </View>
        </TouchableOpacity>
      <Change_screen {...props} avancar='Voting' text='Avança'></Change_screen>
      
    </SafeAreaView>
  );
};
const screen = Dimensions.get("window");
const buttonWidth = screen.width / 2;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  title:{
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
    fontSize: 30,
    fontFamily: 'JacquesFrancoisShadow',
  },
});
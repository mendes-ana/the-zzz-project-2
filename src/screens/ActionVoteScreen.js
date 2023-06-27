import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { PlayerContext2 } from '../components/Playercontext2';

export default props => {
  const { players, updatePlayerFlags} = useContext(PlayerContext2);
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

  const handleVote = () => {
    selectedPlayers.forEach(playerId => {
      const playerIndex = players.findIndex(player => player.id === playerId);
      if (playerIndex !== -1) {
        updatePlayerFlags(playerIndex, { dead: true });
      }
    });
    setSelectedPlayers([]);
    props.navigation.navigate('InvestigateAction');
  };


  const alivePlayers = players.filter(player => !player.dead);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vote em alguém para ser Executado!</Text>
      {alivePlayers.map(player => (
        <TouchableOpacity
          key={player.id}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
          }}
          onPress={() => handlePlayerSelection(player.id)}
          disabled={selectedPlayers.length === 1}
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
          <Text style={styles.text}>{player.name}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity onPress={handleVote}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Escolher</Text> 
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
    backgroundColor: 'black'
  },
  title:{
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
    fontFamily: 'JacquesFrancoisShadow',
  },
  text:{
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
    marginTop: 10,
    
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'white',
    fontSize: 20,
    fontFamily: 'JacquesFrancoisShadow',
  },
});
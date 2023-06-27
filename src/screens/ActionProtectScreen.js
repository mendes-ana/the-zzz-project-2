import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet} from 'react-native';
import { PlayerContext2 } from '../components/Playercontext2';


export default props => {
  const { players, updatePlayerFlags, config } = useContext(PlayerContext2);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const handlePlayerSelection = (playerId) => {
    if (selectedPlayers.includes(playerId)) {
      setSelectedPlayers(selectedPlayers.filter(id => id !== playerId));
    } else {
      if (selectedPlayers.length < 2) {
        setSelectedPlayers([...selectedPlayers, playerId]);
      }
    }
  };

  //Marca os jogadores selecionados como protegidos
  const handleProtection = () => {
    selectedPlayers.forEach(playerId => {
      const playerIndex = players.findIndex(player => player.id === playerId);
      if (playerIndex !== -1) {
        updatePlayerFlags(playerIndex, { protected: true });
      }
    });
    setSelectedPlayers([]);
    props.navigation.navigate('AttackAction');
  };

  const alivePlayers = players.filter(player => !player.dead);
  const aliveAngels = players.filter(player=> !player.dead && player.role === "Anjo")
  //Renderiza todos os jogadores vivos (independente de role)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecione até {aliveAngels.length} jogadores para proteger!</Text>
      {alivePlayers.map(player => (
        <TouchableOpacity
          key={player.id}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
          }}
          onPress={() => handlePlayerSelection(player.id)}
          disabled={selectedPlayers.length === aliveAngels.length && !selectedPlayers.includes(player.id)}
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
      <TouchableOpacity onPress={handleProtection}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>Proteger</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: 'black'
  },

  text:{
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontFamily: 'JacquesFrancoisShadow',
  },

  title: {
    fontFamily: 'JacquesFrancoisShadow',
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        marginTop: 50,
        marginBottom: 50,
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
  button: {
    marginBottom: 30,
    width: buttonWidth,
    alignItems: 'center',
    backgroundColor: '#8B0000',
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

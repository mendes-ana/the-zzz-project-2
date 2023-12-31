import React, { useContext, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet, Dimensions} from 'react-native';
import { PlayerContext2 } from '../components/Playercontext2';

export default props => {
  const { players, updatePlayerFlags, config } = useContext(PlayerContext2);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  useEffect(()=>{
    let assassinos = players.filter(player => !player.dead && player.role === 'Assassino');
    let cidade = players.filter(player => !player.dead && player.role !=='Assassino');
    if((assassinos.length===0 || assassinos.length>=cidade.length)){
      props.navigation.navigate("GameOver");
    }
  },[players])

  //Lidando com os jogadores selecionados
  //eles são jogados em um array
  const handlePlayerSelection = (playerId) => {
    if (selectedPlayers.includes(playerId)) {
      setSelectedPlayers(selectedPlayers.filter(id => id !== playerId));
    } else {
      if (selectedPlayers.length < 2) {
        setSelectedPlayers([...selectedPlayers, playerId]);
      }
    }
  };

  //Realiza o ataque nos jogadores
  const handleAttack = () => {
    selectedPlayers.forEach(playerId => {
      const playerIndex = players.findIndex(player => player.id === playerId);
      if (playerIndex !== -1) {
        updatePlayerFlags(playerIndex, { attacked: true });
      }
    });
    setSelectedPlayers([]);
    props.navigation.navigate('NightResult');
  };

  //Filtra a lista de jogadores vivos e não assassinos
  const alivePlayers = players.filter(player => !player.dead && player.role !== 'Assassino');
  const aliveAssassins = players.filter(player => !player.dead && player.role ==="Assassino");

  //Renderiza a lista de opções de alvo para atacar
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Assassinos, escolham {aliveAssassins.length} jogador(es) para eliminar nesta noite</Text>
      {alivePlayers.map(player => (
        <TouchableOpacity
          key={player.id}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
          }}
          onPress={() => handlePlayerSelection(player.id)}
          disabled={selectedPlayers.length === aliveAssassins.length && !selectedPlayers.includes(player.id)}
        >
          <View
            style={{
              height: 20,
              width: 20,
              borderRadius: 10,
              borderWidth: 2,
              borderColor: selectedPlayers.includes(player.id) ? 'red' : 'gray',
              marginRight: 10,
              backgroundColor: selectedPlayers.includes(player.id) ? 'red' : 'transparent',
            }}
          />
          <Text style={styles.buttonText}>{player.name}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity onPress={handleAttack}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>Confirmar</Text>
            </View>
        </TouchableOpacity>      
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
    fontSize: 20,
    fontFamily: 'JacquesFrancoisShadow',
  },
});
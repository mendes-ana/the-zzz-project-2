import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import { PlayerContext2 } from '../components/Player_context2';
import Change_screen from '../components/Change_screen';


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

  //Executa o ataque
  const handleAttack = () => {
    selectedPlayers.forEach(playerId => {
      const playerIndex = players.findIndex(player => player.id === playerId);
      if (playerIndex !== -1) {
        updatePlayerFlags(playerIndex, { attacked: true });
      }
    });
    setSelectedPlayers([]);
  };
  //Filtra jogadores vivos e não Assassinos
  const alivePlayers = players.filter(player => !player.dead && player.role !== 'Assassino');

  //Renderiza as opções de ataque
  return (
    <View>
      <Text>Select up to {config.numAssassin} players to attack:</Text>
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
      <Button
        title="Confirm Attack"
        onPress={handleAttack}
        disabled={selectedPlayers.length === 0}
      />
      <Change_screen {...props} avancar='NightResult' text='Finalizar Noite'></Change_screen>
      
    </View>
  );
};

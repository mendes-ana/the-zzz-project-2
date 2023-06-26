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

  //Protege os jogadores selecionados
  const handleProtection = () => {
    selectedPlayers.forEach(playerId => {
      const playerIndex = players.findIndex(player => player.id === playerId);
      if (playerIndex !== -1) {
        updatePlayerFlags(playerIndex, { protected: true });
      }
    });
    setSelectedPlayers([]);
  };

  const alivePlayers = players.filter(player => !player.dead);
  //Renderiza todos os jogadores vivos (independente de role)
  return (
    <View>
      <Text>Selecione até {config.numAng} jogadores para proteger!</Text>
      {alivePlayers.map(player => (
        <TouchableOpacity
          key={player.id}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
          }}
          onPress={() => handlePlayerSelection(player.id)}
          disabled={selectedPlayers.length === config.numAng}
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
        title="Proteger"
        onPress={handleProtection}
        disabled={selectedPlayers.length === 0}
      />
      <Change_screen {...props} avancar='Assassin' text='Turno dos Assassinos'></Change_screen>
      
    </View>
  );
};

import React, { useContext, useEffect } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { PlayerContext2 } from '../components/Playercontext2';
import Change_screen from '../components/Change_screen';

export default props = ({ navigation }) => {
  const { players, updatePlayerFlags, isGameOver } = useContext(PlayerContext2);

  useEffect(() => {
    //Verifica os jogadores atacados e deprotegidos
    const attackedPlayers = players.filter(player => player.attacked && !player.protected);

    //Elimina os jogadores que não sobreviveram a noite
    attackedPlayers.forEach(player => {
      updatePlayerFlags(player.id, { dead: true, attacked: false, protected: false});
    });

    //checar se o jogo acabou
    if (isGameOver()) {
      navigation.navigate('GameOver1');
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resultado da noite:</Text>
      <Text style={styles.subtitle}>Falecidos:</Text>
      {players.filter(player => player.dead).map(player => (
          <Text key={player.id}>{player.name}</Text>
        ))}
      <Change_screen {...props} avancar='Voting' text='Discussão'></Change_screen>
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
  subtitle: {
    fontSize: 16,
    marginBottom: 5,
  },
});

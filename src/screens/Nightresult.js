import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PlayerContext2 } from '../components/Playercontext2';
import Change_screen from '../components/Change_screen';

export default props => {
  const { players, updatePlayerFlags} = useContext(PlayerContext2);
  //Executa os efeitos da rodada da noite, Caso jogadores tenham sido atacados e não protegidos, eles morrem
  //As flags de atacado e protegido são resetadas antes que a próxima rodada se inicie
  useEffect(() => {
    for(let i=0; i<players.length;i++){
      if(players[i].protected){
        updatePlayerFlags(i,{attacked:false, protected:false})
      }
      else if(players[i].attacked && !players[i].protected){
        updatePlayerFlags(i,{attacked: false, dead: true})
      }
    }
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resultado da noite:</Text>
      <Text style={styles.subtitle}>Falecidos:</Text>
      {players.filter(player => player.dead).map(player => (
        <Text key={player.id}>{player.name}</Text>
      ))}
      <Change_screen {...props} avancar='VoteAction' text='Discussão'></Change_screen>
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

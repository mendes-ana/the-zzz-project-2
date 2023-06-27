import React, {useContext} from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { PlayerContext2 } from '../components/Playercontext2';
import Change_screen from '../components/Change_screen';


export default props => {

  const { players} = useContext(PlayerContext2);
  // Render each player item
  const renderPlayerItem = ({item}) => (
    <View style={styles.playerItem}>
      <Text style={styles.text}>{item.name}: </Text>
      <Text style={styles.text}>{item.role}</Text>
    </View>    
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Jogadores</Text>
      <FlatList
        data={players}
        renderItem={renderPlayerItem}
        keyExtractor={(item) => item.id.toString()}
      />
    <Change_screen {...props} avancar='InvestigateAction' text='Iniciar'></Change_screen>
    </View>
  );
};

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
  playerItem:{
    flexDirection:'row',
  },

  title: {
    fontFamily: 'JacquesFrancoisShadow',
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        marginTop: 50,
        marginBottom: 50,
  },
});


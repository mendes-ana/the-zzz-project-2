import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native';
import { PlayerContext2 } from '../components/Playercontext2';
import Change_screen from '../components/Change_screen';
import { StyleSheet } from 'react-native';

export default props => {
    const { config, updateConfig, initializePlayers, randomizeRoles } = useContext(PlayerContext2);
    const [numPlayers, setNumPlayers] = useState(config.numPlayers.toString());
    const [numAssassin, setNumAssassin] = useState(config.numAssassin.toString());
    const [numXerif, setNumXerif] = useState(config.numXerif.toString());
    const [numAng, setNumAng] = useState(config.numAng.toString());
  
    // Function to handle config update
    const handleConfigUpdate = () => {
      const updatedConfig = {
        numPlayers: parseInt(numPlayers),
        numAssassin: parseInt(numAssassin),
        numXerif: parseInt(numXerif),
        numAng: parseInt(numAng),
      };
      updateConfig(updatedConfig);
      initializePlayers();
      randomizeRoles();     
    };
  
    // Render the config screen
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.formText}>Number of Players:</Text>
        <TextInput
        style={styles.formText2}
          value={numPlayers}
          onChangeText={setNumPlayers}
          keyboardType="numeric"
        />
        <Text style={styles.formText}>Number of Assassins:</Text>
        <TextInput
        style={styles.formText2}
          value={numAssassin}
          onChangeText={setNumAssassin}
          keyboardType="numeric"
        />
        <Text style={styles.formText}>Number of Xerifs:</Text>
        <TextInput
        style={styles.formText2}
          value={numXerif}
          onChangeText={setNumXerif}
          keyboardType="numeric"
        />
        <Text style={styles.formText}>Number of Angels:</Text>
        <TextInput
        style={styles.formText2}
          value={numAng}
          onChangeText={setNumAng}
          keyboardType="numeric"
        />
        <TouchableOpacity onPress={handleConfigUpdate}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>Salvar</Text>
            </View>
        </TouchableOpacity>
        <Change_screen {...props} avancar='Debug' text='Jogar'></Change_screen>
      </SafeAreaView>
    );
  };

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 2;
  
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: 'black',
  },
  button: {
    marginBottom: 30,
    width: '50%',
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
  formText:{
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
    fontFamily: 'JacquesFrancoisShadow',
  },
  formText2:{
    textAlign: 'center',
    paddingBottom: 10,
    color: 'white',
    fontSize: 20,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 202,
    borderColor: '#8B0000',
    fontFamily: 'JacquesFrancoisShadow',
  }
})
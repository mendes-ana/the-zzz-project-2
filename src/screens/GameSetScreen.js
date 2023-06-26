import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { PlayerContext2 } from '../components/Player_context2'; 
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
      <View style={styles.container}>
        <Text>Number of Players:</Text>
        <TextInput
          value={numPlayers}
          onChangeText={setNumPlayers}
          keyboardType="numeric"
        />
        <Text>Number of Assassins:</Text>
        <TextInput
          value={numAssassin}
          onChangeText={setNumAssassin}
          keyboardType="numeric"
        />
        <Text>Number of Xerifs:</Text>
        <TextInput
          value={numXerif}
          onChangeText={setNumXerif}
          keyboardType="numeric"
        />
        <Text>Number of Angels:</Text>
        <TextInput
          value={numAng}
          onChangeText={setNumAng}
          keyboardType="numeric"
        />
        <Button
          title="Save Config"
          onPress={handleConfigUpdate}
        />
        <Change_screen {...props} avancar='Debug' text='Jogar'></Change_screen>
      </View>
    );
  };
  
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
  }
})
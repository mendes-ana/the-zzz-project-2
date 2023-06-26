import React, { createContext, useState, useReducer } from 'react';
import arrayShuffle from 'array-shuffle';

const initialState={
  numPlayers: 0,
  numAssassin:0,
  numXerif:0,
  numAng:0,
  gameover1:false,
  gameover2:false,
};

const configReducer =(state, action)=>{
  switch(action.type){
    case 'UPDATE_CONFIG':
      return {...state, ...action.payload};
    default:
      return state;
  }
};

const isGameOver = () => {
  stateCheck();
  const remainingPlayers = players.filter(player => !player.dead);
  const remainingMafia = remainingPlayers.filter(player => player.role === 'Mafia');
  
  if (remainingMafia.length === 0 || remainingMafia.length >= remainingPlayers.length / 2) {
    return true;
  }

  return false;
};


const PlayerContext2 = createContext();

const PlayerProvider2 = ({ children }) => {
    const [players, setPlayers] = useState([]); // Array to store player data
    const [numPlayers,setNumPlayers] = useState(0);
    const [numAssassin,setNumAssassin] = useState(0);
    const [numXerif,setNumXerif] = useState(0);
    const [numAng,setNumAng] = useState(0);
    const [config, dispatch] = useReducer(configReducer, initialState)
    
    const updateConfig = (updatedConfig) =>{
      dispatch({type: 'UPDATE_CONFIG', payload: updatedConfig});
    };

    const initializePlayers = () => {
        const initialPlayers = Array.from({ length: config.numPlayers }, (_, index) => ({
          id: index + 1, // Assign a unique ID to each player
          name: `Player ${index + 1}`,
          role: '',
          attacked: false,
          protected: false,
          dead: false,
        }));
      
        setPlayers(initialPlayers);
      };

  const stateCheck = () =>{
    const livePlayers = players.filter(player => !player.dead)
    const liveAssassins = livePlayers.filter(player => player.role==="Assassino")
    const liveXerifs = livePlayers.filter(player => player.role==="Xerife")
    const liveAngels = livePlayers.filter(player => player.role==="Anjo")
    
    const newConfig = {
      numPlayers: livePlayers.length,
      numAssassin: liveAssassins.length,
      numXerif: liveXerifs.length,
      numAng: liveAngels.length,
    };
    updateConfig(newConfig);
    if (config.numAssassin === 0){
      const newConfig = {
        numPlayers: livePlayers.length,
        numAssassin: liveAssassins.length,
        numXerif: liveXerifs.length,
        numAng: liveAngels.length,
        gameover1: true,
      };
      updateConfig(newConfig);
    }
    else if (config.numAssassin === config.numPlayers/2){
      const newConfig = {
        numPlayers: livePlayers.length,
        numAssassin: liveAssassins.length,
        numXerif: liveXerifs.length,
        numAng: liveAngels.length,
        gameover2: true,
      };
      updateConfig(newConfig);
    }
    
    return newConfig;
  }  
    // Function to update the flags of a player
    const updatePlayerFlags = (playerIndex, flags) => {
      setPlayers(prevPlayers => {
        const updatedPlayers = [...prevPlayers];
        updatedPlayers[playerIndex] = { ...updatedPlayers[playerIndex], ...flags };
        return updatedPlayers;
      });
    };



    const randomizeRoles = () => {
        // Create an array with the specified number of roles
        const roles = Array(config.numAssassin).fill('Assassino')
          .concat(Array(config.numXerif).fill('Xerife'))
          .concat(Array(config.numAng).fill('Anjo'))
          .concat(Array(config.numPlayers-(config.numAng+config.numAssassin+config.numXerif)).fill('Civilian'));
      
        const shuffledRoles= arrayShuffle(roles)
      
        // Assign roles to players in the context
        setPlayers(prevPlayers => {
          const updatedPlayers = prevPlayers.map((player, index) => ({
            ...player,
            role: shuffledRoles[index],
          }));
          return updatedPlayers;
        });
      };
      
  
    // Context value to be provided
    const contextValue = {
      players,
      initializePlayers,
      updatePlayerFlags,
      randomizeRoles,
      numPlayers,
      setNumPlayers,
      numAssassin,
      setNumAssassin,
      numAng,
      setNumAng,
      numXerif,
      setNumXerif,
      config,
      updateConfig,
    };
  
    return (
      <PlayerContext2.Provider value={contextValue}>
        {children}
      </PlayerContext2.Provider>
    );
  };
export { PlayerContext2, PlayerProvider2 };
  

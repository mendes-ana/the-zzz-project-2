import React, { createContext, useState } from 'react';
import arrayShuffle from 'array-shuffle';

const PlayerContext2 = createContext();

const PlayerProvider2 = ({ children }) => {
    const [players, setPlayers] = useState([]); // Array to store player data
    const [numPlayers,setNumPlayers] = useState(0);
    const [numAssassin,setNumAssassin] = useState(0);
    const [numXerif,setNumXerif] = useState(0);
    const [numAng,setNumAng] = useState(0);
  
    // Function to initialize the context with 10 players
    
    
    const initializePlayers = () => {
        const initialPlayers = Array.from({ length: 10 }, (_, index) => ({
          id: index + 1, // Assign a unique ID to each player
          name: `Player ${index + 1}`,
          role: '',
          attacked: false,
          protected: false,
          dead: false,
        }));
      
        setPlayers(initialPlayers);
      };
      
  
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
        const roles = Array(2).fill('Assassino')
          .concat(Array(2).fill('Xerife'))
          .concat(Array(1).fill('Anjo'))
          .concat(Array(5).fill('Civilian'));
      
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
    };
  
    return (
      <PlayerContext2.Provider value={contextValue}>
        {children}
      </PlayerContext2.Provider>
    );
  };
export { PlayerContext2, PlayerProvider2 };
  

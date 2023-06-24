import React, {createContext} from "react";
import Players from "./Players";

export function Randomizer(n_players, n_ass, n_xer,n_ang ) {
    const roles = [];
// Criando um array com as funções de acordo com os números de jogadores
    for (let i = 1; i <= n_ass; i++) {
        roles.push('Assassino');
    }
    for (let i = 1; i <= n_xer; i++) {
        roles.push('Xerife');
    }
    for (let i = 1; i <= n_ang; i++) {
        roles.push('Anjo');
    }
    for (let i = 1; i <= n_players-(n_ass + n_xer + n_ang); i++) {
        roles.push('Civil');
    }
//Randomizando a ordem das roles
  const assignedRoles = [];
  for (let i = 0; i < n_players; i++) {
    //indice aleatório 
    const randomIndex = Math.floor(Math.random() * roles.length);
    
    const role = roles.splice(randomIndex, 1)[0];
    assignedRoles.push({ player: players[i], role: role });
  }

  Players.forEach((player)=> {
    const role = assignedRoles.pop();
    player.role = role;
  })
  return assignedRoles;
}

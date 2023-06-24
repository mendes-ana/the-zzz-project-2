import { Text } from "react-native";
import PlayerList from "./Playerlist";

export default Players = [
    { id: 1, name: 'Alfred', role: '', attacked: false, protected: false, dead: false},
    { id: 2, name: 'Bruce', role: '', attacked: false, protected: false, dead: false},
    { id: 3, name: 'Barry', role: '', attacked: false, protected: false, dead: false},
    { id: 4, name: 'Diana', role: '', attacked: false, protected: false, dead: false},
    { id: 5, name: 'Sarah', role: '', attacked: false, protected: false, dead: false},
    { id: 6, name: 'Clark', role: '', attacked: false, protected: false, dead: false},
    { id: 7, name: 'Caitlin', role: '', attacked: false, protected: false, dead: false},
    { id: 8, name: 'Jordan', role: '', attacked: false, protected: false, dead: false},
    { id: 9, name: 'Mera', role: '', attacked: false, protected: false, dead: false},
    { id: 10, name: 'Arthur', role: '', attacked: false, protected: false, dead: false},
];

function randomizeRoles(n_players,n_ass,n_ang,n_xer){

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

  return assignedRoles;
} 

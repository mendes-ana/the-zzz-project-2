import React from "react";
import Players from "./Players";
import PlayerList from "./Playerlist";
import { View, Text } from "react-native";
import arrayShuffle from "array-shuffle";




export default (props) => {

  function random () {
    const roles = [];
    for (let i = 1; i <=props.n_ass; i++) {
      roles.push('Assassino');
    }
    for (let i = 1; i <=props.n_xer; i++) {
      roles.push('Xerife');
    }
    for (let i = 1; i <=props.n_ang; i++) {
      roles.push('Anjo');
    }
    for (let i = 1; i <=(props.n_players - (props.n_ang + props.n_ass + props.n_xer)); i++) {
      roles.push('Civil');
    }
    const assignedRoles = arrayShuffle(roles);
    Players.forEach((player)=> {
      const role = assignedRoles.pop();
      player.role = role;
    })

  }

  return (
    random(),
    <View >
      {Players.map(p=>{return<Text key={p.id}>{p.name} : {p.role}</Text>})}
    </View>
  )
}

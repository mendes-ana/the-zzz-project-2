import React,{useContext} from "react";
import {View, Text, FlatList} from 'react-native';
import { PlayerContext } from "../components/Player_context";
import PlayerList from "../components/Playerlist";

const RolePage = () =>{
    const { players } = useContext(PlayerContext);

    const currentPlayer = players[0];
    const filteredPlayers = players.filter((player)=> player.role !== currentPlayer.role);

    

}
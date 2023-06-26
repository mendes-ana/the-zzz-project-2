import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import GameOverScreen1 from "../screens/Gameover1";
import Revealscreen from "../screens/Revealscreen";


const Tab = createBottomTabNavigator()

export default props =>(
    <Tab.Navigator screenOptions={{tabBarActiveTintColor: 'red', tabBarInactiveTintColor:'grey', tabBarLabelStyle:{fontSize: 30}}} 
    initialRouteName="Tela 1">
        <Tab.Screen name="GameOverScreen1" component={GameOverScreen1}/>
        <Tab.Screen name="Revealscreen" component={Revealscreen}/>
    </Tab.Navigator>
)
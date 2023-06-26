import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import GameOverScreen1 from "../screens/GameOver1";
import RevealScreen from "../screens/RevealScreen";


const Tab = createBottomTabNavigator()

export default props =>(
    <Tab.Navigator screenOptions={{tabBarActiveTintColor: 'red', tabBarInactiveTintColor:'grey', tabBarLabelStyle:{fontSize: 30}}} 
    initialRouteName="Tela 1">
        <Tab.Screen name="Tela1" component={GameOverScreen1}/>
        <Tab.Screen name="Tela2" component={RevealScreen}/>
    </Tab.Navigator>
)
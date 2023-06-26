import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Fristscreen from "../screens/Fristscreen";
import Playerlist from "./Playerlist"
import Attackscreen from "../screens/Attackscreen"
import Debug from "../screens/Debug";
import Configscreen from "../screens/Configscreen";
import Nightresult from "../screens/Nightresult";
import GameOverScreen1 from "../screens/Gameover1";
import Investigationscreen from "../screens/Investigationscreen";
import Angelscreen from "../screens/Angelscreen";
import Votingscreen from "../screens/Votingscreen";
import Auth from "../screens/Auth";

const Stack = createNativeStackNavigator()

export default props => (
    <Stack.Navigator initialRouteName="Fristscreen" screenOptions={{headerShown:false}}>
        {/* listar em Stacks.Screens separados cada uma das telas*/}
        <Stack.Screen
                name="Fristscreen"
                component={Fristscreen}
                options={{title: 'Começo'}}>
        </Stack.Screen>
        <Stack.Screen
                name="Auth"
                component={Auth}
                options={{title: 'Login'}}>
        </Stack.Screen>    
        <Stack.Screen
                name="Playerlist"
                component={Playerlist} 
                options={{ title: 'pick your poison' }}>
        </Stack.Screen>
        <Stack.Screen
                name="Assassin"
                component={Attackscreen}
                options={{title: 'Among us'}}>
        </Stack.Screen>
        <Stack.Screen
                name="Debug"
                component={Debug}
                options={{title: 'Whatever I need really'}}>
        </Stack.Screen>
        <Stack.Screen
                name="Configscreen"
                component={Configscreen}
                options={{title: 'Sanidade-30'}}>
        </Stack.Screen>
        <Stack.Screen
                name="NightResult"
                component={Nightresult}
                options={{title: 'DANCIN'}}>
        </Stack.Screen>
        <Stack.Screen
                name="Investigationscreen"
                component={Investigationscreen}
                options={{title: 'POLIÇA'}}>
        </Stack.Screen>
        <Stack.Screen
                name="AngelScreen"
                component={Angelscreen}
                options={{title: 'Holy moly!'}}>
        </Stack.Screen>
        <Stack.Screen
                name="Voting"
                component={Votingscreen}
                options={{title: 'Amongus'}}>
        </Stack.Screen>
        <Stack.Screen
                name="GameOver"
                component={GameOverScreen1}
                options={{title: 'CABOOO'}}>
        </Stack.Screen>        
    </Stack.Navigator>
)
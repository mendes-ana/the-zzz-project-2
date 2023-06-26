import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Change_screen from "./Change_screen";
import Secondscreen from "../screens/Secondscreen";
import Fristscreen from "../screens/Fristscreen";
import Test from "../screens/Test";
import Playerlist from "../components/Playerlist"
import AttackScreen from "../screens/AttackScreen"
import Debug from "../screens/Debug";
import GameSetScreen from "../screens/GameSetScreen";
import NightResult from "../screens/NightResult";
import GameOverScreen1 from "../screens/GameOver1";
import InvestigationScreen from "../screens/InvestigationScreen";
import AngelScreen from "../screens/AngelScreen";
import VotingScreen from "../screens/VotingScreen";

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
                name="Playerlist"
                component={Playerlist} 
                options={{ title: 'pick your poison' }}>
        </Stack.Screen>
        <Stack.Screen
                name="Secondscreen" //confirma que o nome ta igual em todos os lugares, nested navigators são insuportaveis :D
                component={Secondscreen}
                options={{title: 'socorro'}}>

        </Stack.Screen>
        <Stack.Screen
                name="Test"
                component={Test}
                options={{title: 'aaaa'}}>
        </Stack.Screen>
        <Stack.Screen
                name="Assassin"
                component={AttackScreen}
                options={{title: 'Among us'}}>
        </Stack.Screen>
        <Stack.Screen
                name="Debug"
                component={Debug}
                options={{title: 'Whatever I need really'}}>
        </Stack.Screen>
        <Stack.Screen
                name="Setting"
                component={GameSetScreen}
                options={{title: 'Sanidade-30'}}>
        </Stack.Screen>
        <Stack.Screen
                name="NightResult"
                component={NightResult}
                options={{title: 'DANCIN'}}>
        </Stack.Screen>
        <Stack.Screen
                name="InvestigationScreen"
                component={InvestigationScreen}
                options={{title: 'POLIÇA'}}>
        </Stack.Screen>
        <Stack.Screen
                name="AngelScreen"
                component={AngelScreen}
                options={{title: 'Holy moly!'}}>
        </Stack.Screen>
        <Stack.Screen
                name="Voting"
                component={VotingScreen}
                options={{title: 'Amongus'}}>
        </Stack.Screen>
        <Stack.Screen
                name="GameOver"
                component={GameOverScreen1}
                options={{title: 'CABOOO'}}>
        </Stack.Screen>        
    </Stack.Navigator>
)
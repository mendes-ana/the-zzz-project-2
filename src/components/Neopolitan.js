import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Fristscreen from "../screens/Fristscreen";
import Debug from "../screens/Debug";
import Nightresult from "../screens/Nightresult";
import GameOverScreen1 from "../screens/Gameover1";
import Auth from "../screens/Auth";
import ActionAttackScreen from "../screens/ActionAttackScreen";
import ActionInvestigateScreen from "../screens/ActionInvestigateScreen";
import ActionProtectScreen from "../screens/ActionProtectScreen";
import ActionVoteScreen from "../screens/ActionVoteScreen";
import GameConfig from "../screens/GameConfig";


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
                name="Debug"
                component={Debug}
                options={{title: 'Whatever I need really'}}>
        </Stack.Screen>
        <Stack.Screen
                name="Configscreen"
                component={GameConfig}
                options={{title: 'Sanidade-30'}}>
        </Stack.Screen>
        <Stack.Screen
                name="NightResult"
                component={Nightresult}
                options={{title: 'DANCIN'}}>
        </Stack.Screen>
        <Stack.Screen
                name="InvestigateAction"
                component={ActionInvestigateScreen}
                options={{title: 'POLIÇA'}}>
        </Stack.Screen>
        <Stack.Screen
                name="ProtectAction"
                component={ActionProtectScreen}
                options={{title: 'Holy moly!'}}>
        </Stack.Screen>
        <Stack.Screen
                name="AttackAction"
                component={ActionAttackScreen}
                options={{title: 'Among us'}}>
        </Stack.Screen>
        <Stack.Screen
                name="VoteAction"
                component={ActionVoteScreen}
                options={{title: 'Amongus'}}>
        </Stack.Screen>
        <Stack.Screen
                name="GameOver"
                component={GameOverScreen1}
                options={{title: 'CABOOO'}}>
        </Stack.Screen>        
    </Stack.Navigator>
)
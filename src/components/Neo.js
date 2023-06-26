import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Change_screen from "./Change_screen";
import Secondscreen from "../screens/Secondscreen";
import Fristscreen from "../screens/Fristscreen";
import Test from "../screens/Test";
import Playerlist from "../components/Playerlist"
import AttackScreen from "../screens/AttackScreen";
import Firstscreen from "../screens/Firstscreen";
import Debug from "../screens/Debug";
import GameSetScreen from "../screens/GameSetScreen";

const Stack = createNativeStackNavigator()

export default props => (
    <Stack.Navigator initialRouteName="Setting" screenOptions={{headerShown:false}}>
        {/* listar em Stacks.Screens separados cada uma das telas*/}
        <Stack.Screen
                name="Firstscreen"
                component={Firstscreen}
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
                options={{title: 'asdasdas'}}>
        </Stack.Screen>
        <Stack.Screen
                name="Debug"
                component={Debug}
                options={{title: 'asdasdas'}}>
        </Stack.Screen>
        <Stack.Screen
                name="Setting"
                component={GameSetScreen}
                options={{title: 'asdasdas'}}>
        </Stack.Screen>
        
    </Stack.Navigator>
)
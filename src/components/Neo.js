import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Change_screen from "./Change_screen";
import Secondscreen from "../screens/Secondscreen";
import Fristscreen from "../screens/Fristscreen";
import Test from "../screens/Test";
import Playerlist from "../components/Playerlist"

const Stack = createNativeStackNavigator()

export default props => (
    <Stack.Navigator initialRouteName="Playerlist" screenOptions={{headerShown:false}}>
        {/* listar em Stacks.Screens separados cada uma das telas*/}
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
    </Stack.Navigator>
)
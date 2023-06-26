import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Fristscreen from "../screens/Fristscreen";
import Second from "../screens/Second";
import Ingame from "../screens/Ingame";
import Auth from "../screens/Auth";
import Attackscreen from "../screens/Attackscreen";
import AngelScreen from "../screens/Angelscreen";
import Configscreen from "../screens/Configscreen";

const Stack = createNativeStackNavigator()

export default props => (
    <Stack.Navigator initialRouteName="Fristscreen" screenOptions={{headerShown:false}}>
        {/* listar em Stacks.Screens separados cada uma das telas*/}
        <Stack.Screen
                name="Fristscreen"
                component={Fristscreen} 
                options={{ title: 'Informações Iniciais' }}>
        </Stack.Screen>
        {/*<Stack.Screen
                name="Second" //confirma que o nome ta igual em todos os lugares, nested navigators são insuportaveis :D
                component={Second}
                options={{title: 'socorro'}}>

</Stack.Screen> */}
        <Stack.Screen
                name="Ingame"
                component={Ingame}
                options={{title: 'aaaa'}}>
        </Stack.Screen>
        <Stack.Screen
                name="Auth"
                component={Auth}
                options={{title: 'oi'}}>
        </Stack.Screen>
        <Stack.Screen
                name="Attackscreen"
                component={Attackscreen}>

        </Stack.Screen>
        <Stack.Screen
                name="Angelscreen"
                component={AngelScreen}>

        </Stack.Screen>
        <Stack.Screen
        name="Configscreen"
        component={Configscreen}>

        </Stack.Screen>
    </Stack.Navigator>
)
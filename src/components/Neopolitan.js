import init_screen from "../screens/init_screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Change_screen from "./Change_screen";
import Second_screen from "../screens/second_screen";

const Stack = createNativeStackNavigator()

export default props => (
    <Stack.Navigator initialRouteName="init_screen" screenOptions={{headerShown:false}}>
        {/* listar em Stacks.Screens separados cada uma das telas*/}
        <Stack.Screen
                name="Primeira Tela"
                component={init_screen} 
                options={{ title: 'Informações Iniciais' }}>
        </Stack.Screen>
        <Stack.Screen
                name="Segunda Tela">
            {props =>(
                    <Change_screen {...props} avancar="init_screen">
                        <Second_screen></Second_screen>
                    </Change_screen>
            )}

        </Stack.Screen>
    </Stack.Navigator>
)
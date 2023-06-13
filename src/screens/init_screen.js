import Change_screen from "../components/Change_screen"
import { SafeAreaView, Text } from "react-native"

export default props => {
    console.warn(props.navigation.navigate != null)
    return(
        <Change_screen {...props} avancar='second_screen'>
            <Text>Teste de tela</Text>
        </Change_screen>
    )
}
import Change_screen from "../components/Change_screen"
import { Text } from "react-native"

export default props => {
    console.warn(props.navigation.navigate != null)
    return(
        <Change_screen {...props} avancar=''>
            <Text>Teste de tela 2</Text>
        </Change_screen>
    )
}
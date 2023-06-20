import Change_screen from "../components/Change_screen"
import { Text, View, StyleSheet } from "react-native"

export default props => {
    console.warn(props.navigation.navigate != null)
    return(
        <View style={styles.container}>
            <Change_screen {...props} avancar='Fristscreen' text='sei la'>
                <Text>Teste de tela 2</Text>
            </Change_screen>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
})
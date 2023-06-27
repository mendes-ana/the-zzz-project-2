import Change_screen from "../components/Change_screen"
import { Text, StyleSheet, ImageBackground, View } from "react-native"
import mainbackground from "./backgroundImage.png"

export default props => {
    return(
        <View style={styles.container}>
            <ImageBackground source={mainbackground} resizeMode="cover" style={styles.image}>
                <Text style={styles.title}>A Cidade</Text>
                <Text style={styles.title2}>Dorme</Text>
                <Change_screen {...props} avancar='Configscreen' text='Jogar'>
                    <Text>Teste de tela</Text>
                </Change_screen>
                <Change_screen {...props} avancar='Auth' text='Login' theme='secondary'>
                    <Text>Teste de tela</Text>
                </Change_screen>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: 'center',
    },
    title: {
        fontFamily: 'JacquesFrancoisShadow',
        color: 'white',
        fontSize: 50,
        textAlign: 'center',
        marginTop: -100,
        marginRight: 60,
    },
    title2: {
        fontFamily: 'JacquesFrancoisShadow',
        color: 'white',
        fontSize: 60,
        textAlign: 'right',
        marginBottom: 100,
        marginRight: 40,
    }
})
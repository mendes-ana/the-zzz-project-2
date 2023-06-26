import Change_screen from "../components/Change_screen"
import { Text, StyleSheet, ImageBackground, View } from "react-native"
import mainbackground from "./mainbackground.png"

export default props => {
    console.warn(props.navigation.navigate != null)
    return(
        <View style={styles.container}>
<<<<<<< Updated upstream
            <ImageBackground source={mainbackground} resizeMode="cover" style={styles.image}>
                <Change_screen {...props} avancar='Secondscreen' text='Jogar'>
                    <Text>Teste de tela</Text>
=======
            <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.image}>
                <Change_screen {...props} avancar='Configscreen' text='Jogar'>
                </Change_screen>
                <Change_screen {...props} avancar='Auth' text='Login' theme='secondary'>
>>>>>>> Stashed changes
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
})
import Change_screen from "../components/Change_screen"
import { Text, StyleSheet, ImageBackground, View } from "react-native"
import Mainbackground from './background.png'


export default props => {
    console.warn(props.navigation.navigate != null)
    return(
        <View style={styles.container}>
            <ImageBackground source={Mainbackground} resizeMode="cover" style={styles.image}>
                <Change_screen {...props} avancar='Secondscreen' text='Jogar'>
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
})
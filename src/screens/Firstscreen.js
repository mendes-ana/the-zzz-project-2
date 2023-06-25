import Change_screen from "../components/Change_screen"
import { Text, StyleSheet, ImageBackground, View, Button } from "react-native"
import Mainbackground from './background.png'
import { PlayerContext2 } from "../components/Player_context2"
import { useContext } from "react"


export default props => {
    const {randomizeRoles,initializePlayers} = useContext(PlayerContext2);
    console.warn(props.navigation.navigate != null)
    const handleStart = () => {
      };
    
    
    return(
        <View style={styles.container}>
            <ImageBackground source={Mainbackground} resizeMode="cover" style={styles.image}>
                <Change_screen {...props} avancar='Assassin' text='Jogar'></Change_screen>
                <Button title="Inicia" onPress={initializePlayers}></Button>
                <Button title="random" onPress={randomizeRoles}></Button>
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
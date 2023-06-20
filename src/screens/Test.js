import Change_screen from "../components/Change_screen"
import { Text, View, StyleSheet } from "react-native"
import Change_screen_intime from "../components/Change_screen_intime"

export default props => {
    console.warn(props.navigation.navigate != null)
    return(
        <View style={styles.container}>
            <Change_screen_intime {...props} avancar='Fristscreen'/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
})
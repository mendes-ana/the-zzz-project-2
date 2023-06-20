import react from "react";
import { Text } from "react-native";

export default props => {
    setTimeout(() => {
        props.navigation.navigate(props.avancar); //this.props.navigation.navigate('Login')
    }, 5000)  //5000 milliseconds
    return(
        <Text>Trocando de tela em um tempo ai</Text>
    );
}

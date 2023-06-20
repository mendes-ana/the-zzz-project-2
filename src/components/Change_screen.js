import React from "react";
import { View, Text, Button, SafeAreaView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";

export default props => {
    return(
    <SafeAreaView style={{alignItems: 'center'}}>
        <View>
            {props.avancar
                ? <TouchableOpacity
                    onPress={()=>{props.navigation.navigate(props.avancar)
                        }}
                    ><View style={styles.button}>
                    <Text style={styles.buttonText}>{props.text}</Text>
                </View></TouchableOpacity>
                : false
            }
        </View>
        <View>
            {props.children}
        </View>
    </SafeAreaView>
    )
}

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 2;
const styles = StyleSheet.create({
    button: {
        marginBottom: 30,
        width: buttonWidth,
        alignItems: 'center',
        backgroundColor: '#8B0000',
        borderRadius: 202,
      },
      buttonText: {
        textAlign: 'center',
        padding: 20,
        color: 'white',
        fontSize: 30,
      },
      buttonSecondary: {
        backgroundColor: "#3B3636",
      },
});


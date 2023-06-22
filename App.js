import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackAction } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//comentário para teste
const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
          initialRouteName='UserList'
          screenOptions={screenOptions}>
            <Stack.Screen
              name='UserList'
              component={UserList}
              options={({ navigation }) => {
                return {
                  title: 'Lista de Usuarios',
                  headerRight: () => (
                    <Button onPress={() => navigation.navigate('UserForm')} type='clear' icon={<Icon name='add' size={25} color={"white"}/>}/>
                  )
                  }
              }}/>
              <Stack.Screen name='UserForm' component={UserForm}
            options={{title: 'Formulario de usuarios'}}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

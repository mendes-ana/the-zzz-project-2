import React, { Component } from 'react'
import {
    ImageBackground,
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    Alert
} from 'react-native'

import axios from 'axios'
import AsyncStorage from "@react-native-async-storage/async-storage"
import { CommonActions } from '@react-navigation/native';

import backgroundImage from '../screens/backgroundImage.png'
import commonStyles from '../commonStyles'
import AuthInput from '../components/AuthInput'

import { server, showError, showSuccess } from '../common'
console.log([server]);

//estados iniciais do componente
const initialState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    stageNew: false
}

export default class Auth extends Component {

    //inicialização dos estados do componente 
    state = {
        ...initialState
    }

    // Este método decide se o usuário quer fazer login ou se registrar com base no estado atual
signinOrSignup = () => {
    if (this.state.stageNew) { // Se o estado 'stageNew' for verdadeiro, então o usuário quer se registrar
        this.signup()
    } else { // Caso contrário, o usuário quer fazer login
        this.signin()
    }
}

// Este método tenta registrar um novo usuário
signup = async () => {
    try {
        // Faz uma solicitação POST para a rota '/signup' do servidor (função save dentro de user.js)
        await axios.post(`${server}/signup`, {
            name: this.state.name, // Envia o nome do usuário
            email: this.state.email, // Envia o email do usuário
            password: this.state.password, // Envia a senha do usuário
            confirmPassword: this.state.confirmPassword, // Envia a confirmação de senha do usuário
        })

        // Se a solicitação for bem-sucedida, mostra uma mensagem de sucesso
        showSuccess('Usuário cadastro!')

        // Resetar o estado do componente para o estado inicial
        this.setState({ ...initialState })
    } catch (e) {
        // Se algo der errado, mostra uma mensagem de erro
        showError(e)
    }
}

// Este método tenta fazer login com um usuário existente
signin = async () => {
    try {
        // Faz uma solicitação POST para a rota '/signin' do servidor
        const res = await axios.post(`${server}/signin`, {
            email: this.state.email, // Envia o email do usuário
            password: this.state.password // Envia a senha do usuário
        })

        // Se a solicitação for bem-sucedida, armazena os dados do usuário no AsyncStorage
        AsyncStorage.setItem('userData', JSON.stringify(res.data))

        // Configura o cabeçalho 'Authorization' para todas as futuras solicitações do axios
        axios.defaults.headers.common['Authorization'] = `bearer ${res.data.token}`

        // Redireciona o usuário para a tela 'Home' 
        //A linha de código que você mencionou está usando a função dispatch do objeto navigation para enviar uma ação ao navegador.
        this.props.navigation.dispatch(
            CommonActions.reset({ //A ação enviada aqui é CommonActions.reset que limpa o estado de navegação existente e o substitui com várias rotas novas.
                index: 0, //Isso define a rota ativa - neste caso, a primeira rota na matriz de rotas.
                routes: [ // Esta é uma matriz de objetos de configuração de rota.
                    {
                        name: 'Configscreen',
                        params: res.data,
                    },
                ],
            })
        )
    } catch (e) {
        // Se algo der errado, mostra uma mensagem de erro
        showError(e)
    }
}


render() {
    // Cria um array vazio para armazenar as validações de formulário
    const validations = []
    // Verifica se o campo email contém '@'
    validations.push(this.state.email && this.state.email.includes('@'))
    // Verifica se o campo senha tem 6 ou mais caracteres
    validations.push(this.state.password && this.state.password.length >= 6)

    // Se o usuário estiver na fase de cadastro (stageNew == true)
    if (this.state.stageNew) {
        // Verifica se o nome tem 3 ou mais caracteres
        validations.push(this.state.name && this.state.name.trim().length >= 3)
        // Verifica se a senha e a confirmação de senha são iguais
        validations.push(this.state.password === this.state.confirmPassword)
    }

    // Checa se todas as validações são verdadeiras com a funcao: (t, a) => t && a
    const validForm = validations.reduce((t, a) => t && a)

    // Renderiza o componente
    return (
        // Fundo da imagem
        <ImageBackground source={backgroundImage}
            style={styles.background}>
            {/* // Título do app */}
            <Text style={styles.title}>Tasks</Text>
            {/* // Container para o formulário de login ou criar conta*/}
            <View style={styles.formContainer}>
                {/* // Subtítulo, dependendo se o usuário está criando uma conta ou fazendo login */}
                <Text style={styles.subtitle}>
                    {this.state.stageNew ? 'Crie a sua conta' : 'Informe seus dados'}
                </Text>
                {/* // Campo de entrada para o nome do usuário, só é exibido se o usuário estiver criando uma conta */}
                {this.state.stageNew &&
                    <AuthInput icon='user' placeholder='Nome'
                        value={this.state.name}
                        style={styles.input}
                        onChangeText={name => this.setState({ name })} />
                }
                {/* // Campo de entrada para o email do usuário */}
                <AuthInput icon='at' placeholder='E-mail'
                    value={this.state.email}
                    style={styles.input}
                    onChangeText={email => this.setState({ email })} />
                {/* // Campo de entrada para a senha do usuário */}
                <AuthInput icon='lock' placeholder='Senha'
                    value={this.state.password}
                    style={styles.input} secureTextEntry={true}
                    onChangeText={password => this.setState({ password })} />
                {/* // Campo de entrada para a confirmação de senha, só é exibido se o usuário estiver criando uma conta */}
                {this.state.stageNew &&
                    <AuthInput icon='asterisk'
                        placeholder='Confirmação de Senha'
                        value={this.state.confirmPassword}
                        style={styles.input} secureTextEntry={true}
                        onChangeText={confirmPassword => this.setState({ confirmPassword })} />
                }
                {/*  Botão para fazer login ou criar uma conta */}
                <TouchableOpacity onPress={this.signinOrSignup}
                    // o botão so fica ativado caso esteja válidos os campos do formulario
                    disabled={!validForm}> 
                    <View style={[styles.button, validForm ? {} : { backgroundColor: '#AAA' }]}>
                        <Text style={styles.buttonText}>
                            {this.state.stageNew ? 'Registrar' : 'Entrar'}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View> 
            {/*  Botão para alternar entre criar conta e fazer login */}
            <TouchableOpacity style={{ padding: 10 }}
                onPress={() => this.setState({ stageNew: !this.state.stageNew })}>
                <Text style={styles.buttonText}>
                    {this.state.stageNew ? 'Já possui conta?' : 'Ainda não possui conta?'}
                </Text>
            </TouchableOpacity>
        </ImageBackground>
    )
}

}

//estilos
const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 70,
        marginBottom: 10
    },
    subtitle: {
        fontFamily: commonStyles.fontFamily,
        color: '#FFF',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 10
    },
    formContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 20,
        width: '90%'
    },
    input: {
        marginTop: 10,
        backgroundColor: '#FFF'
    },
    button: {
        backgroundColor: '#080',
        marginTop: 10,
        padding: 10,
        alignItems: 'center',
        borderRadius: 7
    },
    buttonText: {
        fontFamily: commonStyles.fontFamily,
        color: '#FFF',
        fontSize: 20
    }
})
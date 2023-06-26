// Importando os módulos 'Alert' e 'Platform' do pacote 'react-native'.
// 'Alert' é usado para mostrar janelas de alerta no aplicativo, enquanto 'Platform'
// é usado para obter informações sobre a plataforma na qual o aplicativo está sendo executado.
import { Alert, Platform } from 'react-native'

// A constante 'server' é usada para definir a URL do servidor com base na plataforma.
// Se a plataforma for iOS, a URL será 'http://localhost:3000'. 
// Se a plataforma for Android (ou qualquer outra que não seja iOS), a URL será 'http://10.0.2.2:3000'.
// Isso é necessário porque no Android, o 'localhost' ou '127.0.0.1' refere-se ao próprio dispositivo Android,
// e não ao computador local onde o servidor pode estar em execução.
const server = Platform.OS === 'ios'
    ? 'http://localhost:3000' : 'http://10.0.2.2:3000'

// A função 'showError' é usada para exibir uma mensagem de erro.
// Ela recebe um objeto de erro e verifica se há uma resposta e dados de resposta presentes.
// Se essas propriedades estiverem presentes, ela exibe seus valores.
// Caso contrário, ela exibe o objeto de erro como está.
function showError(err) {
    if(err.response && err.response.data) {
        Alert.alert('Ops! Ocorreu um Problema!', `Mensagem: ${err.response.data}`)
    } else {
        Alert.alert('Ops! Ocorreu um Problema!', `Mensagem: ${err}`)
    }
}

// A função 'showSuccess' é usada para exibir uma mensagem de sucesso.
// Ela recebe uma mensagem e exibe essa mensagem em um alerta com o título 'Sucesso!'.
function showSuccess(msg) {
    Alert.alert('Sucesso!', msg)
}

// Exportando 'server', 'showError' e 'showSuccess' para que possam ser usados ​​em outros arquivos.
export { server, showError, showSuccess }
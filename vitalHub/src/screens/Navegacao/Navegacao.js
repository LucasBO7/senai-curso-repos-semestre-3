import { Button, View } from "react-native";

export const Navegacao = ({ navigation }) => {
    return (
        <View>
            <Button
                title="Login"
                // Ao ser pressionado, navega para a screen "Login"
                onPress={() => { navigation.navigate("Login") }} />
            <Button
                title="Recuperar a Senha"
                // Ao ser pressionado, navega para a screen "Login"
                onPress={() => { navigation.navigate("RecuperarSenha") }} />
            <Button
                title="Verificação de Email"
                // Ao ser pressionado, navega para a screen "Login"
                onPress={() => { navigation.navigate("VerificacaoEmail") }} />
            <Button
                title="Redefinição de Senha"
                // Ao ser pressionado, navega para a screen "Login"
                onPress={() => { navigation.navigate("RedefinicaoSenha") }} />
            <Button
                title="Cadastro de Conta"
                // Ao ser pressionado, navega para a screen "Login"
                onPress={() => { navigation.navigate("CadastroConta") }} />
            <Button
                title="Consultas do Médico"
                // Ao ser pressionado, navega para a screen "Login"
                onPress={() => { navigation.navigate("ConsultasMedico") }} />
            <Button
                title="Perfil"
                // Ao ser pressionado, navega para a screen "Login"
                onPress={() => { navigation.navigate("Perfil") }} />
            <Button
                title="Prontuário"
                // Ao ser pressionado, navega para a screen "Login"
                onPress={() => { navigation.navigate("Prontuario") }} />
        </View>
    );
}
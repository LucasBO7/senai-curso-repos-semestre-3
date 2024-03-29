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
                // Ao ser pressionado, navega para a screen "RecuperarSenha"
                onPress={() => { navigation.navigate("RecuperarSenha") }} />
            <Button
                title="Verificação de Email"
                // Ao ser pressionado, navega para a screen "VerificacaoEmail"
                onPress={() => { navigation.navigate("VerificacaoEmail") }} />
            <Button
                title="Redefinição de Senha"
                // Ao ser pressionado, navega para a screen "RedefinicaoSenha"
                onPress={() => { navigation.navigate("RedefinicaoSenha") }} />
            <Button
                title="Cadastro de Conta"
                // Ao ser pressionado, navega para a screen "CadastroConta"
                onPress={() => { navigation.navigate("CadastroConta") }} />
            <Button
                title="Consultas do Médico"
                // Ao ser pressionado, navega para a screen "ConsultasMedico"
                onPress={() => { navigation.navigate("ConsultasMedico") }} />
            <Button
                title="Consultas do Paciente"
                // Ao ser pressionado, navega para a screen "ConsultasPaciente"
                onPress={() => { navigation.navigate("ConsultasPaciente") }} />
            <Button
                title="Seleção de Clínicas"
                // Ao ser pressionado, navega para a screen "ClinicSelection"
                onPress={() => { navigation.navigate("ClinicSelection") }} />
            <Button
                title="Seleção de Médico"
                // Ao ser pressionado, navega para a screen "ConsultasPaciente"
                onPress={() => { navigation.navigate("DoctorSelection") }} />
            <Button
                title="Seleção da data"
                // Ao ser pressionado, navega para a screen "ConsultasPaciente"
                onPress={() => { navigation.navigate("ConsultDateSelection") }} />
            <Button
                title="Perfil"
                // Ao ser pressionado, navega para a screen "Perfil"
                onPress={() => { navigation.navigate("Perfil") }} />
            <Button
                title="Prontuário"
                // Ao ser pressionado, navega para a screen "Prontuario"
                onPress={() => { navigation.navigate("Prontuario") }} />
            <Button
                title="Mapa do local da consulta"
                // Ao ser pressionado, navega para a screen "Prontuario"
                onPress={() => { navigation.navigate("LocalConsulta") }} />
            <Button
                title="Ver prescrição"
                // Ao ser pressionado, navega para a screen "Prontuario"
                onPress={() => { navigation.navigate("VisualizarPrescricao") }} />
        </View>
    );
}
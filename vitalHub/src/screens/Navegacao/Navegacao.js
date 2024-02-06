import { Button, View } from "react-native";

export const Navegacao = ({ navigation }) => {
    return (
        <View>
            <Button
                title="Login"
                // Ao ser pressionado, navega para a screen "Login"
                onPress={() => { navigation.navigate("Login") }} />
        </View>
    );
}
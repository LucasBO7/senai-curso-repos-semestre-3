import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import React from 'react'

const EstudoScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('./src/assets/nao-me-liga-album-wiu.jpg')}
            />

            <Text style={styles.title}>Não me liga... ~ WIU</Text>

            <TextInput
                style={styles.input}
                defaultValue='exemplo de input'
            />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>Exemplo de botão</Text>
            </TouchableOpacity>

            <StatusBar style="auto" />
        </View>
    )
}

export default EstudoScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'orange',
        textDecorationLine: 'underline',
    },
    input: {
        // Neste caso, usaremos porcentagem pois pode ser executado em tablets, para que fique proporcinal
        width: '90%',
        color: 'black',
        borderBottomWidth: 1,
        padding: 10,
        marginTop: 30
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 35,
        shadowRadius: 30,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',

        width: '90%',
        marginTop: 10,
        padding: 20,
        borderWidth: 1,
        borderRadius: 15,
        backgroundColor: 'black',
    },
    textButton: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15
    }
});
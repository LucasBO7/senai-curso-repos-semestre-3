import { StyleSheet, Text, View, ImageBackground, Image, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { useFonts, JosefinSans_700Bold } from '@expo-google-fonts/josefin-sans/';

const Login = () => {
    let [fontsLoaded, fontError] = useFonts({
        JosefinSans_700Bold,
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../assets/Background-Image.png')}
                style={styles.backgroundImage}
            >
                <View style={styles.imageDescription}>
                    <Image style={styles.loginImage} source={require('../../assets/login-img.png')} />
                    <Text style={styles.loginTitle}>Login</Text>
                </View>

                <View style={styles.inputSection}>
                    <TextInput style={styles.input}
                        placeholder='Insira seu email...' />
                    <TextInput style={styles.input}
                        placeholder='Insira sua senha...' />

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textButton}>Login</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            <StatusBar style="auto" />
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginImage: {
        height: 125,
        width: 96,
    },
    imageDescription: {
        width: 96,
        height: 179,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    loginTitle: {
        fontSize: 23,
        fontFamily: 'JosefinSans_700Bold',
        textTransform: 'uppercase'
    },
    input: {
        width: '86%',
        fontSize: 23,
        fontFamily: 'JosefinSans_700Bold',
        marginBottom: '10%',
        borderBottomWidth: 3,
        borderBottomColor: '#FF543E',
    },
    inputSection: {
        alignItems: 'center',
        justifyContent: 'center',

        width: '100%',
        marginTop: '15%',
    },
    button: {
        width: '86%',
        height: 60,
        marginTop: '20%',
        backgroundColor: '#FF543E',

        alignItems: 'center',
        justifyContent: 'center',

        borderRadius: 15
    },
    textButton: {
        color: '#fff',
        fontSize: 21,
        fontFamily: 'JosefinSans_700Bold',
    }
})
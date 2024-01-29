import { StyleSheet, Text, View, StatusBar } from 'react-native';

const Person = ({ name, age }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textNome}>Nome: {name}</Text>
            <Text style={styles.textIdade}>Idade: {age}</Text>
            <StatusBar style='auto' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FF9549',
        padding: 10,
        margin: 10,
        borderRadius: 5,
        fontFamily: 'Ubuntu_400Regular'
    },
    textNome: {
        fontSize: 25,
    },
    textIdade: {
        color: 'brown',
        fontWeight: '500'
    }
})

export default Person;
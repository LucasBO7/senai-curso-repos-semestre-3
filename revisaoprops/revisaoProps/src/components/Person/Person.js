import { StyleSheet, Text, View } from 'react-native';

const Person = ({ name, age }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textNome}>Nome: {name}</Text>
            <Text style={styles.textIdade}>Idade: {age}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#c1c1c1',
        padding: 10,
        margin: 10,
        borderRadius: 5
    },
    textNome: {
        fontSize: 25
    },
    textIdade: {
        color: 'brown',
        fontWeight: '500'
    }
})

export default Person;
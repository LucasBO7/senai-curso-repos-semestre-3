import { Text, View } from 'react-native';

const Person = (name, age) => {
    return (
        <View>
            <Text>Nome: {name}</Text>
            <Text>Idade: {age}</Text>
        </View>
    );
}
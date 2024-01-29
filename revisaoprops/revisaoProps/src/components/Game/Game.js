import { StyleSheet, View, Text } from "react-native"

const Game = ({ name, releaseDate, genre, rate, company }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.gameProperties}>Nome: {name}</Text>
            <Text style={styles.gameProperties}>Data de lançamento: {releaseDate}</Text>
            <Text style={styles.gameProperties}>Genêro: {genre}</Text>
            <Text style={styles.gameProperties}>Avaliação: {rate}</Text>
            <Text style={styles.gameProperties}>Empresa: {company}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin: 10,
        borderWidth: 3,
        borderColor: '#FF9549',
        borderRadius: 25,
        paddingHorizontal: 20
    },
    gameProperties: {
        fontFamily: 'Ubuntu_400Regular',
        fontSize: 15,
    }
})

export default Game;
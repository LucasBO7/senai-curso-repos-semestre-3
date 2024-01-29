import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import DynamicTextInput from '../../components/DynamicTextInput/DynamicTextInput';

const PersonalizedForm = () => {
  const [inputComponent, setInputComponent] = useState([]);

  function onButtonClickHandler() {
    console.log('CLICADO MEU LINDO!');
    setInputComponent([...inputComponent, <DynamicTextInput />]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Formulário personalizado</Text>

      <View style={styles.inputsContainer}>
        <Text>Inputs:</Text>
        <TouchableOpacity style={styles.button} onPress={() => { onButtonClickHandler() }}>
          <Text style={styles.textButton}>Input de texto</Text>
        </TouchableOpacity>
      </View>

      <View>
        {inputComponent}
      </View>
    </View >
  )
}

export default PersonalizedForm

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text: {
    backgroundColor: 'blue',
    textAlign: 'center',
    margin: 30,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black'
  },
  inputsContainer: {
    backgroundColor: '#cfcfcf',
    display: 'row',
    flexWrap: 'wrap',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderWidth: 2,
    borderColor: '#FF543E',
  },
  textButton: {
  }
})
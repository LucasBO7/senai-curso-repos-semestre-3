import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'

const DynamicTextInput = () => {
  return (
    <View>
      <TextInput style={styles.input} placeholder='Insira a pergunta...' />
      <TextInput style={styles.input} placeholder='Insira a resposta...' />
    </View>
  );
}

export default DynamicTextInput

const styles = StyleSheet.create({
  input: {

  }
})
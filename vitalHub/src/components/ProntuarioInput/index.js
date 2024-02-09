import { View, Text } from 'react-native'
import React from 'react'
import { ProntuarioInputBox, ProntuarioLabel } from './Style'

export const ProntuarioInput = () => {
    return (
        <ProntuarioInputContainer>
            <ProntuarioLabel>Descrição da consulta</ProntuarioLabel>
            <ProntuarioInputBox />
        </ProntuarioInputContainer>
    )
}
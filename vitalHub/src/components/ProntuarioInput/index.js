import React from 'react'
import { ProntuarioInputContainer, ProntuarioInputBox, ProntuarioLabel } from './Style'

export const ProntuarioInput = ({ labelText, placeholder, inputHeight, isMultiline, textAlignVertical }) => {
    return (
        <ProntuarioInputContainer>
            <ProntuarioLabel>{labelText}</ProntuarioLabel>
            <ProntuarioInputBox multiline={isMultiline} textAlignVertical={textAlignVertical} placeholder={placeholder} inputHeight={inputHeight} />
        </ProntuarioInputContainer>
    )
}
import React from 'react'
import { ScheduleConsultButtonContainer, ButtonIcon } from './Style'

export const ScheduleConsultButton = ({ onPressBtn }) => {
    return (
        <ScheduleConsultButtonContainer onPress={() => { onPressBtn() }}>
            <ButtonIcon />
        </ScheduleConsultButtonContainer>
    )
}
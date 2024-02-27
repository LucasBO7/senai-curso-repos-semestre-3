import React from 'react'
import { TitleContainer } from '../ClinicCard/Style'
import { CardTitle } from '../Title/Style'
import { CardSubtitleSecond } from '../Subtitle/Style'
import { PatientPerfilImg } from '../Image/Style'
import { DoctorContainer } from './Style'

export const DoctorCard = ({ doctor, isSelected }) => {
    return (
        <DoctorContainer>
            <PatientPerfilImg source={doctor.imgSource} />

            <TitleContainer>
                <CardTitle>{doctor.name}</CardTitle>
                <CardSubtitleSecond>{doctor.profession}</CardSubtitleSecond>
            </TitleContainer>
        </DoctorContainer>
    )
}

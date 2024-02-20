import React from 'react'
import { PatientPerfilEllipse, PatientPerfilImg } from '../Image/Style'
import { PatientCategoriesContainer, PatientInfosBottom, PatientInfosContainer } from '../Container/Style'
import { PatientName } from '../Title/Style'
import { PatientAge, QueryCategory } from '../Subtitle/Style'
import { ConsultationTime } from '../ConsultationTime'
import { LinkThird } from '../Link/Style'

export const ConsultCard = () => {
    return (
        <ConsultCard>
            {/* Imagem */}
            <PatientPerfilImg
                source={require("../../assets/images/userPerfilImg.png")}
            />

            {/* Informações do Paciente */}
            <PatientInfosContainer>
                {/* Nome do paciente */}
                <PatientName>Niccole Sarga</PatientName>

                <PatientCategoriesContainer>
                    <PatientAge>22 anos</PatientAge>
                    <PatientPerfilEllipse source={require("../../assets/images/ellipse.png")} />
                    <QueryCategory>Rotina</QueryCategory>
                </PatientCategoriesContainer>

                {/* Região inferior (AZUL) */}
                <PatientInfosBottom>
                    <ConsultationTime
                        timeText="14:00"
                        timeContainerColor="#F1F0F5"
                        timeContentColor="#4E4B59"
                    />
                    <LinkThird textColor="#344F8F">Ver prontuário</LinkThird>
                </PatientInfosBottom>
            </PatientInfosContainer>
        </ConsultCard>
    )
}
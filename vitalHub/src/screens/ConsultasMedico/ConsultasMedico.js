import React from 'react'
import { Container, PatientCategoriesContainer, PatientInfosContainer, QueryContainer, QueryStatusContainer } from '../../components/Container/Style'
import { QueryStatusButton } from '../../components/QueryStatusButton/index'
import { PatientPerfilEllipse, PatientPerfilImg } from '../../components/Logo/Style'
import { PatientName } from '../../components/Title/Style'
import { PatientAge, QueryCategory } from '../../components/Subtitle/Style'

export default function ConsultasMedico() {
  return (
    <Container>
      {/* <Header /> */}

      <QueryStatusContainer>
        <QueryStatusButton isBtnActivated={true} btnText='Agendadas' />
        <QueryStatusButton isBtnActivated={false} btnText='Realizadas' />
        <QueryStatusButton isBtnActivated={false} btnText='Canceladas' />
      </QueryStatusContainer>

      <QueryContainer>
        <PatientPerfilImg source={require('../../assets/userPerfilImg.png')} />

        <PatientInfosContainer>
          <PatientName>Niccole Sarga</PatientName>

          <PatientCategoriesContainer>
            <PatientAge>22 anos</PatientAge>
            <PatientPerfilEllipse source={require('../../assets/ellipse.png')} />
            <QueryCategory>Rotina</QueryCategory>
          </PatientCategoriesContainer>

        </PatientInfosContainer>
      </QueryContainer>

    </Container>
  )
}
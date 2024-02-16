import React from "react";
import {
  ConsultasMedicoContainer,
  PatientInfosBottom,
} from "../../components/Container/Style";
import { Header } from "../../components/Header/index";

import {
  Container,
  PatientCategoriesContainer,
  PatientInfosContainer,
  QueryContainer,
  QueryStatusContainer,
} from "../../components/Container/Style";
import { QueryStatusButton } from "../../components/QueryStatusButton/index";
import {
  PatientPerfilEllipse,
  PatientPerfilImg,
} from "../../components/Image/Style";
import { MonthYearTitle, PatientName } from "../../components/Title/Style";
import { PatientAge, QueryCategory } from "../../components/Subtitle/Style";
import { ConsultationTime } from "../../components/ConsultationTime";
import { CancelLink } from "../../components/Link/Style";

export default function ConsultasMedico() {
  return (
    <Container>
      <Header />

      <ConsultasMedicoContainer>
        <MonthYearTitle>Novembro 2023</MonthYearTitle>

        <QueryStatusContainer>
          <QueryStatusButton isBtnActivated={true} btnText="Agendadas" />
          <QueryStatusButton isBtnActivated={false} btnText="Realizadas" />
          <QueryStatusButton isBtnActivated={false} btnText="Canceladas" />
        </QueryStatusContainer>

        <QueryContainer>
          <PatientPerfilImg
            source={require("../../assets/images/userPerfilImg.png")}
          />

          <PatientInfosContainer>
            {/* Região superior (AMARELO) */}
            <PatientName>Niccole Sarga</PatientName>

            <PatientCategoriesContainer>
              <PatientAge>22 anos</PatientAge>
              <PatientPerfilEllipse
                source={require("../../assets/images/ellipse.png")}
              />
              <QueryCategory>Rotina</QueryCategory>
            </PatientCategoriesContainer>

            {/* Região inferior (AZUL) */}
            <PatientInfosBottom>
              <ConsultationTime timeText="14:00" />
              <CancelLink>Cancelar</CancelLink>
            </PatientInfosBottom>
          </PatientInfosContainer>
        </QueryContainer>

        <QueryContainer>
          <PatientPerfilImg
            source={require("../../assets/images/userImg2.png")}
          />

          <PatientInfosContainer>
            {/* Região superior (AMARELO) */}
            <PatientName>Richard Kosta</PatientName>

            <PatientCategoriesContainer>
              <PatientAge>28 anos</PatientAge>
              <PatientPerfilEllipse
                source={require("../../assets/images/ellipse.png")}
              />
              <QueryCategory>Urgência</QueryCategory>
            </PatientCategoriesContainer>

            {/* Região inferior (AZUL) */}
            <PatientInfosBottom>
              <ConsultationTime timeText="15:00" />
              <CancelLink>Cancelar</CancelLink>
            </PatientInfosBottom>
          </PatientInfosContainer>
        </QueryContainer>
      </ConsultasMedicoContainer>
    </Container>
  );
}

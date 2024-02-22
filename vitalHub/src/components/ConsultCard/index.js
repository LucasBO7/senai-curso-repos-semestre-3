import React from "react";
import { PatientPerfilEllipse, PatientPerfilImg } from "../Image/Style";
import {
  PatientCategoriesContainer,
  PatientInfosBottom,
  PatientInfosContainer,
} from "../Container/Style";
import { PatientName } from "../Title/Style";
import { PatientAge, QueryCategory } from "../Subtitle/Style";
import { ConsultationTime } from "../ConsultationTime";
import { LinkThird, LinkThirdText } from "../Link/Style";
import { ConsultCardContainer } from "../Container/Style";

export const ConsultCard = ({
  situacao = "Pendentes",
  onCancelPress,
  onAppointmentPress,
  patient
}) => {
  return (
    <ConsultCardContainer>
      <PatientPerfilImg
        source={require("../../assets/images/userPerfilImg.png")}
      />

      {/* Informações do Paciente */}
      <PatientInfosContainer>
        {/* Nome do paciente */}
        <PatientName>{patient.name}</PatientName>

        <PatientCategoriesContainer>
          <PatientAge>{patient.age}</PatientAge>
          <PatientPerfilEllipse
            source={require("../../assets/images/ellipse.png")}
          />
          <QueryCategory>Rotina</QueryCategory>
        </PatientCategoriesContainer>

        {/* Região inferior (AZUL) */}
        <PatientInfosBottom>
          <ConsultationTime
            situacao={situacao}
            timeText={"10:35"}
          />
          {
            situacao == "Canceladas" ? (
              <>
              </>
            ) : situacao == "Pendentes" ?
              (
                <LinkThird onPress={() => { onCancelPress() }}>
                  <LinkThirdText textColor="#C81D25">Cancelar</LinkThirdText>
                </LinkThird>
              ) : (
                <LinkThird onPress={() => { onAppointmentPress() }}>
                  <LinkThirdText textColor="#344F8F">Ver prontuário</LinkThirdText>
                </LinkThird>
              )
          }
        </PatientInfosBottom>
      </PatientInfosContainer >
    </ConsultCardContainer >
  );
};
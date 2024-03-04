import React from "react";
import { TitleContainer } from "../ClinicCard/Style";
import { CardTitle } from "../Title/Style";
import { CardSubtitleSecond } from "../Subtitle/Style";
import { PatientPerfilImg } from "../Image/Style";
import { DoctorContainer, DoctorContent } from "./Style";

export const DoctorCard = ({ doctor, selectedCard, onCardSelected }) => {
  return (
    <DoctorContainer
      isSelected={selectedCard == doctor.id ? true : false}
      onPress={() => {
        onCardSelected(doctor.id);
      }}
    >
      <DoctorContent>
        <PatientPerfilImg source={doctor.imgSource} />

        <TitleContainer>
          <CardTitle>{doctor.name}</CardTitle>
          <CardSubtitleSecond>{doctor.profession}</CardSubtitleSecond>
        </TitleContainer>
      </DoctorContent>
    </DoctorContainer>
  );
};

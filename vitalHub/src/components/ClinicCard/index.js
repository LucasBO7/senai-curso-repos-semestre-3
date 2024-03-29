import React from "react";
import {
  CardContainer,
  CardContent,
  ElementsContainer,
  OperatingDaysContainer,
  OperatingDaysText,
  RatingContainer,
  TitleContainer,
} from "./Style";
import { CardTitle, RateText } from "../Title/Style";
import { CardSubtitle } from "../Subtitle/Style";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export const ClinicCard = ({ clinic, selectedCardId, onCardPress }) => {
  return (
    <CardContainer
      isSelected={selectedCardId == clinic.id ? true : false}
      onPress={() => {
        onCardPress(clinic.id);
      }}
    >
      <CardContent>
        <TitleContainer>
          <CardTitle>{clinic.name}</CardTitle>
          <CardSubtitle>{clinic.local}</CardSubtitle>
        </TitleContainer>

        <ElementsContainer>
          <RatingContainer>
            <AntDesign name="star" size={15} color="#F9A620" />
            <RateText>{clinic.rating}</RateText>
          </RatingContainer>

          <OperatingDaysContainer>
            <Entypo name="calendar" size={11} color="#49B3BA" />
            <OperatingDaysText>{clinic.operatingDays}</OperatingDaysText>
          </OperatingDaysContainer>
        </ElementsContainer>
      </CardContent>
    </CardContainer>
  );
};

import React from "react";
import { FooterContainer, FooterLinkContainer, FooterLinkContent, LinkLabel } from "./Style";
import { Entypo, FontAwesome5, Octicons } from "@expo/vector-icons";
import { View } from "react-native";

export const Footer = ({ activatedPage, activatePageFunction, activatedPageBorder }) => {
  return (
    <FooterContainer>

      <FooterLinkContainer
        activatedPageBorder={activatedPage === 'agendadas' ? "#607EC5" : "transparent"}
        onPress={() => activatePageFunction('agendadas')}>
        <FooterLinkContent>
          <Entypo name="calendar" size={13.5} color={activatedPage === 'agendadas' ? "#607EC5" : "#4E4B59"} />
          <LinkLabel activatedPageBorder={activatedPage === 'agendadas' ? "#607EC5" : "#4E4B59"}>Agenda</LinkLabel>
        </FooterLinkContent>
      </FooterLinkContainer>

      <FooterLinkContainer
        activatedPageBorder={activatedPage === 'realizadas' ? "#607EC5" : "transparent"}
        onPress={() => activatePageFunction('realizadas')}>
        <FooterLinkContent>
          <FontAwesome5 name="hospital" size={13.5} color={activatedPage === 'realizadas' ? "#607EC5" : "#4E4B59"} />
          <LinkLabel activatedPageBorder={activatedPage === 'realizadas' ? "#607EC5" : "#4E4B59"}>Clínicas</LinkLabel>
        </FooterLinkContent>
      </FooterLinkContainer>

      <FooterLinkContainer
        activatedPageBorder={activatedPage === 'canceladas' ? "#607EC5" : "transparent"}
        onPress={() => activatePageFunction('canceladas')}>
        <FooterLinkContent>
          <Octicons name="feed-person" size={13.5} color={activatedPage === 'canceladas' ? "#607EC5" : "#4E4B59"} />
          <LinkLabel activatedPageBorder={activatedPage === 'canceladas' ? "#607EC5" : "#4E4B59"}>Perfil</LinkLabel>
        </FooterLinkContent>
      </FooterLinkContainer>

    </FooterContainer>
  );
};
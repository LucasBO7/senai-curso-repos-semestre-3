import React from "react";
import { FooterContainer, FooterLink, LinkIcon, LinkLabel } from "./Style";
import { Entypo, FontAwesome5, Octicons } from "@expo/vector-icons";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterLink>
        <LinkIcon iconImportName={Entypo} iconName="calendar" />
        <LinkLabel>Teste</LinkLabel>
      </FooterLink>

      <FooterLink>
        <LinkIcon iconImportName={FontAwesome5} iconName="hospital" />
        <LinkLabel>Teste</LinkLabel>
      </FooterLink>

      <FooterLink>
        <LinkIcon iconImportName={Octicons} iconName="feed-person" />
        <LinkLabel>Teste</LinkLabel>
      </FooterLink>
    </FooterContainer>
  );
};

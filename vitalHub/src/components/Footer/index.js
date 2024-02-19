import React from "react";
import { FooterContainer, FooterLink, LinkIcon, LinkLabel } from "./Style";
import { Entypo, FontAwesome5, Octicons } from "@expo/vector-icons";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterLink>
        <Entypo name="calendar" size={13.5} color="black" />
        <LinkLabel>Teste</LinkLabel>
      </FooterLink>

      <FooterLink>
        <FontAwesome5 name="hospital" size={13.5} color="black" />
        <LinkLabel>Teste</LinkLabel>
      </FooterLink>

      <FooterLink>
        <Octicons name="feed-person" size={13.5} color="black" />
        <LinkLabel>Teste</LinkLabel>
      </FooterLink>
    </FooterContainer>
  );
};

import React from "react";
import {
  HeaderContainer,
  HeaderContent,
  NotificationBtn,
  NotificationIcon,
  TitlesContainer,
  UserImage,
  UserNameTitle,
  WelcomeTitle,
} from "./Style.js";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <UserImage
          source={require("../../assets/images/doctorImg.png")}
          alt="Profile Picture"
        />

        <TitlesContainer>
          <WelcomeTitle>Bem vindo</WelcomeTitle>
          <UserNameTitle>Dr.Claudio</UserNameTitle>
        </TitlesContainer>

        <NotificationBtn>
          <NotificationIcon />
        </NotificationBtn>
      </HeaderContent>
    </HeaderContainer>
  );
};

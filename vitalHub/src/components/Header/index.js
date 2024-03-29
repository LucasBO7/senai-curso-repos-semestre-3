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

export const Header = ({ userImg, userName, navigation }) => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <UserImage
          // source={require("../../assets/images/doctorImg.png")}
          source={userImg}
          alt="Profile Picture"
        />

        <TitlesContainer onPress={() => navigation.navigate("Perfil")}>
          <WelcomeTitle>Bem vindo</WelcomeTitle>
          <UserNameTitle>{userName}</UserNameTitle>
        </TitlesContainer>

        <NotificationBtn>
          <NotificationIcon />
        </NotificationBtn>
      </HeaderContent>
    </HeaderContainer>
  );
};

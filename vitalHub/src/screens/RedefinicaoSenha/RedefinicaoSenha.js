import { View, Text } from "react-native";
import React from "react";
import { ReturnButton } from "../../components/ReturnButton";
import { Logo } from "../../components/Image/Style";
import {
  Container,
  InputNumberContainer,
} from "../../components/Container/Style";
import { Title } from "../../components/Title/Style";
import { HighlightedText, Subtitle } from "../../components/Subtitle/Style";
import { Input, InputNumber } from "../../components/Input/Style";
import { Button, ButtonTitle } from "../../components/Button/Style";

export default function RedefinicaoSenha({ navigation }) {
  return (
    <Container>
      <ReturnButton onPress={() => navigation.replace("Login")} iconName="close" />

      <Logo source={require("../../../src/assets/images/VitalHub_Logo.png")} />

      <Title>Redefinir senha</Title>
      <Subtitle>Insira e confirme a sua nova senha</Subtitle>

      <Input placeholder="Nova senha" />
      <Input placeholder="Confirmar nova senha" />

      <Button btnWidth='90%'>
        <ButtonTitle onPress={() => navigation.replace("Login")}>Confirmar nova senha</ButtonTitle>
      </Button>
    </Container>
  );
}

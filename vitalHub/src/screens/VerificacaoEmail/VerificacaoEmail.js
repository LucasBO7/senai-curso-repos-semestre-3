import React from "react";
import { Container } from "../../components/Container/Style";
import { Logo } from "../../components/Image/Style";
import { ReturnButton } from "../../components/ReturnButton";
import { Title } from "../../components/Title/Style";
import { HighlightedText, Subtitle } from "../../components/Subtitle/Style";
import { InputNumber } from "../../components/Input/Style";
import { InputNumberContainer } from "../../components/Container/Style";
import { Button, ButtonTitle } from "../../components/Button/Style";
import { LinkSecondary } from "../../components/Link/Style";

export default function VerificacaoEmail({ navigation }) {
  return (
    <Container>
      <ReturnButton onPress={() => navigation.replace("Login")} iconName="close" />

      <Logo source={require("../../../src/assets/images/VitalHub_Logo.png")} />

      <Title>Verifique seu e-mail</Title>
      <Subtitle>
        Digite o código de 4 dígitos enviado para{" "}
        <HighlightedText>username@email.com</HighlightedText>
      </Subtitle>

      <InputNumberContainer>
        <InputNumber placeholder="0" />
        <InputNumber placeholder="0" />
        <InputNumber placeholder="0" />
        <InputNumber placeholder="0" />
      </InputNumberContainer>

      <Button onPress={() => navigation.replace("RedefinicaoSenha")} btnWidth='90%'>
        <ButtonTitle>Entrar</ButtonTitle>
      </Button>

      <LinkSecondary>Reenviar Código</LinkSecondary>
    </Container>
  );
}

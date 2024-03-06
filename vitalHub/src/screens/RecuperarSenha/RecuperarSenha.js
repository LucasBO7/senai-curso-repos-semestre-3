import React from "react";
import { Container } from "../../components/Container/Style";
import { Logo } from "../../components/Image/Style";
import { Title } from "../../components/Title/Style";
import { Subtitle } from "../../components/Subtitle/Style";
import { Input } from "../../components/Input/Style";
import { Button, ButtonTitle } from "../../components/Button/Style";
import { ReturnButton } from "../../components/ReturnButton/index";

export default function RecuperarSenha({ navigation }) {
  return (
    <Container>
      <ReturnButton onPress={() => navigation.replace("Login")} iconName="arrowleft" />

      <Logo source={require("../../../src/assets/images/VitalHub_Logo.png")} />

      <Title>Recuperar Senha</Title>

      <Subtitle>
        Digite abaixo seu email cadastrado que enviaremos um link para
        recuperação de senha
      </Subtitle>

      <Input placeholder="Usuário ou E-mail..." />

      <Button onPress={() => navigation.replace("VerificacaoEmail")} btnWidth='90%'>
        <ButtonTitle>Continuar</ButtonTitle>
      </Button>
    </Container>
  );
}

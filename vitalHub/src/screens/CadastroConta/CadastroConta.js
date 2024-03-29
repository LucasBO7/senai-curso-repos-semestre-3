import { View, Text } from "react-native";
import React from "react";
import { Container } from "../../components/Container/Style";
import { Title } from "../../components/Title/Style";
import { Subtitle } from "../../components/Subtitle/Style";
import { Logo } from "../../components/Image/Style";
import { Button, ButtonTitle } from "../../components/Button/Style";
import { LinkSecondary } from "../../components/Link/Style";
import { Input } from "../../components/Input/Style";

export default function CadastroConta({ navigation }) {
  return (
    <Container>
      <Logo source={require("../../../src/assets/images/VitalHub_Logo.png")} />

      <Title>Criar conta</Title>

      <Subtitle>
        Insira seu endereço de e-mail e senha para realizar seu cadastro.
      </Subtitle>

      <Input placeholder="Usuário ou E-mail..." />
      <Input placeholder="Senha" />
      <Input placeholder="Confirmar Senha" />

      <Button onPress={() => navigation.replace("Login")} btnWidth='90%'>
        <ButtonTitle>Cadastrar</ButtonTitle>
      </Button>

      <LinkSecondary onPress={() => navigation.replace("Login")}>Cancelar</LinkSecondary>
    </Container>
  );
}

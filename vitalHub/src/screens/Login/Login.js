import React from "react";
import { Container } from "../../components/Container/Style";
import { Logo } from "../../components/Image/Style";
import { Title } from "../../components/Title/Style";
import { Input } from "../../components/Input/Style";
import { LinkMedium } from "../../components/Link/Style";
import { AntDesign } from "@expo/vector-icons";
import {
  ContextAccount,
  LinkBold,
  TextAccount,
} from "../../components/ContextAccount/Style";
import {
  Button,
  ButtonGoogle,
  ButtonTitle,
  ButtonTitleGoogle,
} from "../../components/Button/Style";

export default function Login({ navigation }) {

  async function Login() {
    navigation.navigate("Main");
  }

  return (
    // <Text>Tela de login a ser desenvolvida</Text>
    <Container>
      <Logo source={require("../../../src/assets/images/VitalHub_Logo.png")} />

      <Title>Entrar ou criar conta</Title>

      <Input placeholder="Usuário ou E-mail..." />
      <Input placeholder="Senha" />

      <LinkMedium onPress={() => navigation.replace("RecuperarSenha")}>Esqueceu sua senha?</LinkMedium>

      <Button onPress={(e) => Login()} btnWidth='90%'>
        <ButtonTitle>Entrar</ButtonTitle>
      </Button>

      <ButtonGoogle btnWidth="90%">
        <AntDesign name="google" size={20} color="#496BBA" />
        <ButtonTitleGoogle>Entrar com Google</ButtonTitleGoogle>
      </ButtonGoogle>

      <ContextAccount>
        <TextAccount>
          Não tem conta? <LinkBold onPress={() => navigation.replace("CadastroConta")}>Cria uma conta agora!</LinkBold>
        </TextAccount>
      </ContextAccount>
    </Container>
  );
}
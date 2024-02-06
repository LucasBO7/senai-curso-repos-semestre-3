import { Text } from 'react-native'
import React from 'react'
import { Container } from '../../components/Container/Style';
import { Logo } from '../../components/Logo/Style';
import { Title } from '../../components/Title/Style';
import { Input } from '../../components/Input/Style';
import { LinkMedium } from '../../components/LinkMedium/Style';

export default function Login() {
    return (
        // <Text>Tela de login a ser desenvolvida</Text>
        <Container>
            <Logo source={require('../../../src/assets/VitalHub_Logo.png')} />

            <Title>Entrar ou criar conta</Title>

            <Input placeholder="Usuário ou E-mail..." />
            <Input placeholder="Senha" />

            <LinkMedium>Esqueceu sua senha?</LinkMedium>

            {/* 
            <Button>
                <ButtonTitle>Entrar</ButtonTitle>
            </Button>

            <ButtonGoogle>
                <ButtonTitleGoogle>Entrar com Google</ButtonTitleGoogle>
            </ButtonGoogle>

            <ContextAccount>
                <TextAccount>Não tem conta? Cria uma conta agora!</TextAccount>
            </ContextAccount> */}
        </Container>
    );
}
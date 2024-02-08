import React from 'react'
import { Container } from '../../components/Container/Style';
import { Logo } from '../../components/Logo/Style';
import { Title } from '../../components/Title/Style';
import { Input } from '../../components/Input/Style';
import { LinkMedium } from '../../components/Link/Style';
import { AntDesign } from '@expo/vector-icons';
import { ContextAccount, LinkBold, TextAccount } from '../../components/ContextAccount/Style';
import { Button, ButtonGoogle, ButtonTitle, ButtonTitleGoogle } from '../../components/Button/Style';

export default function Login() {
    return (
        // <Text>Tela de login a ser desenvolvida</Text>
        <Container>
            <Logo source={require('../../../src/assets/VitalHub_Logo.png')} />

            <Title>Entrar ou criar conta</Title>

            <Input placeholder="Usuário ou E-mail..." />
            <Input placeholder="Senha" />

            <LinkMedium>Esqueceu sua senha?</LinkMedium>

            <Button>
                <ButtonTitle>Entrar</ButtonTitle>
            </Button>

            <ButtonGoogle>
                <AntDesign name="google" size={20} color="#496BBA" />
                <ButtonTitleGoogle>Entrar com Google</ButtonTitleGoogle>
            </ButtonGoogle>

            <ContextAccount>
                <TextAccount>Não tem conta? <LinkBold>Cria uma conta agora!</LinkBold></TextAccount>
            </ContextAccount>
        </Container>
    );
}

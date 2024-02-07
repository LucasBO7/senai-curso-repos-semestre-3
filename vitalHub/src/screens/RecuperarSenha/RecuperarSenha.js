import React from 'react'
import { Container } from '../../components/Container/Style'
import { Logo } from '../../components/Logo/Style'
import { Title } from '../../components/Title/Style'
import { Subtitle } from '../../components/Subtitle/Style'
import { Input } from '../../components/Input/Style'
import { Button, ButtonTitle } from '../../components/Button/Style'

export default function RecuperarSenha() {
    return (
        <Container>
            <Logo source={require('../../../src/assets/VitalHub_Logo.png')} />

            <Title>Recuperar Senha</Title>

            <Subtitle>Digite abaixo seu email cadastrado que enviaremos um link para recuperação de senha</Subtitle>

            <Input placeholder="Usuário ou E-mail..." />

            <Button>
                <ButtonTitle>Continuar</ButtonTitle>
            </Button>
        </Container>
    )
}
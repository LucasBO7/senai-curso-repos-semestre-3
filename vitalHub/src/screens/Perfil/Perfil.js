import React from 'react'
import { PerfilImage } from '../../components/PerfilImage/Style'
import { Container, PerfilInputContainer } from '../../components/Container/Style'
import { PerfilInput, PerfilInputLabel } from '../../components/Input/Style'
import { Button, ButtonTitle } from '../../components/Button/Style'

export default function Perfil() {
    return (
        <Container>
            <PerfilImage source={require('../../assets/perfil-img.png')} />

            <PerfilInputContainer>
                <PerfilInputLabel>Data de nascimento:</PerfilInputLabel>
                <PerfilInput placeholder="04/15/2022" />

                <PerfilInputLabel>CPF:</PerfilInputLabel>
                <PerfilInput keyboardType="numeric" placeholder="859********" />

                <PerfilInputLabel>Endereço:</PerfilInputLabel>
                <PerfilInput placeholder="Rua Vicenso Silva, 987" />


                <PerfilInputLabel>Cep:</PerfilInputLabel>
                <PerfilInput placeholder="06548-909" />

                <PerfilInputLabel>Cidade:</PerfilInputLabel>
                <PerfilInput placeholder="Moema-SP" />

                {/* <PerfilInputCidadeContainer>
                </PerfilInputCidadeContainer> */}
            </PerfilInputContainer>

            <Button>
                <ButtonTitle>Salvar</ButtonTitle>
            </Button>
        </Container>
    )
}
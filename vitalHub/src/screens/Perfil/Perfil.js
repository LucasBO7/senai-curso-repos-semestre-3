import React from 'react'
import { PerfilImage } from '../../components/PerfilImage/Style'
import { Container, PerfilInputContainer } from '../../components/Container/Style'
import { PerfilInput, PerfilInputLabel } from '../../components/Input/Style'

export default function Perfil() {
    return (
        <Container>
            <PerfilImage source={require('../../assets/perfil-img.png')} />

            <PerfilInputContainer>
                <PerfilInputLabel>Data de nascimento:</PerfilInputLabel>
                <PerfilInput placeholder="04/15/2022" />
            </PerfilInputContainer>
        </Container>
    )
}
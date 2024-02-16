import React from 'react'
import { PerfilImage } from '../../components/PerfilImage/Style'
import { Container, PerfilCityInputsContainer, PerfilInfoContainer } from '../../components/Container/Style'
import { PerfilInput } from '../../components/PerfilInput/index'
import { Button, ButtonSecondary, ButtonTitle } from '../../components/Button/Style'
import { ScrollView } from 'react-native'
import { PerfilEmail, PerfilName } from '../../components/Title/Style'

export default function Perfil() {
    return (
        <ScrollView>
            <Container>
                <PerfilImage source={require('../../assets/images/perfil-img.png')} />

                <PerfilInfoContainer>
                    <PerfilName>Perfil Kosta</PerfilName>
                    <PerfilEmail>richard.kosta@gmail.com</PerfilEmail>
                </PerfilInfoContainer>

                <PerfilInput
                    inputLabel="Data de nascimento"
                    inputPlaceholder="04/15/1999"
                    containerWidth="90%"
                    inputType={"numeric"} />
                <PerfilInput
                    inputLabel="CPF"
                    inputPlaceholder="859********"
                    containerWidth="90%"
                    inputType={"numeric"} />
                <PerfilInput
                    inputLabel="Endereço"
                    inputPlaceholder="Rua Vicente Silva, 987"
                    containerWidth="90%" />

                <PerfilCityInputsContainer>
                    <PerfilInput
                        inputLabel="Cep"
                        inputPlaceholder="06548-909"
                        containerWidth="40%" />
                    <PerfilInput
                        inputLabel="Cidade"
                        inputPlaceholder="Moema-SP"
                        containerWidth="40%" />
                </PerfilCityInputsContainer>

                <Button>
                    <ButtonTitle>Salvar</ButtonTitle>
                </Button>

                <Button>
                    <ButtonTitle>Editar</ButtonTitle>
                </Button>

                <ButtonSecondary btnWidth="59%">
                    <ButtonTitle>Editar</ButtonTitle>
                </ButtonSecondary>
            </Container>
        </ScrollView>
    )
}
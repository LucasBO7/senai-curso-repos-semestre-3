import React from 'react'
import { PerfilImage } from '../../components/PerfilImage/Style'
<<<<<<< HEAD
import { Container, PerfilCityInputsContainer, PerfilInfoContainer } from '../../components/Container/Style'
import { PerfilInput } from '../../components/PerfilInput/index'
import { Button, ButtonClose, ButtonTitle } from '../../components/Button/Style'
import { ScrollView } from 'react-native'
import { PerfilEmail, PerfilName } from '../../components/Title/Style'
=======
import { Container, PerfilInputContainer } from '../../components/Container/Style'
import { PerfilInput, PerfilInputLabel } from '../../components/Input/Style'
import { Button, ButtonTitle } from '../../components/Button/Style'
>>>>>>> b71b10770e8af2d725a0152f350bd7f09313b8bf

export default function Perfil() {
    return (
        <ScrollView>
            <Container>
                <PerfilImage source={require('../../assets/perfil-img.png')} />
                
                <PerfilInfoContainer>
                    <PerfilName>Perfil Kosta</PerfilName>
                    <PerfilEmail>richard.kosta@gmail.com</PerfilEmail>
                </PerfilInfoContainer>

<<<<<<< HEAD
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

                <ButtonClose>
                    <ButtonTitle>Editar</ButtonTitle>
                </ButtonClose>
            </Container>
        </ScrollView>
=======
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
>>>>>>> b71b10770e8af2d725a0152f350bd7f09313b8bf
    )
}
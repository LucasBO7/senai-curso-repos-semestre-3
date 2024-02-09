import React from 'react'
import { Container } from '../../components/Container/Style'
import { PerfilImage } from '../../components/PerfilImage/Style'
import { ScrollView } from 'react-native'

export const Prontuario = () => {
    return (
        <Container>
            <ScrollView>
                <PerfilImage source={require('../../assets/perfil-img.png')} />

                
            </ScrollView>
        </Container>
    );
}
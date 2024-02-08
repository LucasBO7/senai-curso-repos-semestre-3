import React from 'react'
import { Header, HeaderContent, TitlesContainer, UserImage, UserNameTitle, WelcomeTitle } from './Style.js';
import { LinearGradient } from 'expo-linear-gradient';

export default function index() {
    return (
        <Header>
            <LinearGradient
                width="100%"
                height="50px"
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
                colors={['#60BFC5', '#496BBA']}>
            </LinearGradient>

            {/* <HeaderContent>
                <UserImage />

                <TitlesContainer>
                    <WelcomeTitle>Bem vindo</WelcomeTitle>
                    <UserNameTitle>Dr.Claudio</UserNameTitle>
                </TitlesContainer>
            </HeaderContent> */}
        </Header >
    )
}
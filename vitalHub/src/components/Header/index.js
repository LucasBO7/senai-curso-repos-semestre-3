import React from 'react'
import { Header, HeaderContent, TitlesContainer, UserImage, UserNameTitle, WelcomeTitle } from './Style.js';

export default function index() {
    return (
        <Header>
            <HeaderContent>
                <UserImage />

                <TitlesContainer>
                    <WelcomeTitle>Bem vindo</WelcomeTitle>
                    <UserNameTitle>Dr.Claudio</UserNameTitle>
                </TitlesContainer>
            </HeaderContent>
        </Header >
    )
}
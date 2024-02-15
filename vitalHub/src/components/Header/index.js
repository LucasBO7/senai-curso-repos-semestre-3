import React from 'react'
import { HeaderContainer, HeaderContent, TitlesContainer, UserImage, UserNameTitle, WelcomeTitle } from './Style.js';

export default function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <UserImage />

                <TitlesContainer>
                    <WelcomeTitle>Bem vindo</WelcomeTitle>
                    <UserNameTitle>Dr.Claudio</UserNameTitle>
                </TitlesContainer>
            </HeaderContent>
        </HeaderContainer >
    )
}
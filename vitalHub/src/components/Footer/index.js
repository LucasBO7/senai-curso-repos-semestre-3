import React from 'react'
import { FooterContainer, FooterLink, LinkIcon, LinkLabel } from './Style';

export const Footer = () => {
    return (
        <FooterContainer>
            <FooterLink>
                <LinkIcon />
                <LinkLabel>Teste</LinkLabel>
            </FooterLink>
            
            <FooterLink>
                <LinkIcon />
                <LinkLabel>Teste</LinkLabel>
            </FooterLink>
            
            <FooterLink>
                <LinkIcon />
                <LinkLabel>Teste</LinkLabel>
            </FooterLink>
        </FooterContainer>
    );
}
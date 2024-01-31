// O componente pai, ou seja, engloba a HEADER inteira

import { HeaderContainer, HeaderContent, TextHeader } from "./style";

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <TextHeader>Consumo da API ViaCep</TextHeader>
            </HeaderContent>
        </HeaderContainer>
    );
}
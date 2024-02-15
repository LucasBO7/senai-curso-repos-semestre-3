import styled from "styled-components";

export const Title = styled.Text`
    font-family: 'MontserratAlternates_600SemiBold';
    font-size: 20px;
    color: #33303E;
    margin-bottom: 26px;
`;

// Perfil
export const PerfilName = styled.Text`
    font-family: 'MontserratAlternates_600SemiBold';
    font-size: 16px;
    color: #33303E;
    margin-bottom: 10px;
`;
export const PerfilEmail = styled.Text`
    font-family: 'Quicksand_500Medium';
    font-size: 14px;
    color: #4E4B59;
`;

export const PatientName = styled(PerfilName)`
    margin-bottom: 5px;
`;

// export const NomePaciente = styled.Text`
//     font-family: 'MontserratAlternates_600SemiBold';
//     font-size: 20px;
//     color: #33303E;
// `;

// export const InfosPaciente = styled.Text`
//     font-family: 'Quicksand_500Medium';
//     font-size: 14px;
//     line-height: 20px;
// `;
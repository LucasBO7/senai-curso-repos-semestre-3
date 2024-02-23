import styled from "styled-components";

export const Title = styled.Text`
  font-family: "MontserratAlternates_600SemiBold";
  font-size: 20px;
  color: #33303e;
  margin-bottom: 26px;
`;

export const TitleSecondary = styled(Title)`
  text-align: center;
`;

// Perfil
export const PerfilName = styled.Text`
  font-family: "MontserratAlternates_600SemiBold";
  font-size: 16px;
  color: #33303e;
  margin-bottom: 10px;
`;
export const PerfilEmail = styled.Text`
  font-family: "Quicksand_500Medium";
  font-size: 14px;
  color: #4e4b59;
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

// export const MonthYearTitle = styled.Text`
//   font-family: "MontserratAlternates_600SemiBold";
//   font-size: 20px;
//   color: #4e4b59;
//   align-self: flex-start;
//   margin-bottom: 17px;
// `;

export const PatientName = styled(PerfilName)`
  margin-bottom: -10px;
`;

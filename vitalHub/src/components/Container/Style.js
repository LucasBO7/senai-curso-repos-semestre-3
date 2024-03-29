import styled from "styled-components";

export const Container = styled.SafeAreaView`
  /* Faz o elemento ocupar toda a tela */
  flex: 1;
  align-items: center;
  background-color: #fafafa;
`;

export const InputNumberContainer = styled.View`
  flex-direction: row;
  gap: 20px;
`;

export const PerfilCityInputsContainer = styled.View`
  flex-direction: row;
  width: 90%;
  justify-content: space-between;
`;

export const PerfilInfoContainer = styled.View`
  z-index: 2;
  position: absolute;
  top: 230px;

  width: 289px;
  height: 100px;

  background-color: white;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  shadowolor: "#000";
  shadowoffset: {
    width: 0;
    height: 2;
  }
  shadowopacity: 0.25;
  elevation: 5;
`;

export const ConsultasMedicoContainer = styled.View`
  height: 546px;
  width: 88.8%;
  border-bottom: 20px;
  /* margin: 20px 0px; */
`;

export const ConsultStatusContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 24px;
`;

export const ConsultListContainer = styled.View`
  width: 100%;
  height: 100%;
`;

export const ConsultCardButtonArea = styled.TouchableOpacity`

`;

export const ConsultCardContainer = styled.View.attrs({
  shadowcolor: "#000",
  shadowOffset: {
    width: 4,
    height: 4,
  },
  shadowOpacity: 0.15,
  shadowRadius: 3.84,
  elevation: 5,
})`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 102px;

  background-color: white;
  border: 1px solid transparent;
  border-radius: 5px;

  margin-bottom: 15px;
`;

export const PatientInfosContainer = styled.View`
  height: 80px;
  width: 68.75%;
  justify-content: space-between;
`;

export const PatientCategoriesContainer = styled.View`
  flex-direction: row;
`;

export const PatientInfosBottom = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CardsList = styled.View`
  width: 100%;
  height: 100%;
`;

export const ClinicInfosContainer = styled.View`
  width: 100%;
  height: 100%;
  padding: 30px 20px;
  border-radius: 15px 15px 0px 0px;
`;

export const ConsultDateContainer = styled.View`
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  
  padding-left: 5%;
  padding-right: 5%;
`;
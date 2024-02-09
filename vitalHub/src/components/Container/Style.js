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

<<<<<<< HEAD
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
    shadowColor: '#000';
    shadowOffset: {
      width: 0;
      height: 2;
    };
    shadowOpacity: 0.25;
    shadowRadius: 3.84;
    elevation: 5;
=======
export const PerfilInputContainer = styled.View`
`;

export const PerfilInputCidadeContainer = styled.View`
    flex-direction: row;
>>>>>>> b71b10770e8af2d725a0152f350bd7f09313b8bf
`;
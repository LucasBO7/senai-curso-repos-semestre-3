import styled from "styled-components";

export const ContainerButtons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  border-bottom-width: 2px;
  border-bottom-color: #8c8a97;
  margin-bottom: 30px;
  padding-bottom: 20px;
  /* background-color: red; */
`;

export const ButtonSubmit = styled.TouchableOpacity`
  background-color: #49b3ba;
  width: 172px;
  height: 44px;
  border-radius: 5px;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const TextBtt = styled.Text`
  font-family: "MontserratAlternates_700Bold";
  color: white;
  text-transform: capitalize;
  font-size: 14px;
`;

export const ButtonCancel = styled.TouchableOpacity`
  background-color: transparent;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

export const TextBttCancel = styled.Text`
  font-size: 12px;
  font-family: "MontserratAlternates_500Medium";
  align-self: center;
  color: red;
`;

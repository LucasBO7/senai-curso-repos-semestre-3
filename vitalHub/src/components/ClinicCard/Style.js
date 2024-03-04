import styled from "styled-components";

export const CardContainer = styled.TouchableHighlight.attrs({
  shadowcolor: "#000",
  shadowOffset: {
    width: 4,
    height: 4,
  },
  shadowOpacity: 0.15,
  shadowRadius: 3.84,
  elevation: 8,
})`
  justify-content: center;
  align-items: center;
  flex-direction: row;

  width: 90%;
  height: 84px;
  margin: 5px 5%;
  padding: 14px 0px;

  border-radius: 10px;
  background-color: white;

  margin-bottom: 12px;

  ${(props) => (props.isSelected ? `border: 2px solid #496BBA` : ``)};
`;

export const CardContent = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;

  width: 100%;
  height: 100%;
`;

export const TitleContainer = styled.View`
  width: 58%;
  height: 100%;
`;

export const ElementsContainer = styled.View`
  align-items: flex-end;
  width: 32%;
  height: 100%;
`;

export const RatingContainer = styled.View`
  flex-direction: row;
  gap: 2px;
`;

// Dias de funcionamento
export const OperatingDaysContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  height: 26px;
  width: 100px;

  border-radius: 5px;
  background-color: #e8fcfd;
`;

export const OperatingDaysText = styled.Text`
  font-family: "Quicksand_600SemiBold";
  font-size: 14px;
  color: #49b3ba;
`;

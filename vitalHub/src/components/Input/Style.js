import styled from "styled-components";

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#34898f",
})`
  font-family: "MontserratAlternates_600SemiBold";
  font-size: 14px;
  color: #34898f;

  border: 2px solid #49b3ba;
  width: 90%;
  height: 53px;
  padding: 0px 16px 0px 16px;
  border-radius: 5px;
  margin-bottom: 11px;
`;

export const InputNumber = styled(Input).attrs({
  keyboardType: "numeric",
  maxLength: 1,
})`
  width: 13%;
  padding: 0px;
  padding-bottom: 2px;

  text-align: center;
  font-family: "Quicksand_600SemiBold";
  font-size: 40px;
  line-height: 52px;
`;

export const InputTag = styled.TextInput.attrs({
  placeholderTextColor: "#34898F",
})`
  justify-content: center;
  align-items: center;

  /* width: 100%; */
  height: 53px;
  padding: 0px 16px;

  border: 2px solid #60bfc5;
  border-radius: 5px;

  font-family: "MontserratAlternates_600SemiBold";
  font-size: 14px;
  color: #34898f;
`;

export const TextInput = styled.View`
  justify-content: space-between;
  height: 80px;
  width: 100%;
  margin-top: 21px;
`;
import styled from "styled-components";
import RNPickerSelect from 'react-native-picker-select';

export const DropdownContainer = styled.View`
    border: 2px solid #60BFC5;
    border-radius: 5px;
`;

export const OptionPicker = styled(RNPickerSelect).attrs({
    placeholderTextColor: "#34898f"
})`
    font-family: 'Quicksand_500Medium';
`;

// export const TextLabel = styled.View`
    
// `;
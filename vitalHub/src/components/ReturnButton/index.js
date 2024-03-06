import { AntDesign } from '@expo/vector-icons';
import { ReturnButtonContainer } from './Style';

export const ReturnButton = ({ iconName = "", onPress }) => {
    return (
        <ReturnButtonContainer onPress={onPress}>
            <AntDesign name={iconName} size={24} color="#34898F" />
        </ReturnButtonContainer>
    );
}
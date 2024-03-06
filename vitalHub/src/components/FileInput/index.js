import { MaterialCommunityIcons } from '@expo/vector-icons';
import { PerfilEmail } from "../Title/Style";
import { FileContent, FileInputContainer } from './Style';

export const FileInput = () => {
    return (
        <FileInputContainer>
            <FileContent>
                <MaterialCommunityIcons name="file-alert-outline" size={24} color="#4E4B59" />

                <PerfilEmail>Nenhuma foto informada</PerfilEmail>
            </FileContent>
        </FileInputContainer>
    );
}
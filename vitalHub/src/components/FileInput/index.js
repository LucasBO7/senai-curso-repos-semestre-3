import { MaterialCommunityIcons } from '@expo/vector-icons';
import { PerfilEmail } from "../Title/Style";
import { FileContent, FileInputContainer } from './Style';
import { Image } from 'react-native';

export const FileInput = ({ photoUri }) => {
    return (
        <FileInputContainer>
            <Image source={{ uri: photoUri }} />
            {/* <Image style={{ width: '100%', height: 500, borderRadius: 15 }} source={{ uri: photoUri }} /> */}
            {/* {
                photoUri != null ? (
                    <Image source={photoUri} />
                ) :
                    (
                        <FileContent>
                            <MaterialCommunityIcons name="file-alert-outline" size={24} color="#4E4B59" />
q
                            <PerfilEmail>Nenhuma foto informada</PerfilEmail>
                        </FileContent>
                    )
            } */}
        </FileInputContainer>
    );
}
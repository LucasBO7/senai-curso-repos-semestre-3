import { Text } from "react-native";
import { FileContent, FileInputContainer, ImageRectangle } from "./Style";
import { PerfilEmail } from "../Title/Style";
import { Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const FileInput = ({ saveCapturedPhotoUri }) => {
  console.log("Arquivo: " + saveCapturedPhotoUri);
  return (
    <FileInputContainer>
      {saveCapturedPhotoUri != null ? (
        <Image style={{ width: '100%', height: 60 }} source={{ uri: saveCapturedPhotoUri }} />
      ) : (
        <FileContent>
          <MaterialCommunityIcons
            name="file-alert-outline"
            size={24}
            color="#4E4B59"
          />

          <PerfilEmail>Nenhuma foto informada</PerfilEmail>
        </FileContent>
      )}
    </FileInputContainer>
  );
};

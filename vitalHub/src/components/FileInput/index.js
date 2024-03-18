import { Text } from "react-native";
import { FileContent, FileInputContainer, ImageRectangle } from "./Style";
import { PerfilEmail } from "../Title/Style";
import { Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const FileInput = ({ photoUri }) => {
  console.log("Arquivo: " + photoUri);
  return (
    <FileInputContainer>
      {/* <ImageRectangle
        source={{ uri: photoUri }}
        style={{ width: "100%", height: 500, borderRadius: 15 }}
      /> */}

      {photoUri != null ? (
        <Image source={photoUri} />
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
      <Text>{photoUri}</Text>
      {/* <ImageRectangle source={require(photoUri)} /> */}
      {/* <Image source={{ uri: photoUri }} /> */}
      {/* <Image
        src={{ uri: photoUri }}
        style={{ width: 30, height: 30, borderRadius: 15 }}
      /> */}
      {/* <Image style={{ width: '100%', height: 500, borderRadius: 15 }} source={{ uri: photoUri }} /> */}
      {/* {
                photoUri != null ? (
                    <Image source={photoUri} />
                ) :
                    (
                        <FileContent>
                            <MaterialCommunityIcons name="file-alert-outline" size={24} color="#4E4B59" />

                            <PerfilEmail>Nenhuma foto informada</PerfilEmail>
                        </FileContent>
                    )
            } */}
    </FileInputContainer>
  );
};

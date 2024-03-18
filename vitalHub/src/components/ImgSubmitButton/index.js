import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  ButtonCancel,
  ButtonSubmit,
  ContainerButtons,
  TextBtt,
  TextBttCancel,
} from "./Style";

export const ImgSubmitButton = ({ changeCameraScreenVisibility }) => {
  return (
    <ContainerButtons>
      <ButtonSubmit
        onPress={() => {
          changeCameraScreenVisibility(true);
        }}
      >
        <MaterialCommunityIcons name="camera-plus" size={24} color="white" />
        <TextBtt>Exames médicos</TextBtt>
      </ButtonSubmit>
      <ButtonCancel>
        <TextBttCancel>Cancelar</TextBttCancel>
      </ButtonCancel>
    </ContainerButtons>
  );
};

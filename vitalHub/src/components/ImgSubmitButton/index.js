import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  ButtonCancel,
  ButtonSubmit,
  ContainerButtons,
  TextBtt,
  TextBttCancel,
} from "./Style";


export const ImgSubmitButton = ({ navigation }) => {
  return (
    <ContainerButtons>
      <ButtonSubmit onPress={() => { navigation.navigate("Camera") }}>
        <MaterialCommunityIcons name="camera-plus" size={24} color="white" />
        <TextBtt>Exames médicos</TextBtt>
      </ButtonSubmit>
      <ButtonCancel>
        <TextBttCancel>Cancelar</TextBttCancel>
      </ButtonCancel>

      {/* <Modal animationType='slide' transparent={false} visible={openModel}>
        <Camera
          ref={cameraRef}
          ratio="16:9"
          type={tipoCamera}
          flashMode={flashLight}
        >
          <Image style={{ width: '100%', height: 500, borderRadius: 15 }} source={{ uri: photo }} />
        </Camera>
      </Modal> */}
    </ContainerButtons>
  );
};

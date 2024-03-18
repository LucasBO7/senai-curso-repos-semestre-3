//#region  React components
import { useEffect, useRef, useState } from "react";
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
//#endregion

//#region  Camera
import { Camera, CameraType, FlashMode } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
//#endregion

import { FontAwesome } from "@expo/vector-icons";
import { Button, ButtonTitle } from "../../components/Button/Style";
import { LinkSecondary } from "../../components/Link/Style";

export const CameraScreen = ({
  navigation,
  visible,
  setSaveCapturedPhotoUri,
  setIsCameraScreenVisible,
}) => {
  const cameraRef = useRef(null);
  const [openModel, setOpenModal] = useState(false);
  const [tipoCamera, setTipoCamera] = useState(CameraType.front);
  const [photo, setPhoto] = useState(null);

  const [flashLight, setFlashLight] = useState(Camera.Constants.FlashMode.off);

  useEffect(() => {
    // Permissões de acesso de funções do dispositivo
    (async () => {
      // Câmera
      const { status: cameraStatus } =
        await Camera.requestCameraPermissionsAsync();

      // Galeria
      const { status: mediaStatus } =
        await MediaLibrary.requestPermissionsAsync();
    })();
  }, []);

  // Função de tirar foto
  async function capturePhoto() {
    // Se existir a referência da foto, pegar dados
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      setPhoto(photo.uri); // salva a foto

      console.log(photo.uri);

      setOpenModal(true); // abre modal com foto
    }
  }

  async function getImage() {
    await setSaveCapturedPhotoUri(photo);
    clear()
  }

  function clear() {
    setIsCameraScreenVisible(false)
  }

  async function clearPhoto() {
    // deletePhoto();

    setPhoto(null);
    setOpenModal(false);
  }

  async function deletePhoto() {
    if (photo != null) {
      const isDeleted = await MediaLibrary.deleteAssetsAsync(photo)
        .then(() => {
          alert("Foto deletada com sucesso");
        })
        .catch((error) => {
          alert("Não foi possível processar a foto");
        });

      if (isDeleted == true) {
        alert("siuu");
      }
    }
  }

  function onFlashClick() {
    setFlashLight(
      flashLight == Camera.Constants.FlashMode.off
        ? Camera.Constants.FlashMode.on
        : Camera.Constants.FlashMode.off
    );
    alert(flashLight);
  }

  return (
    // <View style={styles.container}>
    <Modal visible={visible} style={styles.container}>
      <Camera
        ref={cameraRef}
        style={styles.camera}
        ratio="16:9"
        type={tipoCamera}
        flashMode={FlashMode.on}
      >
        <View style={styles.viewFlip}>
          <TouchableOpacity
            style={styles.btnFlip}
            onPress={() => {
              setTipoCamera(
                tipoCamera === CameraType.back
                  ? CameraType.front
                  : CameraType.back
              );
            }}
          >
            <Text style={styles.txtFlip}>Trocar</Text>
          </TouchableOpacity>

          <Modal animationType="slide" transparent={false} visible={openModel}>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                margin: 20,
              }}
            >
              <View style={{ margin: 10, flexDirection: "row", gap: 20 }}>
                <Button btnWidth='90%' onPress={() => getImage() && clearPhoto()}>
                  <ButtonTitle>Confirmar</ButtonTitle>
                </Button>

                <LinkSecondary onPress={() => clearPhoto()}>Cancelar</LinkSecondary>
              </View>

              <Image
                style={{ width: "100%", height: 500, borderRadius: 15 }}
                source={{ uri: photo }}
              />
            </View>
          </Modal>
        </View>
      </Camera>

      <TouchableOpacity
        style={styles.btnCapture}
        onPress={() => capturePhoto()}
      >
        <FontAwesome name="camera" size={23} color="white" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btnCapture}
        onPress={() => onFlashClick()}
      >
        <FontAwesome name="flash" size={23} color="white" />
      </TouchableOpacity>
    </Modal>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  camera: {
    flex: 1,
    height: "100%",
    width: "80%",
  },
  viewFlip: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  btnFlip: {
    padding: 20,
  },
  txtFlip: {
    fontSize: 20,
    color: "#fff",
    marginBottom: 20,
  },
  btnCapture: {
    padding: 20,
    margin: 20,
    borderRadius: 10,
    backgroundColor: "#121212",

    justifyContent: "center",
    alignItems: "center",
  },
  btnClear: {
    padding: 20,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  btnUpload: {
    padding: 20,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
});

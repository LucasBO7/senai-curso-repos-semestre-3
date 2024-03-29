//#region  React components
import { useEffect, useRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
//#endregion

//#region  Camera
import { Camera, CameraType, FlashMode } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
//#endregion

import { FontAwesome } from '@expo/vector-icons';



export default function App() {
  const cameraRef = useRef(null);
  const [openModel, setOpenModal] = useState(false);
  const [tipoCamera, setTipoCamera] = useState(CameraType.front);
  const [photo, setPhoto] = useState(null);
  const [flashLight, setFlashLight] = useState(Camera.Constants.FlashMode.off);

  useEffect(() => {
    // Permissões de acesso de funções do dispositivo
    (async () => {
      // Câmera
      const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync();

      // 
      const { status: mediaStatus } = await MediaLibrary.requestPermissionsAsync();
    })();
  }, [])

  // Função de tirar foto
  async function capturePhoto() {
    // Se existir a referência da foto, pegar dados
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      await setPhoto(photo.uri); // salva a foto

      await setOpenModal(true); // abre modal com foto

      await console.log(photo); // debug
    }
  }


  async function clearPhoto() {
    if (photo != null) {
      await MediaLibrary.deleteAssetsAsync(photo)
        .then(
          () => {
            alert('Foto deletada com sucesso');
          })
        .catch
        (error => {
          alert('Não foi possível processar a foto')
        });
    }

    setPhoto(null);
    setOpenModal(false);
  }

  async function deletePhoto() {
    if (photo != null) {
      await MediaLibrary.deleteAssetsAsync()
        .then(
          () => {
            alert('Foto deletada com sucesso')
          })
        .catch
        (error => {
          alert('Não foi possível processar a foto')
        });
    }
  }

  async function uploadPhoto() {
    await MediaLibrary.createAssetAsync(photo) // Salva a foto no dispositivo
      .then(
        () => {
          alert('Foto salva com sucesso')
        })
      .catch
      (error => {
        alert('Não foi possível processar a foto')
      });
  }

  function onFlashClick() {
    flashLight ? setFlashLight(FlashMode.off) : setFlashLight(FlashMode.on);
  }


  return (
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
        style={styles.camera}
        ratio="16:9"
        type={tipoCamera}
        flashMode={flashLight}
      >
        <View style={styles.viewFlip}>
          <TouchableOpacity style={styles.btnFlip} onPress={() => {
            setTipoCamera(tipoCamera === CameraType.back ? CameraType.front : CameraType.back)
          }}>
            <Text style={styles.txtFlip}>Trocar</Text>
          </TouchableOpacity>

          <Modal animationType='slide' transparent={false} visible={openModel}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 20 }}>

              <View style={{ margin: 10, flexDirection: 'row', gap: 20 }}>

                <TouchableOpacity style={styles.btnClear} onPress={() => clearPhoto()}>
                  <FontAwesome name='trash' size={23} color='gold' />
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnUpload} onPress={() => uploadPhoto()}>
                  <FontAwesome name='upload' size={23} color='gold' />
                </TouchableOpacity>

              </View>

              <Image style={{ width: '100%', height: 500, borderRadius: 15 }} source={{ uri: photo }} />
            </View>
          </Modal>

        </View>
      </Camera>


      <TouchableOpacity style={styles.btnCapture} onPress={() => capturePhoto()}>
        <FontAwesome name='camera' size={23} color='gold' />
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnCapture} onPress={() => onFlashClick()}>
        <FontAwesome name='flash' size={23} color='gold' />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  viewFlip: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  btnFlip: {
    padding: 20
  },
  txtFlip: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 20
  },
  btnCapture: {
    padding: 20,
    margin: 20,
    borderRadius: 10,
    backgroundColor: '#121212',

    justifyContent: 'center',
    alignItems: 'center'
  },
  btnClear: {
    padding: 20,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnUpload: {
    padding: 20,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

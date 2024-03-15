import { ScrollView } from "react-native";
import {
  Container,
  PerfilInfoContainer,
} from "../../components/Container/Style";
import { PerfilImage } from "../../components/PerfilImage/Style";
import { PerfilEmail, PerfilName } from "../../components/Title/Style";
import { LinkSecondary } from "../../components/Link/Style";
import { PerfilInput } from "../../components/PerfilInput";
import { ImgSubmitButton } from "../../components/ImgSubmitButton";
import { Input } from "../../components/PerfilInput/Style";
import { FileInput } from "../../components/FileInput";

import { useEffect, useRef, useState } from 'react';
import { Camera } from "expo-camera";
import { CameraScreen } from "../Camera";

export const VisualizarPrescricao = ({ navigation }) => {
  const [capturedPhotoUri, setCapturedPhotoUri] = useState();
  const [isCameraScreenVisible, setIsCameraScreenVisible] = useState(false);

  const saveCapturedPhotoUri = ({ photoUri }) => {
    setCapturedPhotoUri(photoUri);
  }

  const changeCameraScreenVisibility = () => {
    setIsCameraScreenVisible(isCameraScreenVisible ? setIsCameraScreenVisible(false) : setIsCameraScreenVisible(true));
  }

  return (
    <>
      {isCameraScreenVisible ?
        (
          <CameraScreen navigation={navigation} saveCapturedPhotoUri={saveCapturedPhotoUri} />
        ) : (
          <ScrollView>
            <Container>
              <PerfilImage source={require("../../assets/images/perfil-img.png")} />
              <PerfilInfoContainer>
                <PerfilName>Dr. Claudio</PerfilName>
                <PerfilEmail>Cliníco geral</PerfilEmail>
                <PerfilEmail>CRM-15286</PerfilEmail>
              </PerfilInfoContainer>
              <PerfilInput
                inputLabel="Descrição da consulta"
                inputPlaceholder="Descreva a consulta..."
                containerWidth="90%"
              />
              <PerfilInput
                inputLabel="Diagnóstico do paciente"
                inputPlaceholder="Diagnóstico do paciente..."
                containerWidth="90%"
              />
              <PerfilInput
                inputLabel="Prescrição médica"
                inputPlaceholder="Prescrição médica..."
                containerWidth="90%"
              />
              <FileInput photoUri={capturedPhotoUri} />
              
              <ImgSubmitButton
                changeCameraScreenVisibility={changeCameraScreenVisibility}
              />

              <Input
                placeholder="Resultado do exame"
                value="Resultado do exame de sangue: tudo normal"
                width="90%"
              />

              <LinkSecondary onPress={() => { navigation.replace("ConsultasPaciente") }}>Voltar</LinkSecondary>
            </Container>
          </ScrollView>
        )
      }
    </>
  );
};

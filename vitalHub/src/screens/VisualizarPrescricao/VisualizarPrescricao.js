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

export const VisualizarPrescricao = ({ cancelModalFunction }) => {
  return (
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
        <FileInput />
        {/* <PerfilInput
          inputLabel="Exames médicos"
          inputPlaceholder="Prescrição médica..."
          containerWidth="90%"
          inputType={"file"}
        /> */}
        <ImgSubmitButton />

        <Input
          placeholder="Resultado do exame"
          value="Resultado do exame de sangue: tudo normal"
          width="90%"
        />

        <LinkSecondary onPress={cancelModalFunction}>Voltar</LinkSecondary>
      </Container>
    </ScrollView>
  );
};

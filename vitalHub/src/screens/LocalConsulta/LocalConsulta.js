import {
  ClinicInfosContainer,
  Container,
  PerfilCityInputsContainer,
} from "../../components/Container/Style";
import { LocalMap } from "../../components/Image/Style";
import { LinkSecondary } from "../../components/Link/Style";
import { PerfilInput } from "../../components/PerfilInput";
import { LocalCardSubtitle } from "../../components/Subtitle/Style";
import { ClinicLocalInfosTitle } from "../../components/Title/Style";

import MapView, { Marker } from "react-native-maps";

export const LocalConsulta = ({ navigation }) => {
  return (
    <Container>
      <LocalMap source={require("../../assets/images/map-local.png")} />

      <MapView
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onRegionChange={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
      </MapView>

      <ClinicInfosContainer>
        <ClinicLocalInfosTitle>Clínica Natureh</ClinicLocalInfosTitle>
        <LocalCardSubtitle>São Paulo, SP</LocalCardSubtitle>

        <PerfilInput
          inputLabel="Endereço"
          inputPlaceholder="Rua Exemplo, 000"
          containerWidth="90%"
        />
        <PerfilCityInputsContainer>
          <PerfilInput
            inputLabel="Número"
            inputPlaceholder="000"
            containerWidth="40%"
            inputType={"numeric"}
          />
          <PerfilInput
            inputLabel="Bairro"
            inputPlaceholder="Bairro-Estado"
            containerWidth="40%"
          />
        </PerfilCityInputsContainer>
        <LinkSecondary onPress={() => navigation.navigate("ConsultasPaciente")}>Voltar</LinkSecondary>
      </ClinicInfosContainer>
    </Container >
  );
};

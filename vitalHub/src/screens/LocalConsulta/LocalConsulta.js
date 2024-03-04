import {
  ClinicInfosContainer,
  Container,
  PerfilCityInputsContainer,
} from "../../components/Container/Style";
import { LocalMap } from "../../components/Image/Style";
import { PerfilInput } from "../../components/PerfilInput";
import { LocalCardSubtitle } from "../../components/Subtitle/Style";
import { ClinicLocalInfosTitle } from "../../components/Title/Style";

import MapView, { Marker } from "react-native-maps";

export const LocalConsulta = () => {
  return (
    <Container>
      <LocalMap source={require("../../assets/images/map-local.png")} />

      {/* <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      /> */}

      <MapView
        region={
          {
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
        {/* <Marker
          key={index}
          coordinate={marker.latlng}
          title={marker.title}
          description={marker.description}
        /> */}
      </MapView>

      <ClinicInfosContainer>
        <ClinicLocalInfosTitle>Clínica Natureh</ClinicLocalInfosTitle>
        <LocalCardSubtitle>São Paulo, SP</LocalCardSubtitle>

        <PerfilInput
          inputLabel="Endereço"
          inputPlaceholder="Rua Exemplo, 000"
          containerWidth="90%"
          inputType={"numeric"}
        />
        <PerfilCityInputsContainer>
          <PerfilInput
            inputLabel="Número"
            inputPlaceholder="000"
            containerWidth="40%"
          />
          <PerfilInput
            inputLabel="Bairro"
            inputPlaceholder="Bairro-Estado"
            containerWidth="40%"
          />
        </PerfilCityInputsContainer>
      </ClinicInfosContainer>
    </Container >
  );
};

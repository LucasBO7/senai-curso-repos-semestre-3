import {
  ClinicInfosContainer,
  Container,
  PerfilCityInputsContainer,
} from "../../components/Container/Style";
import { LocalMap } from "../../components/Image/Style";
import { LinkSecondary } from "../../components/Link/Style";
import { Map } from "../../components/Map/Map";
import { PerfilInput } from "../../components/PerfilInput";
import { LocalCardSubtitle } from "../../components/Subtitle/Style";
import { ClinicLocalInfosTitle } from "../../components/Title/Style";

export const LocalConsulta = ({ navigation }) => {
  return (
    <Container>
      <ClinicInfosContainer>
        <Map />

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

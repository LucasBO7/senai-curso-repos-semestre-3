import React, { useState } from "react";
import {
  ConsultListContainer,
  ConsultasMedicoContainer,
  PatientInfosBottom,
} from "../../components/Container/Style";
import { Header } from "../../components/Header/index";
import {
  Container,
  PatientCategoriesContainer,
  PatientInfosContainer,
  ConsultStatusContainer,
} from "../../components/Container/Style";
import { ConsultStatusButton } from "../../components/ConsultStatusButton/index";
import {
  PatientPerfilEllipse,
  PatientPerfilImg,
} from "../../components/Image/Style";
import { PatientName } from "../../components/Title/Style";
import { PatientAge, QueryCategory } from "../../components/Subtitle/Style";
import { ConsultationTime } from "../../components/ConsultationTime";
import { CancelLink, LinkThird } from "../../components/Link/Style";
import CalendarList from "../../components/Callendar";
import { Footer } from "../../components/Footer";
import { ScrollView } from "react-native";
import { ModalConfirmation } from "../../components/ModalConfirmation";
import { ListComponent } from "../../components/List/List";
import { ConsultCard } from "../../components/ConsultCard";
import { ModalRelatory } from "../../components/ModalRelatory";

const Consultas = [
  { id: 1, nome: "Carlos", situacao: "Pendentes" },
  { id: 2, nome: "Carlos", situacao: "Realizadas" },
  { id: 3, nome: "Carlos", situacao: "Canceladas" },
  { id: 4, nome: "Carlos", situacao: "Realizadas" },
  { id: 5, nome: "Carlos", situacao: "Canceladas" },
];

export const ConsultasMedico = ({ navigation }) => {
  const [statusLista, setStatusLista] = useState("Pendentes");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isCancelModalVisible, setIsCancelModalVisible] = useState(false);
  const [activatedPage, setActivatedPage] = useState("agendadas");

  const [patients, setPatients] = useState({
    id: 0,
    name: "Vinicius",
    age: 21,
    perfilImg: "...",
  });

  const toggleModal = () => {
    isModalVisible ? setIsModalVisible(false) : setIsModalVisible(true);
  };
  const toggleCancelModal = () => {
    isCancelModalVisible
      ? setIsCancelModalVisible(false)
      : setIsCancelModalVisible(true);
  };

  const activatePageFunction = (activatedPageName) => {
    setActivatedPage(activatedPageName);
  };

  return (
    <Container>
      <Header
        userImg={require("../../assets/images/doctorImg.png")}
        userName={"Dr. Claudio"}
        navigation={navigation}
      />

      {/* Content Container */}
      <ConsultasMedicoContainer>
        <CalendarList />

        {/* Filter Buttons */}
        <ConsultStatusContainer>
          <ConsultStatusButton
            btnText="Agendadas"
            isBtnActivated={statusLista === "Pendentes"}
            onPress={() => setStatusLista("Pendentes")}
          />
          <ConsultStatusButton
            btnText="Realizadas"
            isBtnActivated={statusLista === "Realizadas"}
            onPress={() => setStatusLista("Realizadas")}
          />
          <ConsultStatusButton
            btnText="Canceladas"
            isBtnActivated={statusLista === "Canceladas"}
            onPress={() => setStatusLista("Canceladas")}
          />
        </ConsultStatusContainer>

        {/* Consults List */}
        <ConsultListContainer>
          <ListComponent
            data={Consultas}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              if (statusLista == item.situacao) {
                return (
                  <ConsultCard
                    situacao={item.situacao}
                    patient={patients}
                    openScreen={"medic"}
                    // Passar os set das constantes e chamar função no componente
                    onCancelPress={toggleCancelModal}
                    onAppointmentPress={toggleModal}
                  />
                );
              }
            }}
            showsHorizontalScrollIndicator={false}
          />
        </ConsultListContainer>
      </ConsultasMedicoContainer>

      {/* <Footer
        activatedPage={activatedPage}
        activatePageFunction={activatePageFunction}
      /> */}

      <ModalConfirmation
        isModalVisible={isCancelModalVisible}
        cancelModalFunction={toggleCancelModal}
      />

      <ModalRelatory
        isModalVisible={isModalVisible}
        cancelModalFunction={toggleModal}
        imgSource={require("../../assets/images/userPerfilImg.png")}
        patientName={"Niccole Sarga"}
        patientAge={"22 anos"}
        patientEmail={"niccole.sarga@gmail.com"}
        navigation={navigation}
      />
    </Container>
  );
};

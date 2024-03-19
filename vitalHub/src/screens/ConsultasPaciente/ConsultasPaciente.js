import React, { useState } from "react";
import {
  ConsultListContainer,
  ConsultasMedicoContainer,
} from "../../components/Container/Style";
import { Header } from "../../components/Header/index";
import {
  Container,
  ConsultStatusContainer,
} from "../../components/Container/Style";
import { ConsultStatusButton } from "../../components/ConsultStatusButton/index";
import CalendarList from "../../components/Callendar";
import { Footer } from "../../components/Footer";
import { ModalConfirmation } from "../../components/ModalConfirmation";
import { ListComponent } from "../../components/List/List";
import { ConsultCard } from "../../components/ConsultCard";
import { ModalRelatory } from "../../components/ModalRelatory";
import { ScheduleConsultButton } from "../../components/ScheduleConsultButton";
import { ModalScheduleConsult } from "../../components/ModalScheduleConsult";
import { ModalConsultInfos } from "../../components/ModalConsultInfos";

// Importar recursos do expo notifications
import * as Notifications from "expo-notifications";

// Solicita a permissão as notificações ao iniciar o app
Notifications.requestPermissionsAsync();

// Define como as notificações devem ser tratadas quando recebidas
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    // mostrar o alerta quando a notificação for recebida
    shouldShowAlert: true,

    // reproduz som ao receber notificação
    shouldPlaySound: true,

    // mostrar número de notificações no ícone do app
    shouldSetBadge: false
  })
});

const Consultas = [
  { id: 1, nome: "Carlos", situacao: "Pendentes" },
  { id: 2, nome: "Carlos", situacao: "Realizadas" },
  { id: 3, nome: "Carlos", situacao: "Canceladas" },
  { id: 4, nome: "Carlos", situacao: "Realizadas" },
  { id: 5, nome: "Carlos", situacao: "Canceladas" },
];

export const ConsultasPaciente = ({ navigation }) => {
  const [statusLista, setStatusLista] = useState("Pendentes");

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isCancelModalVisible, setIsCancelModalVisible] = useState(false);
  const [isScheduleConsultModalVisible, setIsScheduleConsultModalVisible] =
    useState(false);
  const [activatedPage, setActivatedPage] = useState("agendadas");
  const [selectedButton, setSelectedButton] = useState("");
  const [viewPrescription, setViewPrescription] = useState();

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

  const toggleScheduleConsultModal = () => {
    isScheduleConsultModalVisible
      ? setIsScheduleConsultModalVisible(false)
      : setIsScheduleConsultModalVisible(true);
  };

  const activatePageFunction = (activatedPageName) => {
    setActivatedPage(activatedPageName);
  };

  return (
    <Container>
      <Header
        userImg={require("../../assets/images/userPerfilImg.png")}
        userName={"Cláudio José"}
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
                    navigation={navigation}
                    situacao={item.situacao}
                    patient={patients}
                    openScreen="patient"
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

        <ScheduleConsultButton onPressBtn={toggleScheduleConsultModal} />
      </ConsultasMedicoContainer>

      <ModalScheduleConsult
        navigation={navigation}
        isModalVisible={isScheduleConsultModalVisible}
        setIsModalVisible={setIsScheduleConsultModalVisible}
        selectedButton={selectedButton}
        setSelectedButton={setSelectedButton}
      />

      <ModalConfirmation
        isModalVisible={isCancelModalVisible}
        cancelModalFunction={toggleCancelModal}
      />

      <ModalConsultInfos
        navigation={navigation}
        isModalVisible={isModalVisible}
        cancelModalFunction={toggleModal}
        imgSource={require("../../assets/images/doctorImg.png")}
        doctorName={"Dr. Claudio"}
        doctorEspeciality={"Cliníco geral"}
        doctorCRM={"CRM-15286"}
      />
    </Container>
  );
};

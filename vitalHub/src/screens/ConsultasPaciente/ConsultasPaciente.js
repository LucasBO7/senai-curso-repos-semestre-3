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
import { ModalPatientRelatory } from "../../components/ModalPatientRelatory";
import { ScheduleConsultButton, ScheduleConsultButtonIcon } from "../../components/Button/Style";

const Consultas = [
  { id: 1, nome: "Carlos", situacao: "Pendentes" },
  { id: 2, nome: "Carlos", situacao: "Realizadas" },
  { id: 3, nome: "Carlos", situacao: "Canceladas" },
  { id: 4, nome: "Carlos", situacao: "Realizadas" },
  { id: 5, nome: "Carlos", situacao: "Canceladas" },
];

export const ConsultasPaciente = () => {
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
      <Header />

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
                    // Passar os set das constantes e chamar função no componente
                    onCancelPress={toggleCancelModal}
                    onAppointmentPress={toggleModal}
                  />
                );
              }
            }}
            showsHorizontalScrollIndicator={false}
          />

          {/* <ScrollView scrollEnabled nestedScrollEnabled>
          </ScrollView> */}
        </ConsultListContainer>

        <ScheduleConsultButton>
          <ScheduleConsultButtonIcon />
        </ScheduleConsultButton>
      </ConsultasMedicoContainer>

      <Footer
        activatedPage={activatedPage}
        activatePageFunction={activatePageFunction}
      />

      <ModalConfirmation
        isModalVisible={isCancelModalVisible}
        cancelModalFunction={toggleCancelModal}
      />

      <ModalPatientRelatory
        isModalVisible={isModalVisible}
        cancelModalFunction={toggleModal}
        imgSource={"src/assets/images/userPerfilImg"}
        patientName={"Niccole Sarga"}
        patientAge={"22 anos"}
        patientEmail={"niccole.sarga@gmail.com"}
      />
    </Container>
  );
};

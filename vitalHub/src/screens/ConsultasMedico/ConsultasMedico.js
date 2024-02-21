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

export const ConsultasMedico = () => {
  const Consultas = [
    { id: 1, nome: "Carlos", situacao: "pendente" },
    { id: 2, nome: "Carlos", situacao: "Realizadas" },
    { id: 3, nome: "Carlos", situacao: "Canceladas" },
    { id: 4, nome: "Carlos", situacao: "Realizadas" },
    { id: 5, nome: "Carlos", situacao: "Canceladas" },
  ];

  const [statusLista, setStatusLista] = useState("pendente");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [activatedPage, setActivatedPage] = useState("agendadas");

  const toggleModal = () => {
    setIsModalVisible(false);
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
            isBtnActivated={statusLista === "pendente"}
            onPress={() => setStatusLista("pendente")}
            btnText="Agendadas"
          />
          <ConsultStatusButton
            isBtnActivated={statusLista === "realizado"}
            onPress={() => setStatusLista("realizado")}
            btnText="Realizadas"
          />
          <ConsultStatusButton
            isBtnActivated={statusLista === "cancelado"}
            onPress={() => setStatusLista("cancelado")}
            btnText="Canceladas"
          />
        </ConsultStatusContainer>

        {/* Consults List */}
        <ConsultListContainer>
          <ScrollView scrollEnabled nestedScrollEnabled>
            <ListComponent
              data={Consultas}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) =>
                statusLista == item.situacao && (
                  <ConsultCard situation={item.situacao} />
                )
              }
            />
            <ConsultCard>
              {/* Imagem */}
              <PatientPerfilImg
                source={require("../../assets/images/userPerfilImg.png")}
              />

              {/* Informações do Paciente */}
              <PatientInfosContainer>
                {/* Nome do paciente */}
                <PatientName>Niccole Sarga</PatientName>

                <PatientCategoriesContainer>
                  <PatientAge>22 anos</PatientAge>
                  <PatientPerfilEllipse
                    source={require("../../assets/images/ellipse.png")}
                  />
                  <QueryCategory>Rotina</QueryCategory>
                </PatientCategoriesContainer>

                {/* Região inferior (AZUL) */}
                <PatientInfosBottom>
                  <ConsultationTime
                    timeText="14:00"
                    timeContainerColor="#F1F0F5"
                    timeContentColor="#4E4B59"
                  />
                  <LinkThird textColor="#344F8F">Ver prontuário</LinkThird>
                </PatientInfosBottom>
              </PatientInfosContainer>
            </ConsultCard>

            <ConsultCard>
              <PatientPerfilImg
                source={require("../../assets/images/userImg2.png")}
              />

              <PatientInfosContainer>
                {/* Região superior (AMARELO) */}
                <PatientName>Richard Kosta</PatientName>

                <PatientCategoriesContainer>
                  <PatientAge>28 anos</PatientAge>
                  <PatientPerfilEllipse
                    source={require("../../assets/images/ellipse.png")}
                  />
                  <QueryCategory>Urgência</QueryCategory>
                </PatientCategoriesContainer>

                {/* Região inferior (AZUL) */}
                <PatientInfosBottom>
                  <ConsultationTime
                    timeText="14:00"
                    timeContainerColor="#e8fcfd"
                    timeContentColor="#49b3ba"
                  />
                  <LinkThird
                    textColor="#c81d25"
                    onPress={() => {
                      setIsModalVisible(true);
                    }}
                  >
                    Cancelar
                  </LinkThird>
                </PatientInfosBottom>
              </PatientInfosContainer>
            </ConsultCard>

            <ConsultCard>
              <PatientPerfilImg
                source={require("../../assets/images/userPerfilImg3.png")}
              />

              <PatientInfosContainer>
                {/* Região superior (AMARELO) */}
                <PatientName>Robbert Charlie</PatientName>

                <PatientCategoriesContainer>
                  <PatientAge>62 anos</PatientAge>
                  <PatientPerfilEllipse
                    source={require("../../assets/images/ellipse.png")}
                  />
                  <QueryCategory>Consulta</QueryCategory>
                </PatientCategoriesContainer>

                {/* Região inferior (AZUL) */}
                <PatientInfosBottom>
                  <ConsultationTime
                    timeText="15:00"
                    timeContainerColor="#F1F0F5"
                    timeContentColor="#4E4B59"
                  />
                </PatientInfosBottom>
              </PatientInfosContainer>
            </ConsultCard>

            <ConsultCard>
              <PatientPerfilImg
                source={require("../../assets/images/userImg2.png")}
              />

              <PatientInfosContainer>
                {/* Região superior (AMARELO) */}
                <PatientName>Richard Kosta</PatientName>

                <PatientCategoriesContainer>
                  <PatientAge>28 anos</PatientAge>
                  <PatientPerfilEllipse
                    source={require("../../assets/images/ellipse.png")}
                  />
                  <QueryCategory>Urgência</QueryCategory>
                </PatientCategoriesContainer>

                {/* Região inferior (AZUL) */}
                <PatientInfosBottom>
                  <ConsultationTime
                    timeText="14:00"
                    timeContainerColor="#e8fcfd"
                    timeContentColor="#49b3ba"
                  />
                  <LinkThird textColor="#344F8F">Ver prontuário</LinkThird>
                </PatientInfosBottom>
              </PatientInfosContainer>
            </ConsultCard>
          </ScrollView>
        </ConsultListContainer>
      </ConsultasMedicoContainer>

      <Footer
        activatedPage={activatedPage}
        activatePageFunction={activatePageFunction}
      />

      <ModalConfirmation
        isModalVisible={isModalVisible}
        cancelModalFunction={toggleModal}
      />
    </Container>
  );
};

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
  QueryContainer,
  QueryStatusContainer,
} from "../../components/Container/Style";
import { QueryStatusButton } from "../../components/QueryStatusButton/index";
import {
  PatientPerfilEllipse,
  PatientPerfilImg,
} from "../../components/Image/Style";
import { MonthYearTitle, PatientName } from "../../components/Title/Style";
import { PatientAge, QueryCategory } from "../../components/Subtitle/Style";
import { ConsultationTime } from "../../components/ConsultationTime";
import { CancelLink, LinkThird } from "../../components/Link/Style";
import CalendarList from "../../components/Callendar";
import { Footer } from "../../components/Footer";
import { ScrollView } from "react-native";
import { ModalConfirmation } from "../../components/ModalConfirmation";

export default function ConsultasMedico() {
  const [statusLista, setStatusLista] = useState("pendente");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(false);
  };

  return (
    <Container>
      <Header />

      {/* Content Container */}
      <ConsultasMedicoContainer>
        {/* <MonthYearTitle>Novembro 2023</MonthYearTitle> */}
        <CalendarList />

        {/* Filter Buttons */}
        <QueryStatusContainer>
          <QueryStatusButton
            isBtnActivated={statusLista === "pendente"}
            onPress={() => setStatusLista("pendente")}
            btnText="Agendadas"
          />
          <QueryStatusButton
            isBtnActivated={statusLista === "realizado"}
            onPress={() => setStatusLista("realizado")}
            btnText="Realizadas"
          />
          <QueryStatusButton
            isBtnActivated={statusLista === "cancelado"}
            onPress={() => setStatusLista("cancelado")}
            btnText="Canceladas"
          />
        </QueryStatusContainer>

        {/* Consults List */}
        <ConsultListContainer>
          <ScrollView scrollEnabled nestedScrollEnabled>
            <QueryContainer>
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
                    timeContainerColor="#e8fcfd"
                    timeContentColor="#49b3ba"
                  />
                  <LinkThird textColor="#344F8F">Ver prontuário</LinkThird>
                </PatientInfosBottom>
              </PatientInfosContainer>
            </QueryContainer>

            <QueryContainer>
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
            </QueryContainer>

            <QueryContainer>
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
                    timeContainerColor="#e8fcfd"
                    timeContentColor="#49b3ba"
                  />
                </PatientInfosBottom>
              </PatientInfosContainer>
            </QueryContainer>

            <QueryContainer>
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
            </QueryContainer>
          </ScrollView>
        </ConsultListContainer>
      </ConsultasMedicoContainer>

      <Footer />
      <ModalConfirmation
        isModalVisible={isModalVisible}
        cancelModalFunction={toggleModal}
      />
    </Container>
  );
}

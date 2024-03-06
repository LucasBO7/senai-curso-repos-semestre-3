import React, { useState } from "react";
import { CardsList, Container } from "../../components/Container/Style";
import { TitleSecondary } from "../../components/Title/Style";
import { FlatList, SafeAreaView } from "react-native";
import { DoctorCard } from "../../components/DoctorCard";
import { Button, ButtonTitle } from "../../components/Button/Style";
import { LinkSecondary } from "../../components/Link/Style";

export const DoctorSelection = ({ navigation }) => {
  const doctors = [
    {
      id: 0,
      name: "Dra Alessandra",
      profession: "Demartologa, Esteticista",
      imgSource: require("../../../src/assets/images/doctor1.png"),
    },
    {
      id: 1,
      name: "Dr Kumushiro",
      profession: "Cirurgião, Cardiologista",
      imgSource: require("../../../src/assets/images/doctor2.png"),
    },
    {
      id: 2,
      name: "Dr Rodrigo Santos",
      profession: "Clínico, Pediatra",
      imgSource: require("../../../src/assets/images/doctor3.png"),
    },
    {
      id: 3,
      name: "Dr Kumushiro",
      profession: "Cirurgião, Cardiologista",
      imgSource: require("../../../src/assets/images/doctor2.png"),
    },
    {
      id: 4,
      name: "Dr Rodrigo Santos",
      profession: "Clínico, Pediatra",
      imgSource: require("../../../src/assets/images/doctor3.png"),
    },
  ];

  const [selectedCardId, setSelectedCardId] = useState();

  const handleCardSelected = (id) => {
    setSelectedCardId(id);
  };

  return (
    <Container>
      <TitleSecondary>Selecionar Médico</TitleSecondary>

      <SafeAreaView style={{ flex: 1 }}>
        <CardsList>
          <FlatList
            data={doctors}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <DoctorCard
                  doctor={item}
                  selectedCard={selectedCardId}
                  onCardSelected={handleCardSelected}
                />
              );
            }}
            showsHorizontalScrollIndicator={false}
          />
        </CardsList>
      </SafeAreaView>

      <Button onPress={() => navigation.navigate("ConsultDateSelection")} btnWidth="90%">
        <ButtonTitle>Continuar</ButtonTitle>
      </Button>

      <LinkSecondary>Cancelar</LinkSecondary>
    </Container>
  );
};

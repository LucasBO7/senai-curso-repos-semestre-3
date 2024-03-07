import React, { useState } from "react";
import { TitleSecondary } from "../../components/Title/Style";
import { CardsList, Container } from "../../components/Container/Style";
import { ClinicCard } from "../../components/ClinicCard";
import { FlatList, SafeAreaView, ScrollView } from "react-native";

import { Button, ButtonTitle } from "../../components/Button/Style";
import { LinkSecondary } from "../../components/Link/Style";

export const ClinicSelection = ({ navigation }) => {
  const clinics = [
    {
      id: 0,
      name: "Clínica Natureh",
      local: "São Paulo, SP",
      rating: 4.5,
      operatingDays: "Seg-Sex",
    },
    {
      id: 1,
      name: "Diamond Pró-Mulher",
      local: "São Paulo, SP",
      rating: 4.8,
      operatingDays: "Seg-Sex",
    },
    {
      id: 2,
      name: "Clinica Villa Lobos",
      local: "Taboão, SP",
      rating: 4.2,
      operatingDays: "Seg-Sab",
    },
    {
      id: 3,
      name: "Clínica Natureh",
      local: "São Paulo, SP",
      rating: 4.5,
      operatingDays: "Seg-Sex",
    },
    {
      id: 4,
      name: "Diamond Pró-Mulher",
      local: "São Paulo, SP",
      rating: 4.8,
      operatingDays: "Seg-Sex",
    },
    {
      id: 5,
      name: "Clinica Villa Lobos",
      local: "Taboão, SP",
      rating: 4.2,
      operatingDays: "Seg-Sab",
    },
  ];
  // const [isCardSelected, setIsCardSelected] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState();

  const handleSelectedCard = (id) => {
    setSelectedCardId(id);
    // selectedCardId == id ? setIsCardSelected(true) : setIsCardSelected(false);
  };

  return (
    <Container>
      <TitleSecondary>Selecionar clínica</TitleSecondary>

      <SafeAreaView style={{ flex: 1 }}>
        <CardsList>
          <FlatList
            data={clinics}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <ClinicCard
                  clinic={item}
                  selectedCardId={selectedCardId}
                  onCardPress={handleSelectedCard}
                />
              );
            }}
            showsHorizontalScrollIndicator={false}
          />
        </CardsList>
      </SafeAreaView>

      <Button onPress={() => navigation.navigate("DoctorSelection")} btnWidth="90%">
        <ButtonTitle>Continuar</ButtonTitle>
      </Button>

      <LinkSecondary onPress={() => navigation.navigate("ConsultasPaciente")}>Cancelar</LinkSecondary>
    </Container>
  );
};

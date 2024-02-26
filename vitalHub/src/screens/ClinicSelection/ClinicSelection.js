import React from 'react'
import { TitleSecondary } from '../../components/Title/Style';
import { CardsList, Container } from '../../components/Container/Style';
import { ClinicCard } from '../../components/ClinicCard';
import { FlatList } from "react-native";

export const ClinicSelection = () => {
    const clinics = [
        {
            id: 0,
            name: "Clínica Natureh",
            local: "São Paulo, SP",
            rating: 4.5,
            operatingDays: "Seg-Sex"
        },
        {
            id: 1,
            name: "Diamond Pró-Mulher",
            local: "São Paulo, SP",
            rating: 4.8,
            operatingDays: "Seg-Sex"
        },
        {
            id: 2,
            name: "Clinica Villa Lobos",
            local: "Taboão, SP",
            rating: 4.2,
            operatingDays: "Seg-Sab"
        }
    ];

    return (
        <Container>
            <TitleSecondary>Selecionar clínica</TitleSecondary>

            <CardsList>
                <FlatList
                    data={clinics}
                    keyExtractor={(item) => item.id}

                    renderItem={({ item }) => (
                        <ClinicCard clinic={item} />
                    )}
                    showsHorizontalScrollIndicator={false}
                />

            </CardsList>
        </Container>
    );
}
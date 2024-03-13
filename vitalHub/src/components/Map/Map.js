import React from 'react';
import { MapDraw, MarkerPoint } from './Style';

// React components
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState, useRef } from 'react';

// MapView
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import MapViewDirections from 'react-native-maps-directions';

// Location
import {
    requestForegroundPermissionsAsync, // Solicita a permissão de localização
    getCurrentPositionAsync, // Captura a localização atual

    watchPositionAsync, // Captura em tempos a localização
    LocationAccuracy // Precisão da captura
} from 'expo-location';

import { mapskey } from '../../../utils/mapsKey';

export const Map = () => {
    const [initialPosition, setInitialPosition] = useState(null);
    const [finalPosition, setFinalPosition] = useState({
        latitude: -23.667331,
        longitude: -46.561491
    });

    const mapReference = useRef(null);


    async function capturarLocalizacao() {
        // Espera a permissão para a localização
        const { granted } = await requestForegroundPermissionsAsync();

        if (granted) {
            // Pega a localização atual do usuário
            const currentPosition = await getCurrentPositionAsync();

            // Salva na constante
            await setInitialPosition(currentPosition);

            // Imprime
            console.log(initialPosition);
        }
    }

    async function RecarregarVisualizacaoMapa() {
        // Se tivermos a referencia do mapa (ele iniciou) e o valor da posição inicial
        if (mapReference.current && initialPosition) {
            await mapReference.current.fitToCoordinates([
                { latitude: initialPosition.coords.latitude, longitude: initialPosition.coords.longitude },
                { latitude: finalPosition.latitude, longitude: finalPosition.longitude }
            ], {
                edgePadding: { top: 30, right: 50, left: 50, bottom: 15 },
                animated: true
            })
        }
    }

    useEffect(() => {
        capturarLocalizacao();

        // Capturar localização em tempo real
        watchPositionAsync({
            accuracy: LocationAccuracy.High,
            timeInterval: 1000,
            distanceInterval: 1
        }, async (response) => {
            await setInitialPosition(response);

            mapReference.current?.animateCamera({
                pitch: 60,
                center: response.coords
            })
        }
        );

    }, [10000])

    useEffect(() => {
        RecarregarVisualizacaoMapa();
    }, [initialPosition])

    return (
        <>
            {initialPosition != null ?
                (
                    <MapDraw
                        ref={mapReference}
                        initialRegion={{
                            latitude: 45.4343,
                            longitude: 12.3388,
                            latitudeDelta: 0.005,
                            longitudeDelta: 0.005,
                        }}
                        provider={PROVIDER_GOOGLE}
                    >
                        <MapViewDirections
                            origin={initialPosition.coords}
                            destination={{
                                latitude: finalPosition.latitude,
                                longitude: finalPosition.longitude,
                                latitudeDelta: 0.005,
                                longitudeDelta: 0.005,
                            }}
                            apikey={mapskey}

                            strokeWidth={5}
                            strokeColor='orange'
                        />

                        <MarkerPoint
                            coordinate={{
                                latitude: initialPosition.coords.latitude,
                                longitude: initialPosition.coords.longitude,
                            }}
                            title='Exemplo de local'
                            description='Descrição exemplo sobre o local'
                            pinColor='blue'
                        />

                        <MarkerPoint
                            coordinate={{
                                latitude: -23.667331,
                                longitude: -46.561491,
                            }}
                            title='Exemplo de local'
                            description='Descrição exemplo sobre o local'
                            pinColor='blue'
                        />
                    </MapDraw>
                ) : (
                    <>
                        <Text>Localização não encontrada!</Text>
                        {/* salve tuquinhas, muitas felicidades em irmão tmj pae */}

                        <ActivityIndicator />
                    </>
                )}

        </>
    )
}
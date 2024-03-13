import React from 'react';
import { MapDraw, MarkerPoint } from './Style';

//#region React Components
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState, useRef } from 'react';
//#endregion

//#region  MapView
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import MapViewDirections from 'react-native-maps-directions';
//#endregion

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

    // 
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
                        customMapStyle={grayMapStyle}
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

const grayMapStyle = [
    {
        elementType: "geometry",
        stylers: [
            {
                color: "#E1E0E7",
            },
        ],
    },
    {
        elementType: "geometry.fill",
        stylers: [
            {
                saturation: -5,
            },
            {
                lightness: -5,
            },
        ],
    },
    {
        elementType: "labels.icon",
        stylers: [
            {
                visibility: "on",
            },
        ],
    },
    {
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#FBFBFB",
            },
        ],
    },
    {
        elementType: "labels.text.stroke",
        stylers: [
            {
                color: "#33303E",
            },
        ],
    },
    {
        featureType: "administrative",
        elementType: "geometry",
        stylers: [
            {
                color: "#fbfbfb",
            },
        ],
    },
    {
        featureType: "administrative.country",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#fbfbfb",
            },
        ],
    },
    {
        featureType: "administrative.land_parcel",
        stylers: [
            {
                visibility: "on",
            },
        ],
    },
    {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#fbfbfb",
            },
        ],
    },
    {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#fbfbfb",
            },
        ],
    },
    {
        featureType: "poi.business",
        stylers: [
            {
                visibility: "on",
            },
        ],
    },
    {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [
            {
                color: "#66DA9F",
            },
        ],
    },
    {
        featureType: "poi.park",
        elementType: "labels.text",
        stylers: [
            {
                visibility: "on",
            },
        ],
    },
    {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#fbfbfb",
            },
        ],
    },
    {
        featureType: "poi.park",
        elementType: "labels.text.stroke",
        stylers: [
            {
                color: "#1B1B1B",
            },
        ],
    },
    {
        featureType: "road",
        stylers: [
            {
                visibility: "on",
            },
        ],
    },
    {
        featureType: "road",
        elementType: "geometry.fill",
        stylers: [
            {
                color: "#C6C5CE",
            },
        ],
    },
    {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#FBFBFB",
            },
        ],
    },
    {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [
            {
                color: "#ACABB7",
            },
        ],
    },
    {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [
            {
                color: "#8C8A97",
            },
        ],
    },
    {
        featureType: "road.highway.controlled_access",
        elementType: "geometry",
        stylers: [
            {
                color: "#8C8A97",
            },
        ],
    },
    {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#fbfbfb",
            },
        ],
    },
    {
        featureType: "transit",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#fbfbfb",
            },
        ],
    },
    {
        featureType: "water",
        elementType: "geometry",
        stylers: [
            {
                color: "#8EA5D9",
            },
        ],
    },
    {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#fbfbfb",
            },
        ],
    },
];
// React components
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';

// MapView
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import MapViewDirections from 'react-native-maps-directions';

// Location
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync
} from 'expo-location';

import { mapskey } from './utils/mapsKey';



export default function App() {
  const pinImg = './assets/shrek.jpg';
  const [initialPosition, setInitialPosition] = useState(null);


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
      console.warn(initialPosition);
    }
  }

  useEffect(() => {
    capturarLocalizacao();
  }, [1000])

  return (
    <View style={styles.container}>
      {
        initialPosition != null ?
          (
            <MapView
              initialRegion={{
                latitude: initialPosition.coords.latitude,
                longitude: initialPosition.coords.longitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
              }}
              provider={PROVIDER_GOOGLE}
              style={styles.map}
              customMapStyle={grayMapStyle}
            >
              <MapViewDirections
                origin={initialPosition.coords}
                destination={{
                  latitude: -23.667331,
                  longitude: -46.561491,
                  latitudeDelta: 0.005,
                  longitudeDelta: 0.005,
                }}
                apikey={mapskey}

                strokeWidth={5}
                strokeColor='orange'
              />
              <Marker
                coordinate={{
                  latitude: initialPosition.coords.latitude,
                  longitude: initialPosition.coords.longitude,
                }}
                icon={require(pinImg)}
                title='Exemplo de local'
                description='Descrição exemplo sobre o local'
                pinColor='blue'
              />
              <Marker
                coordinate={{
                  latitude: -23.667331,
                  longitude: -46.561491,
                }}
                icon={require(pinImg)}
                title='Exemplo de local'
                description='Descrição exemplo sobre o local'
                pinColor='blue'
              />
            </MapView>
          ) :
          <>
            <Text>Localização não encontrada!</Text>
            {/* salve tuquinhas, muitas felicidades em irmão tmj pae */}

            <ActivityIndicator />
          </>
      }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    flex: 1,
    width: '100%',
  },
  ping: {
    width: '50px',
    height: '80px'
  },
});

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
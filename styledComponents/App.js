import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Container } from './src/components/Container/Container';
import { Title, TitleBtnReset, TitleBtnIncrement, TitleBtnDecrement } from './src/components/Title/Title';
import { BtnDecrement, BtnIncrement, BtnReset } from './src/components/Buttons/Buttons';

import { useFonts, Orbitron_400Regular } from '@expo-google-fonts/orbitron';

export default function App() {
  // hook de state
  const [count, setCount] = useState(0);

  // Time states
  const [hourCount, setHourCount] = useState(23);
  const [minuteCount, setMinuteCount] = useState(59);
  const [secondCount, setSecondCount] = useState(50);

  // função para incremento
  const increment = () => {
    setCount(count + 1);

    if (hourCount == 24) {
      setHourCount(0);
      setMinuteCount(0);
      setSecondCount(0);
    } else {
      // XX:58:59
      if (secondCount == 59 && minuteCount < 59) {
        setMinuteCount(minuteCount + 1);
        setSecondCount(0);
        // XX:59:00
      } else {
        // 23:59:59
        if (secondCount == 59 && minuteCount == 59 && hourCount < 24) {
          setHourCount(hourCount + 1);
          setMinuteCount(0);
          setSecondCount(0);
          // 24:00:00
        } else {
          console.warn('Aumentar segundo');
          setSecondCount(secondCount + 1);
        }
      }
    }
  }

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);

      // ================ PASSA OS VALORES PARA O RELÓGIO DIGITAL ================
      // 24:00:00
      if (hourCount < 24 && minuteCount == 0 && secondCount == 0) {
        setHourCount(hourCount - 1);
        setMinuteCount(59);
        setSecondCount(59);
      } else {
        // XX:59:00
        if (minuteCount < 59 && secondCount == 0) {
          setMinuteCount(minuteCount - 1);
          setSecondCount(59);
        } else {
          // XX:58:59
          if (minuteCount < 59 && secondCount <= 59) {
            setSecondCount(secondCount - 1);
          } else {
            if (secondCount == 59 && minuteCount == 59 && hourCount < 24) {
              setMinuteCount(minuteCount - 1);
              setSecondCount(secondCount - 1);
            }
          }
        }
      }
    }
  }

  const reset = () => {
    setCount(0);
    setHourCount(0);
    setMinuteCount(0);
    setSecondCount(0);
  }

  useEffect(() => {
    console.warn(`Contador atualizado: ${count}`);
  }, [count])

  //#region FontLoading
  let [fontsLoaded, fontError] = useFonts({
    Orbitron_400Regular,
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }
  //#endregion

  return (
    <Container style={styles.container}>
      <View style={styles.countContainer}>

        <Image style={styles.clockImg} source={require('./src/images/clock.png')} />
        <Text style={styles.clockHour}>{hourCount < 10 ? `0${hourCount}` : hourCount}</Text>
        <Text style={styles.clockMinute}>{minuteCount < 10 ? `0${minuteCount}` : minuteCount}</Text>
        <Text style={styles.clockSecond}>{secondCount < 10 ? `0${secondCount}` : secondCount}</Text>

        <Title>Contador</Title>
        <Text style={styles.countNumber}>{count}</Text>

        <BtnReset onPress={reset}>
          <TitleBtnReset>Zerar</TitleBtnReset>
        </BtnReset>

        <BtnIncrement onPress={increment}>
          <TitleBtnIncrement>Incrementar</TitleBtnIncrement>
        </BtnIncrement>

        <BtnDecrement onPress={decrement}>
          <TitleBtnDecrement>Decrementar</TitleBtnDecrement>
        </BtnDecrement>
      </View>

      <StatusBar style='auto' />
    </Container>
  );
}

const styles = StyleSheet.create({
  countContainer: {
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#F4F4F4',
    padding: 35,
    borderRadius: 20
  },
  countNumber: {
    fontSize: 20,
    color: '#8E49FF',
    marginBottom: 20
  },
  clockImg: {
    width: 250,
    height: 100
  },
  clockSecond: {
    color: 'red',
    fontFamily: 'Orbitron_400Regular',
    fontSize: 30,
    position: 'absolute',
    top: 45,
    right: 60,
  },
  clockMinute: {
    color: 'red',
    fontFamily: 'Orbitron_400Regular',
    fontSize: 30,
    position: 'absolute',
    top: 45,
    right: 135,
  },
  clockHour: {
    color: 'red',
    fontFamily: 'Orbitron_400Regular',
    fontSize: 30,
    position: 'absolute',
    top: 45,
    left: 60,
  }
});
// É nos tempos difíceis que nos tornamos fortes
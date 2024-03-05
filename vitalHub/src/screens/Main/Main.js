import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ConsultasMedico } from '../ConsultasMedico/ConsultasMedico';
import Perfil from '../Perfil/Perfil';

// Chamando os elementos do Style
import { ContentIcon, TextIcon } from './Style';

import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';

const BottomTab = createBottomTabNavigator();

export const Main = () => {
    return (
        <BottomTab.Navigator
            initialRouteName='Home'
            screenOptions={({ route }) => ({
                // Estilização do Tab Navigator
                tabBarStyle: {
                    backgroundColor: "#ffffff",
                    height: 80,
                    paddingTop: 10,
                },
                // Cor de fundo quando o item estiver ativo
                tabBarActiveBackgroundColor: {
                    backgroundColor: "transparent"
                },
                // Ativa/Desativa os textos padrões das opções da barra de navegação
                tabBarShowLabel: false,
                // O título da tela que surge no topo da Screen quando usamos = o Tab navigator
                headerShown: false,

                // Alteração dos ícones da Navigator
                tabBarIcon: ({ focused }) => {
                    // Se a rota ativa for a "Home", o ícone será o código retornado abaixo
                    if (route.name === "Home") {
                        return (
                            <ContentIcon
                                tabBarActiveBackgroundColor={focused ? "#ECF2FF" : "transparent"}
                            >
                                <FontAwesome name='calendar' size={18} color='#4E4B59' />
                                {focused && <TextIcon>Agenda</TextIcon>}
                            </ContentIcon>
                        )
                    } else {
                        // Se a rota ativa não for a "Home", o ícone será o código retornado abaixo
                        return (
                            <ContentIcon
                                tabBarActiveBackgroundColor={focused ? "#ECF2FF" : "transparent"}
                            >
                                <FontAwesome5
                                    name="user-circle"
                                    size={18}
                                    color='4E4B59'
                                />
                                {focused && <TextIcon>Perfil</TextIcon>}
                            </ContentIcon>
                        )
                    }

                },
            })}
        >

            <BottomTab.Screen
                name='Home'
                component={ConsultasMedico}
            />

            <BottomTab.Screen
                name='Perfil'
                component={Perfil}
            />
        </BottomTab.Navigator>
    );
}
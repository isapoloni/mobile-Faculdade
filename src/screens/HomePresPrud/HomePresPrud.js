import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import HistoriaScreen from '../Historia/Historia';
import PontosTuristicosScreen from '../PontosTuristicos/PontosTuristicos'
import InformacoesGeraisScreen from '../InfosGerais/InfosGerais';
import ContatosUteisScreen from '../ContatosUteis/ContatosUteis';

const Tab = createBottomTabNavigator();

export default function HomePresPrud({ navigation }) {
    return (
        <ImageBackground
            source={{ uri: 'https://blog.1doc.com.br/wp-content/uploads/2024/03/Vista_da_Catedral_-_Praca_9_de_Julho_-_Presidente_Prudente_-_SP-scaled.webp' }}
            style={styles.backgroundImage}
        >
            <View style={styles.overlay} />
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        let iconName;

                        if (route.name === 'História') {
                            iconName = 'book-outline';
                        } else if (route.name === 'Pontos Turísticos') {
                            iconName = 'map-outline';
                        } else if (route.name === 'Informações Gerais') {
                            iconName = 'information-circle-outline';
                        } else if (route.name === 'Contatos Úteis') {
                            iconName = 'call-outline';
                        }

                        return <Icon name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen name="História" component={HistoriaScreen} />
                <Tab.Screen name="Pontos Turísticos" component={PontosTuristicosScreen} />
                <Tab.Screen name="Informações Gerais" component={InformacoesGeraisScreen} />
                <Tab.Screen name="Contatos Úteis" component={ContatosUteisScreen} />
            </Tab.Navigator>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
    },
});

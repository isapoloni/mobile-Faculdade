import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { MaterialIcons } from '@expo/vector-icons';
import Restaurantes from '../Restaurantes/Restaurantes';
import AtividadesArLivre from '../AtividadesArLivre/AtividadesArLivre';
import PontosHistoricos from '../PontosHistoricos/PontosHistoricos';

const PontosTuristicosScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.section}>
                <View style={styles.sectionHeader}>
                    <Ionicons name="restaurant-outline" size={24} color="#333" />
                    <Text style={styles.sectionTitle}>Restaurantes</Text>
                </View>
                <Restaurantes />
            </View>

            <View style={styles.section}>
                <View style={styles.sectionHeader}>
                    <Ionicons name="leaf-outline" size={24} color="#333" />
                    <Text style={styles.sectionTitle}>Atividades ao Ar Livre</Text>
                </View>
                <AtividadesArLivre />
            </View>

            <View style={styles.section}>
                <View style={styles.sectionHeader}>
                    <MaterialIcons name="history-edu" size={24} color="black" />
                    <Text style={styles.sectionTitle}>Pontos Históricos e Culturais</Text>
                </View>
                <PontosHistoricos />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 15,
    },
    section: {
        marginBottom: 30,
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
    },
});

export default PontosTuristicosScreen;

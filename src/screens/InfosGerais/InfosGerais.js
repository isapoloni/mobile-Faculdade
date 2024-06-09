import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const InformacoesGeraisScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.infoItem}>
                <View style={styles.infoHeader}>
                    <Icon name="people-outline" size={24} color="#555" style={styles.icon} />
                    <Text style={styles.infoTitle}>População:</Text>
                </View>
                <Text style={styles.infoText}>A população de Presidente Prudente é de <Text style={styles.bold}>aproximadamente 230.000 habitantes</Text>.</Text>
            </View>
            <View style={styles.infoItem}>
                <View style={styles.infoHeader}>
                    <Icon name="map-outline" size={24} color="#555" style={styles.icon} />
                    <Text style={styles.infoTitle}>Geografia:</Text>
                </View>
                <Text style={styles.infoText}>Presidente Prudente está localizada no oeste do estado de São Paulo, com uma área total de <Text style={styles.bold}>X quilômetros quadrados</Text>.</Text>
            </View>
            <View style={styles.infoItem}>
                <View style={styles.infoHeader}>
                    <Icon name="partly-sunny-outline" size={24} color="#555" style={styles.icon} />
                    <Text style={styles.infoTitle}>Clima:</Text>
                </View>
                <Text style={styles.infoText}>O clima em Presidente Prudente é classificado como <Text style={styles.bold}>tropical úmido</Text>, com verões quentes e úmidos e invernos amenos.</Text>
            </View>
            <View style={styles.infoItem}>
                <View style={styles.infoHeader}>
                    <Icon name="cash-outline" size={24} color="#555" style={styles.icon} />
                    <Text style={styles.infoTitle}>Economia:</Text>
                </View>
                <Text style={styles.infoText}>A economia de Presidente Prudente é diversificada, com destaque para a <Text style={styles.bold}>agricultura, indústria, comércio e serviços</Text>.</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#f8f8f8',
        paddingVertical: 32,
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 32,
        color: '#333',
    },
    infoItem: {
        marginBottom: 24,
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    infoHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    icon: {
        marginRight: 8,
    },
    infoTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#555',
    },
    infoText: {
        fontSize: 16,
        lineHeight: 24,
        color: '#333',
    },
    bold: {
        fontWeight: 'bold',
    },
});

export default InformacoesGeraisScreen;

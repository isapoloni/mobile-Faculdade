import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ContatosUteisScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>

            <View style={styles.categoryContainer}>
                <Text style={styles.categoryTitle}>Emergência</Text>
                <View style={styles.contactItem}>
                    <Icon name="call-outline" size={24} color="#555" style={styles.icon} />
                    <Text style={styles.contactInfo}>Serviço de emergência: 190</Text>
                </View>
                <View style={styles.contactItem}>
                    <Icon name="call-outline" size={24} color="#555" style={styles.icon} />
                    <Text style={styles.contactInfo}>Corpo de Bombeiros: 193</Text>
                </View>
                <View style={styles.contactItem}>
                    <Icon name="call-outline" size={24} color="#555" style={styles.icon} />
                    <Text style={styles.contactInfo}>Polícia Militar: 190</Text>
                </View>
            </View>

            <View style={styles.categoryContainer}>
                <Text style={styles.categoryTitle}>Hospitais</Text>
                <View style={styles.contactItem}>
                    <Icon name="call-outline" size={24} color="#555" style={styles.icon} />
                    <Text style={styles.contactInfo}>Hospital Municipal: (18) 3229-1234</Text>
                </View>
                <View style={styles.contactItem}>
                    <Icon name="call-outline" size={24} color="#555" style={styles.icon} />
                    <Text style={styles.contactInfo}>Hospital Regional: (18) 3322-5678</Text>
                </View>
                <View style={styles.contactItem}>
                    <Icon name="call-outline" size={24} color="#555" style={styles.icon} />
                    <Text style={styles.contactInfo}>UPA - Unidade de Pronto Atendimento: (18) 3355-6789</Text>
                </View>
            </View>

            <View style={styles.categoryContainer}>
                <Text style={styles.categoryTitle}>Delegacias</Text>
                <View style={styles.contactItem}>
                    <Icon name="call-outline" size={24} color="#555" style={styles.icon} />
                    <Text style={styles.contactInfo}>Delegacia Central: (18) 3333-4567</Text>
                </View>
                <View style={styles.contactItem}>
                    <Icon name="call-outline" size={24} color="#555" style={styles.icon} />
                    <Text style={styles.contactInfo}>Delegacia da Mulher: (18) 3333-7890</Text>
                </View>
                <View style={styles.contactItem}>
                    <Icon name="call-outline" size={24} color="#555" style={styles.icon} />
                    <Text style={styles.contactInfo}>Delegacia de Trânsito: (18) 3333-9012</Text>
                </View>
            </View>

            <View style={styles.categoryContainer}>
                <Text style={styles.categoryTitle}>Transporte Público</Text>
                <View style={styles.contactItem}>
                    <Icon name="bus-outline" size={24} color="#555" style={styles.icon} />
                    <Text style={styles.contactInfo}>Terminal Rodoviário: (18) 3444-5678</Text>
                </View>
                <View style={styles.contactItem}>
                    <Icon name="subway-outline" size={24} color="#555" style={styles.icon} />
                    <Text style={styles.contactInfo}>Estação de Metrô: (18) 3444-9012</Text>
                </View>
                <View style={styles.contactItem}>
                    <Icon name="bicycle-outline" size={24} color="#555" style={styles.icon} />
                    <Text style={styles.contactInfo}>Estação de Bicicletas Compartilhadas: (18) 3444-3456</Text>
                </View>
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
    categoryContainer: {
        marginBottom: 24,
    },
    categoryTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#555',
    },
    contactItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    icon: {
        marginRight: 8,
    },
    contactInfo: {
        fontSize: 16,
        color: '#333',
    },
});

export default ContatosUteisScreen;

import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


export default function GuiaTuristico({ navigation }) {


    const projects = [
        { id: '1', title: 'Pontos Históricos', screen: 'Pontos Históricos', icon: <MaterialIcons name="museum" size={24} color="black" />},
        { id: '2', title: 'Restaurantes Recomendados', screen: 'Restaurantes', icon: <Ionicons name="restaurant" size={24} color="black" /> },
        { id: '3', title: 'Atividades ao Ar Livre', screen: 'Atividades ao Ar Livre', icon: <FontAwesome5 name="running" size={24} color="black" /> },
    ];

    return (
        <View style={styles.container}>
            <FlatList
                data={projects}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => navigation.navigate(item.screen)}
                    >
                        <Text>{item.icon}</Text>
                        <Text style={styles.title}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        backgroundColor: '#e8cb74',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
    },
    title: {
        fontSize: 18,
        marginLeft: 10
        
    },
});
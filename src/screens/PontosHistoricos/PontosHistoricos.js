import React from 'react';
import { View, Image, Text, StyleSheet, ScrollView } from 'react-native';
import MatarazzoImg from '../../../assets/Images/Centro-Cultural-Matarazzo.jpg';
import MuseuHistorico from '../../../assets/Images/museu-historico.png';
import Ionicons from 'react-native-vector-icons/Ionicons';

const pontosTuristicos = [
  {
    id: '1',
    title: 'Centro Cultural Matarazzo',
    image: MatarazzoImg,
    resumo: 'O Centro Cultural Matarazzo é um importante espaço cultural que oferece diversas atividades artísticas e educativas.',
    endereco: 'Av. Quinze de Novembro, 1500 - Vila Industrial'
  },
  {
    id: '2',
    title: 'Museu e arquivo histórico',
    image: MuseuHistorico, 
    resumo: 'O Museu e Arquivo Histórico preserva a memória e a história local através de exposições e documentos históricos.',
    endereco: 'Rua Doutor João Gonçalves Foz, 187 - Vila Marcondes'
  },
  {
    id: '3',
    title: 'IBC Centro de Eventos',
    image: { uri: 'https://www.presidenteprudente.sp.gov.br/site/imagem/65640' },
    resumo: 'O Centro de Eventos IBC em Presidente Prudente tem ao todo uma área de 36 mil metros quadrados. Possui um anfiteatro com capacidade para 2.560 pessoas sentadas, restaurante, setor de apoio, de administração, área com capacidade para 4 mil pessoas para realizações de shows, de feiras, congressos, área de quiosques e estacionamento para 400 veículos.',
    endereco: 'Av. Ademar de Barros, 1650 - Jardim Aviação'
  }
];

export default function PontosHistoricos() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
      {pontosTuristicos.map((item) => (
        <View key={item.id} style={styles.card}>
          <Image source={item.image} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.resumo}>{item.resumo}</Text>
            <View style={styles.addressContainer}>
              <Ionicons name="location-outline" size={20} color="#333" />
              <Text style={styles.address}>{item.endereco}</Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexGrow: 1,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover'
  },
  textContainer: {
    padding: 15
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  resumo: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },
  address: {
    fontSize: 15,
    color: '#333',
    marginLeft: 5
  }
});

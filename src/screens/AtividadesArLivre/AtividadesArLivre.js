import React from 'react';
import { View, Image, Text, StyleSheet, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const atividadesArLivre = [
  {
    id: '1',
    title: 'Parque do Povo',
    image: { uri: 'https://conteudo.solutudo.com.br/wp-content/uploads/2022/03/image-69.png' },
    resumo: 'O Parque do Povo é uma excelente opção de lazer ao ar livre em Presidente Prudente, com áreas verdes, pistas de caminhada, quadras esportivas e playgrounds.',
    endereco: 'Av. 14 de Setembro, s/n - Jardim Bongiovani'
  },
  {
    id: '2',
    title: 'SESC Thermas',
    image: { uri: 'https://turismopp.sp.gov.br/wp-content/uploads/2019/01/sesc-680x410.jpg'}, 
    resumo: 'O SESC Thermas é um complexo de lazer com piscinas termais, toboáguas, saunas, quadras esportivas, área de camping e outras opções de entretenimento para toda a família.',
    endereco: 'Rua Alberto Peters, 111 - Jardim das Rosas'
  },
  {
    id: '3',
    title: 'Prudentão',
    image: { uri: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Derby_Paulista_%28Corinthians-Palmeiras%29_Paulist%C3%A3o_2009.jpg'},
    resumo: 'O Prudentão é o maior estádio de futebol de Presidente Prudente, onde são realizados diversos eventos esportivos, além de ser um local de lazer para caminhadas e prática de atividades físicas.',
    endereco: 'Rua São Salvador, 456 - Jardim das Rosas'
  }
];

export default function AtividadesArLivre() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
      {atividadesArLivre.map((item) => (
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

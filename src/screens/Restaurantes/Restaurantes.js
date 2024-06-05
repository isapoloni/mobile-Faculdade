import React from 'react';
import { View, Image, Text, StyleSheet, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const restaurantes = [
  {
    id: '1',
    title: 'Dachô',
    image: { uri: 'https://img-anuncio.listamais.com.br/internas/112591.jpg' },
    resumo: 'Rodízio Japonês completo com frutos do mar, bebidas e sobremesas! O Dachô Restaurante Japonês oferece os mais deliciosos pratos à la carte de sushi, temaki, yakissoba e muito mais.',
    endereco: 'Avenida Washington Luiz, 2256 - Jardim Paulista',
    tipo: 'japanese'
  },
  {
    id: '2',
    title: 'Churrascaria Guaíba',
    image: {uri: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/70/8c/a3/photo0jpg.jpg'}, 
    resumo: 'A Churrascaria Guaíba é conhecida por seus cortes de carne de alta qualidade e um buffet variado com diversas opções de saladas, pratos quentes e sobremesas.',
    endereco: 'Rua José Bongiovani, 76 - Vila Liberdade',
    tipo: 'barbecue'
  },
  {
    id: '3',
    title: 'Taquito El Mexicanito',
    image: { uri: 'https://img.deliverydireto.com.br/unsafe/origxorig/https://duisktnou8b89.cloudfront.net/img/items/burrito-frango-chipotle650cc2f660be9.jpeg' },
    resumo: 'O Taquito El Mexicanito oferece uma variedade de burritos, tacos, nachos e outros pratos típicos da culinária mexicana, todos preparados com ingredientes frescos e saborosos.',
    endereco: 'Av. Ademar de Barros, 1650 - Jardim Aviação',
    tipo: 'mexican'
  }
];

const getIconName = (tipo) => {
  switch (tipo) {
    case 'japanese':
      return 'restaurant-outline';
    case 'barbecue':
      return 'flame-outline';
    case 'mexican':
      return 'fast-food-outline'; 
    default:
      return 'restaurant-outline';
  }
};

export default function Restaurantes() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
      {restaurantes.map((item) => (
        <View key={item.id} style={styles.card}>
          <Image source={item.image} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.iconContainer}>
              <Ionicons name={getIconName(item.tipo)} size={20} color="#333" />
              <Text style={styles.tipo}>{item.tipo.charAt(0).toUpperCase() + item.tipo.slice(1)}</Text>
            </View>
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
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  tipo: {
    fontSize: 16,
    color: '#666',
    marginLeft: 5
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

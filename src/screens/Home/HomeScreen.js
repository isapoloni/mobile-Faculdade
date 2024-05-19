import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const projects = [
  { id: '1', title: 'Projeto 1 - Biscoito da sorte', screen: 'Biscoito da sorte' },
  { id: '2', title: 'Projeto 2 - Configurações', screen: 'Configurações' },
];

export default function HomeScreen({ navigation }) {
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
    backgroundColor: '#ccccff',
    borderRadius: 10
  },
  title: {
    fontSize: 18,
  },
});

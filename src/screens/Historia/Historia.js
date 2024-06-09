import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const HistoriaScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>História de Presidente Prudente</Text>
            <Image
                source={{ uri: 'https://www.presidenteprudente.sp.gov.br/site/imagem/78091' }}
                style={styles.image}
            />
            <Text style={styles.paragraph}>
                Presidente Prudente é uma cidade localizada no interior do estado de São Paulo. A cidade foi fundada em 1917, e deve seu nome ao presidente Prudente de Morais, o primeiro presidente civil do Brasil. A região começou a se desenvolver com a construção da Estrada de Ferro Sorocabana, que facilitou o acesso e a colonização da área.
            </Text>
            <Image
                source={{ uri: 'https://abmais.com/wp-content/uploads/2023/12/Artigo-Presidente-Prudente-1024x576.png' }}
                style={styles.image}
            />
            <Text style={styles.paragraph}>
                Ao longo dos anos, Presidente Prudente cresceu e se tornou um importante centro econômico e educacional. A cidade é conhecida por suas universidades e por ser um polo agrícola e comercial. Entre as figuras importantes da cidade estão políticos, empresários e educadores que contribuíram para o desenvolvimento local.
            </Text>
            <Text style={styles.paragraph}>
                Hoje, Presidente Prudente é uma cidade moderna com infraestrutura desenvolvida, oferecendo qualidade de vida para seus habitantes e visitantes. Eventos culturais e históricos são celebrados regularmente, mantendo viva a rica história da cidade.
            </Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: 'white',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 16,
        color: '#333',
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        marginBottom: 16,
    },
    paragraph: {
        width: '100%',
        textAlign: 'justify',
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 16,
        color: '#333',
    },
});

export default HistoriaScreen;

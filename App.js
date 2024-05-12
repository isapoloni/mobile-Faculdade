import { useState } from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import Biscoito from './assets/biscoito.png'
import BiscoitoQuebrado from './assets/biscoito-quebrado.png'

export default function App() {

  const [imgBiscoito, setImgBiscoito] = useState(Biscoito)
  const [textButton, setTextButton] = useState('Quebrar Biscoito')
  const [phrase, setPhrase] = useState('')

  const frasesMotivacionais = [
    "Acredite em você mesmo. Você é mais forte do que pensa.",
    "O sucesso nasce do querer, da determinação e persistência em se chegar a um objetivo.",
    "A única maneira de fazer um excelente trabalho é amar o que você faz.",
    "Não espere por circunstâncias ideais. Comece onde você está. Use o que você tem. Faça o que você pode.",
    "Você não falha quando não atinge um objetivo, você falha quando desiste de tentar.",
    "Lembre-se: seu único limite é você mesmo.",
    "O segredo do sucesso é a constância no objetivo.",
    "Não importa o quão devagar você vá, desde que você não pare.",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "Nada é impossível, a palavra em si diz 'eu sou possível'.",
    "A persistência é o caminho do êxito.",
    "Quanto maior a dificuldade, maior a glória em superá-la.",
    "O verdadeiro sucesso é encontrar satisfação em fazer um trabalho que você ama.",
    "Acredite que você pode e você já está no meio do caminho.",
    "Não tenha medo de desistir do bom para ir atrás do ótimo.",
    "O sucesso é a consequência do trabalho árduo, do aprendizado do fracasso, da lealdade e da persistência."
  ];

  

  const brokenBiscoito = () => {
    setImgBiscoito(BiscoitoQuebrado);
    setTextButton('Quebrar outro');

    const randomIndex = Math.floor(Math.random() * frasesMotivacionais.length);
    setPhrase(frasesMotivacionais[randomIndex]);

  }

  const brokenAgain = () => {
    setImgBiscoito(Biscoito)
    setTextButton('Quebrar Biscoito')
    setPhrase('')
  }


  return (
    <View style={styles.container}>
        <Image 
          source={imgBiscoito}
          style={styles.imgBiscoito}
        />
      <View style={styles.viewPhrase}>
        <Text style={styles.textPhrase}>
          {phrase}
        </Text>
      </View>
      <Button 
        title={textButton} 
        onPress={textButton ===  'Quebrar outro' ? brokenAgain : brokenBiscoito}
        color={textButton === 'Quebrar outro' ? 'green' : 'orange'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgBiscoito: {
    width: 300,
    height:300 
  },
  viewPhrase: { 
    margin: 40 
  },
  textPhrase: {
    fontStyle: 'italic'
  },
});

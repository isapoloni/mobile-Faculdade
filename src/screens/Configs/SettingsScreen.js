// screens/SettingsScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Switch } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/Ionicons';

export default function SettingsScreen() {
  const [volume, setVolume] = useState('50');
  const [brightness, setBrightness] = useState('50');
  const [isNightMode, setIsNightMode] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <View style={styles.setting}>
        <View style={styles.labelContainer}>
          <Icon name="volume-high-outline" size={24} color="#333" />
          <Text style={styles.label}>Volume</Text>
        </View>
        <Picker
          selectedValue={volume}
          style={styles.picker}
          onValueChange={(itemValue) => setVolume(itemValue)}
        >
          <Picker.Item label="0%" value="0" />
          <Picker.Item label="10%" value="10" />
          <Picker.Item label="20%" value="20" />
          <Picker.Item label="30%" value="30" />
          <Picker.Item label="40%" value="40" />
          <Picker.Item label="50%" value="50" />
          <Picker.Item label="60%" value="60" />
          <Picker.Item label="70%" value="70" />
          <Picker.Item label="80%" value="80" />
          <Picker.Item label="90%" value="90" />
          <Picker.Item label="100%" value="100" />
        </Picker>
      </View>

      <View style={styles.setting}>
        <View style={styles.labelContainer}>
          <Icon name="sunny-outline" size={24} color="#333" />
          <Text style={styles.label}>Brilho</Text>
        </View>
        <Picker
          selectedValue={brightness}
          style={styles.picker}
          onValueChange={(itemValue) => setBrightness(itemValue)}
        >
          <Picker.Item label="0%" value="0" />
          <Picker.Item label="10%" value="10" />
          <Picker.Item label="20%" value="20" />
          <Picker.Item label="30%" value="30" />
          <Picker.Item label="40%" value="40" />
          <Picker.Item label="50%" value="50" />
          <Picker.Item label="60%" value="60" />
          <Picker.Item label="70%" value="70" />
          <Picker.Item label="80%" value="80" />
          <Picker.Item label="90%" value="90" />
          <Picker.Item label="100%" value="100" />
        </Picker>
      </View>

      <View style={[styles.setting, styles.switchContainer]}>
        <View style={styles.labelContainer}>
          <Icon name="moon-outline" size={24} color="#333" />
          <Text style={styles.label}>Modo Noturno</Text>
        </View>
        <Switch
          value={isNightMode}
          onValueChange={(value) => setIsNightMode(value)}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
    textAlign: 'center',
  },
  setting: {
    width: '100%',
    marginBottom: 30,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    marginLeft: 10,
    color: '#333',
  },
  picker: {
    height: 50,
    width: '100%',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

import { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

export default function App() {
  const [message, setMessage] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Главный экран</Text>

      {/* Текстовое поле — пустое до нажатия */}
      <View style={styles.textBox}>
        <Text style={styles.textBoxContent}>{message}</Text>
      </View>

      {/* Кнопка */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => setMessage('Hello world')}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>Hello world</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#1c1c1e',
    marginBottom: 40,
  },
  textBox: {
    width: '100%',
    height: 56,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#d1d1d6',
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  textBoxContent: {
    fontSize: 18,
    color: '#1c1c1e',
  },
  button: {
    width: '100%',
    height: 56,
    backgroundColor: '#007aff',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
});
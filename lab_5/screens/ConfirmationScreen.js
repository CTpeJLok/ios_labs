import { View, Text, StyleSheet } from "react-native";

export default function ConfirmationScreen({ route }) {
  const { name, email } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Данные получены
      </Text>

      <Text style={styles.text}>
        Имя: {name}
      </Text>

      <Text style={styles.text}>
        Email: {email}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});
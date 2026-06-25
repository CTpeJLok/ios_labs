import { View, Text, Image, Button, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/3082/3082037.png",
        }}
        style={styles.image}
      />

      <Text style={styles.title}>
        Магазин продуктов
      </Text>

      <Text>
        Добро пожаловать в приложение магазина.
      </Text>

      <Button
        title="Начать покупки"
        onPress={() => {}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
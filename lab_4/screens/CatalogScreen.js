import { View, Text, Image, StyleSheet } from "react-native";

export default function CatalogScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Каталог товаров</Text>

      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/415/415733.png",
        }}
        style={styles.image}
      />

      <Text>Яблоки - 120 ₽/кг</Text>
      <Text>Молоко - 95 ₽</Text>
      <Text>Хлеб - 45 ₽</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});
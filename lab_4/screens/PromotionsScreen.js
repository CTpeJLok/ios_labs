import { View, Text, StyleSheet } from "react-native";

export default function PromotionsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Акции</Text>

      <Text>🔥 Скидка 20% на фрукты</Text>
      <Text>🔥 2 по цене 1 на напитки</Text>
      <Text>🔥 Бесплатная доставка от 2000 ₽</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
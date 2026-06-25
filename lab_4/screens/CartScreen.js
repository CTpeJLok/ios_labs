import { View, Text, Button, StyleSheet } from "react-native";

export default function CartScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Корзина</Text>

      <Text>Товаров в корзине: 3</Text>
      <Text>Сумма: 260 ₽</Text>

      <Button
        title="Оформить заказ"
        onPress={() => {}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
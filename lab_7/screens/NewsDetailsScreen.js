import { View, Text, StyleSheet } from "react-native";

export default function NewsDetailsScreen({ route }) {
  const { news } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {news.title}
      </Text>

      <Text style={styles.info}>
        Автор: {news.author}
      </Text>

      <Text style={styles.info}>
        Дата: {news.date}
      </Text>

      <Text style={styles.text}>
        {news.text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },

  info: {
    marginBottom: 5,
    color: "gray",
  },

  text: {
    marginTop: 20,
    fontSize: 16,
    lineHeight: 24,
  },
});
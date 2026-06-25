import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import newsData from "../assets/news.json";

export default function NewsListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={newsData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate("NewsDetails", {
                news: item,
              })
            }
          >
            <Text style={styles.title}>
              {item.title}
            </Text>

            <Text>
              {item.date}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },

  card: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
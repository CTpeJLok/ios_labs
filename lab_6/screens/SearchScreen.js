import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const sites = {
  программирование: [
    {
      title: "W3Schools",
      url: "https://www.w3schools.com",
    },
    {
      title: "MDN Web Docs",
      url: "https://developer.mozilla.org/en-US/docs/Web",
    },
    {
      title: "Example Domain",
      url: "https://example.com",
    },
  ],

  образование: [
    {
      title: "W3Schools",
      url: "https://www.w3schools.com",
    },
    {
      title: "Internet Archive",
      url: "https://archive.org",
    },
    {
      title: "Example Domain",
      url: "https://example.com",
    },
  ],

  технологии: [
    {
      title: "Example Domain",
      url: "https://example.com",
    },
    {
      title: "Yandex",
      url: "https://ya.ru",
    },
    {
      title: "Internet Archive",
      url: "https://archive.org",
    },
  ],
};

export default function SearchScreen({ navigation }) {
  const [topic, setTopic] = useState("");
  const [result, setResult] = useState([]);

  const searchSites = () => {
    const key = topic.toLowerCase();

    if (sites[key]) {
      const shuffled = [...sites[key]]
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

      setResult(shuffled);
    } else {
      setResult([]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Введите тематику
      </Text>

      <TextInput
        style={styles.input}
        placeholder="программирование"
        value={topic}
        onChangeText={setTopic}
      />

      <Button
        title="Найти сайты"
        onPress={searchSites}
      />

      <FlatList
        data={result}
        keyExtractor={(item) => item.url}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() =>
              navigation.navigate("WebView", {
                url: item.url,
                title: item.title,
              })
            }
          >
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 22,
    marginBottom: 15,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
  },

  item: {
    padding: 15,
    borderWidth: 1,
    borderColor: "#ddd",
    marginTop: 10,
    borderRadius: 8,
  },
});
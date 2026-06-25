import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import NewsListScreen from "./screens/NewsListScreen";
import NewsDetailsScreen from "./screens/NewsDetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="NewsList"
          component={NewsListScreen}
          options={{ title: "Новости" }}
        />

        <Stack.Screen
          name="NewsDetails"
          component={NewsDetailsScreen}
          options={{ title: "Новость" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
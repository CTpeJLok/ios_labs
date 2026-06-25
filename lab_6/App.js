import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SearchScreen from "./screens/SearchScreen";
import WebViewScreen from "./screens/WebViewScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{ title: "Поиск сайтов" }}
        />

        <Stack.Screen
          name="WebView"
          component={WebViewScreen}
          options={{ title: "Просмотр сайта" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
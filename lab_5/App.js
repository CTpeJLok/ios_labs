import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RegistrationScreen from "./screens/RegistrationScreen";
import ConfirmationScreen from "./screens/ConfirmationScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ title: "Регистрация" }}
        />

        <Stack.Screen
          name="Confirmation"
          component={ConfirmationScreen}
          options={{ title: "Подтверждение" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
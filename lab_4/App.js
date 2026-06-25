import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen";
import CatalogScreen from "./screens/CatalogScreen";
import CartScreen from "./screens/CartScreen";
import PromotionsScreen from "./screens/PromotionsScreen";
import ProfileScreen from "./screens/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: true,
          tabBarIcon: ({ color, size }) => {
            let iconName;

            switch (route.name) {
              case "Главная":
                iconName = "home";
                break;
              case "Каталог":
                iconName = "grid";
                break;
              case "Корзина":
                iconName = "cart";
                break;
              case "Акции":
                iconName = "pricetag";
                break;
              case "Профиль":
                iconName = "person";
                break;
            }

            return (
              <Ionicons
                name={iconName}
                size={size}
                color={color}
              />
            );
          },
        })}
      >
        <Tab.Screen name="Главная" component={HomeScreen} />
        <Tab.Screen name="Каталог" component={CatalogScreen} />
        <Tab.Screen name="Корзина" component={CartScreen} />
        <Tab.Screen name="Акции" component={PromotionsScreen} />
        <Tab.Screen name="Профиль" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
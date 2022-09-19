import { registerRootComponent } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "@src/screens/CategoriesScreen";
import MealsOverviewScreen from "@src/screens/MealsOverviewScreen";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import MealDetailScreen from "@src/screens/MealDetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="MealsCategories"
          screenOptions={{
            headerBackTitle: "Back",
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "#FFF",
            contentStyle: { backgroundColor: "#3F2F25" },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: "All Categories",
            }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen name="MealsDetail" component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});

registerRootComponent(App);

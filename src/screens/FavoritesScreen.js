import MealsList from "@src/components/MealsList/MealsList";
import { FavoritesContext } from "@src/store/context/favorites-contexts";
import { MEALS } from "@src/utils/dummyData/sampleData";

import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
const FavoritesScreen = () => {
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>There Are No Favorited Meals.</Text>
      </View>
    );
  }
  return <MealsList items={favoriteMeals} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

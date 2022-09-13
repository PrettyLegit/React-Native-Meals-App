import CategoryGridTile from "@src/components/CategoryGridTile";
import { CATEGORIES } from "@src/utils/dummyData/sampleData";
import { FlatList, StyleSheet } from "react-native";

function renderCategoryItem(itemData) {
  return (
    <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
  );
}

const CategoriesScreen = () => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});

import CategoriesScreen from "@src/screens/CategoriesScreen";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView } from "react-native";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView>
        <CategoriesScreen />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({});

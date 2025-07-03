import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";

export default function App() {
  const appName = "Summer 2025";

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header name={appName} version={2} theme="dark">
        <Text>child1</Text>
        <Text>child2</Text>
      </Header>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

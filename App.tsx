import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Header from "./components/Header";
import { useState } from "react";

export default function App() {
  const appName = "Summer 2025";
  const [text, setText] = useState("initital text");

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header name={appName} version={2} theme="dark">
        <Text>child1</Text>
        <Text>child2</Text>
      </Header>
      <TextInput
        style={{ borderBottomColor: "black", borderBottomWidth: 2 }}
        value={text}
        onChangeText={(newText) => {
          setText(newText);
        }}
      />
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

import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Headerprops = {
  name: string;
  version: number;
  theme: "light" | "dark";
  children?: React.ReactNode;
};
export default function Header({ name, children }: Headerprops) {
  return (
    <View>
      <Text>Welcome to {name}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({});

import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Headerprops = {
  name: string;
  version: number;
  theme: "light" | "dark";
};
export default function Header(props: Headerprops) {
  console.log(props);
  return (
    <View>
      <Text>Welcome to {props.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

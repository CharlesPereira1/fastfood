import React from "react";
import { Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
import { useFonts, DMSans_400Regular } from "@expo-google-fonts/dm-sans";
import { DMSerifDisplay_400Regular } from "@expo-google-fonts/dm-serif-display";
import { ThemeProvider } from "styled-components/native";

import theme from "./src/theme";

export const App = () => {
  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSerifDisplay_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Text>App</Text>
      <Text>App</Text>
      <Text>App</Text>
      <Text>App</Text>
      <Text>App</Text>
      <Text>App</Text>
      <Text>App</Text>
      <Text>App</Text>
      <Text>App</Text>
      <Text>App</Text>
      <Text>App</Text>
      <Text>App</Text>
      <Text>App</Text>
      <Text>App</Text>
      <Text>App</Text>
      <Text>App</Text>
    </ThemeProvider>
  );
};

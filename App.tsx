import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "styled-components";
import Theme from "./src/styles/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import Home from "./src/page/Home";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemeProvider theme={Theme}>
        <StatusBar style="dark"  />
        <Home />
      </ThemeProvider>
    </SafeAreaView>
  );
}

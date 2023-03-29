import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, Text, View } from "react-native";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/theme/theme";
import {
  useFonts,
  Overpass_700Bold,
  Overpass_600SemiBold,
  Overpass_400Regular,
  Overpass_300Light,
} from "@expo-google-fonts/overpass";

export default function App() {
  const [fontsLoaded] = useFonts({
    Overpass_700Bold,
    Overpass_600SemiBold,
    Overpass_400Regular,
    Overpass_300Light,
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator color={theme.colors.dark400} />
      </View>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text
          style={{
            fontFamily: theme.fontFamily.bold,
          }}
        >
          Open up App.js to start working on your app!
        </Text>
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}

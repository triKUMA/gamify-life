import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import {
  useFonts,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
} from "@expo-google-fonts/roboto";
import { FirebaseManager } from "./managers/FirebaseManager";

import RouteManager from "./managers/RouteManager";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });

  return fontsLoaded ? (
    <FirebaseManager>
      <StatusBar style="light" />
      <RouteManager />
    </FirebaseManager>
  ) : null;
}

import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import FirebaseManager from "./managers/FirebaseManager";
import RouteManager from "./managers/RouteManager";
import ThemeManager from "./managers/ThemeManager";

export default function App() {
  return (
    <FirebaseManager>
      <ThemeManager theme="dark">
        <RouteManager />
      </ThemeManager>
    </FirebaseManager>
  );
}

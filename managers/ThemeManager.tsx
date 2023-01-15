import { createContext, CSSProperties, ReactNode, useContext, useEffect, useState } from "react";
import {
  useFonts,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
} from "@expo-google-fonts/roboto";
import darkTheme from "../themes/dark.theme.json";
import lightTheme from "../themes/light.theme.json";
import { Appearance } from "react-native-appearance";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

const themes = {
  dark: darkTheme,
  light: lightTheme,
};

type ThemeKey = keyof typeof themes;

interface Theme {
  name: string;
  themeStyles: Common<typeof themes.dark.themeStyles, typeof themes.light.themeStyles>;
}

const ThemeContext = createContext<Theme | null>(null);

interface ThemeManagerProps {
  theme: "dark" | "light" | "auto";
  children: ReactNode;
}

export default function ThemeManager(props: ThemeManagerProps) {
  const [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });

  const [theme, setTheme] = useState<Theme>(
    themes[
      props.theme === "auto" ? "dark" : props.theme
    ] /*Appearance.getColorScheme() === "light" ? themes.light : themes.dark*/
  );

  const [styles, setStyles] = useState();

  const getTheme = (): Theme => {
    if (props.theme === "auto") {
      // If user has no preference, dark mode will be used.
      // return Appearance.getColorScheme() === "light" ? themes.light : themes.dark;
      return themes.dark;
    }

    return themes[props.theme];
  };

  useEffect(() => {
    // Appearance.addChangeListener(() => setTheme(getTheme()));
  }, []);

  return fontsLoaded ? (
    <ThemeContext.Provider value={{ ...theme }}>
      <View style={{ flex: 1, backgroundColor: theme.themeStyles.colour.secondary }}>
        <StatusBar style={theme.name === "dark" ? "light" : "dark"} />
        {props.children}
      </View>
    </ThemeContext.Provider>
  ) : null;
}

export const useTheme = () => {
  const theme = useContext(ThemeContext);

  if (theme === null) throw new Error("Theme Context is null.");

  return theme;
};

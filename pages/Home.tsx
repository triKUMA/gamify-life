import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, View, StyleProp, ViewStyle, Text, Pressable } from "react-native";
import { RouteParamList } from "../managers/RouteManager";
import { useTheme } from "../managers/ThemeManager";
import { padding } from "../utility/stylesheet";

interface HomeProps extends NativeStackScreenProps<RouteParamList, "Home"> {
  style?: StyleProp<ViewStyle>;
}

export default function Home({ navigation, route, ...props }: HomeProps) {
  const { themeStyles } = useTheme();

  const gap = 10;

  return (
    <View style={[props.style, styles.container, { marginTop: -gap }]}>
      <Text style={{ marginTop: gap, color: themeStyles.colour.primary }}>Home Page</Text>
      <Pressable
        style={[styles.button, { marginTop: gap, borderColor: themeStyles.colour.primary }]}
        onPress={() => navigation.navigate("Index")}
      >
        <Text style={{ color: themeStyles.colour.primary }}>To Index Page</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    ...padding(10, 20),
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
  },
});

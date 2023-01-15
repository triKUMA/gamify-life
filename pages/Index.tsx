import { StyleSheet, View, StyleProp, ViewStyle, Text, Pressable } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RouteParamList } from "../managers/RouteManager";
import { padding } from "../utility/stylesheet";
import { useTheme } from "../managers/ThemeManager";

interface IndexProps extends NativeStackScreenProps<RouteParamList, "Index"> {
  style?: StyleProp<ViewStyle>;
}

export default function Index({ navigation, route, ...props }: IndexProps) {
  const { themeStyles } = useTheme();

  const gap = 10;
  return (
    <View style={[props.style, styles.container, { marginTop: -gap }]}>
      <Text style={{ marginTop: gap, color: themeStyles.colour.primary }}>Index Page</Text>
      <Pressable
        style={[styles.button, { marginTop: gap, borderColor: themeStyles.colour.primary }]}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={{ color: themeStyles.colour.primary }}>To Home Page</Text>
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

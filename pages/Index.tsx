import { StyleSheet, View, StyleProp, ViewStyle, Text, Pressable } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RouteParamList } from "../managers/RouteManager";

interface IndexProps extends NativeStackScreenProps<RouteParamList, "Index"> {
  style?: StyleProp<ViewStyle>;
}

export default function Index({ navigation, route, ...props }: IndexProps) {
  const gap = 10;
  return (
    <View style={[props.style, styles.container, { marginTop: -gap }]}>
      <Text style={{ marginTop: gap }}>Index Page</Text>
      <Pressable style={[styles.button, { marginTop: gap }]} onPress={() => navigation.navigate("Home")}>
        <Text>To Home Page</Text>
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
    padding: 10,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
  },
});

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Index from "../pages/Index";
import Home from "../pages/Home";

export type RouteParamList = {
  Index: undefined;
  Home: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<RouteParamList>();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Index" screenOptions={{ headerShown: false, animation: "none" }}>
        <Screen name="Index" component={Index} />
        <Screen name="Home" component={Home} />
      </Navigator>
    </NavigationContainer>
  );
}

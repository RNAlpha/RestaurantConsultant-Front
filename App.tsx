import { StyleSheet, Text } from "react-native";
import AppFrame from "./layout";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "./screens/signin";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AppFrame>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="signin"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="signin" component={SignInScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppFrame>
    // <View style={styles.container}>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

import { StyleSheet } from "react-native";
import { AppFrame } from "./layout";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "./screens/signin";
import UploadScreen from "./screens/upload";
import { RootStackParamList } from "./screens/type";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Camera from "./components/camera";
import SignUpScreen from "@_screens/signup";
import MainScreen from "@_screens/main";
import ChatScreen from "@_screens/chat";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <GestureHandlerRootView>
      <AppFrame>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="signin"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="signin" component={SignInScreen} />
            <Stack.Screen name="upload" component={UploadScreen} />
            <Stack.Screen name="signup" component={SignUpScreen} />
            <Stack.Screen name="main" component={MainScreen} />
            <Stack.Screen name="chat" component={ChatScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </AppFrame>
    </GestureHandlerRootView>
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

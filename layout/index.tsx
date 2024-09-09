import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function AppFrame({ children }: React.PropsWithChildren) {
  return (
    <View style={style.frame}>
      <StatusBar style="auto" />
      {children}
    </View>
  );
}

const style = StyleSheet.create({
  frame: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

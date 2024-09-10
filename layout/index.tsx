import { StyleSheet, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import Header from "@_components/header/header";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";

export function AppFrame({ children }: React.PropsWithChildren) {
  return (
    <View style={style.frame}>
      <StatusBar style="auto" />
      {children}
    </View>
  );
}

export function ContainerWithHeader({ children }: React.PropsWithChildren) {
  return (
    <View style={{ flex: 1 }}>
      <Header>
        <TouchableOpacity>
          <Ionicons name="arrow-back-outline" size={30} color="white" />
        </TouchableOpacity>
        <Text style={{ color: "white", fontSize: 20 }}>ConsultArtist</Text>
        <TouchableOpacity>
          <AntDesign name="user" size={30} color="white" />
        </TouchableOpacity>
      </Header>
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

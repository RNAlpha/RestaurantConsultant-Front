import { StyleSheet, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import Header from "@_components/header/header";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { RootStackParamList } from "@_screens/type";
import { ContainerWithHeaderProps } from "./type";

export function AppFrame({ children }: React.PropsWithChildren) {
  return (
    <View style={style.frame}>
      <StatusBar style="auto" />
      {children}
    </View>
  );
}

export function ContainerWithHeader<T extends keyof RootStackParamList>({
  children,
  navigation,
}: ContainerWithHeaderProps<T>) {
  return (
    <View style={{ flex: 1, width: "100%" }}>
      <Header>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="arrow-back-outline" size={30} color="white" />
        </TouchableOpacity>
        <Text style={{ color: "white", fontSize: 20 }}>ConsultArtist</Text>
        <TouchableOpacity>
          <AntDesign name="user" size={30} color="white" />
        </TouchableOpacity>
      </Header>
      <>{children}</>
    </View>
  );
}

const style = StyleSheet.create({
  frame: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

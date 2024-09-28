import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@_screens/type";
import { Text } from "react-native";
import { ContainerWithHeader } from "@_layout/index";

export default function ChatScreen({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "chat">) {
  return (
    <ContainerWithHeader navigation={navigation}>
      <Text>chat</Text>
    </ContainerWithHeader>
  );
}

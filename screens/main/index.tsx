import { ContainerWithHeader } from "@_layout/index";
import { RootStackParamList } from "@_screens/type";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View } from "react-native";
import ServiceList from "@_components/MainPageRelated/ServiceList";
import { SERVICE_LIST } from "@_assets/assets";

export default function MainScreen({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "main">) {
  return (
    <ContainerWithHeader navigation={navigation}>
      <View style={{ flex: 1, alignItems: "center" }}>
        <ServiceList
          services={SERVICE_LIST}
          navigate={navigation.navigate}
        ></ServiceList>
      </View>
    </ContainerWithHeader>
  );
}

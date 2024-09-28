import { Service } from "@_assets/type";
import { RootStackParamList } from "@_screens/type";
import { StyleProp, ViewStyle } from "react-native";

export interface ServiceListProps {
  services: Service[];
  navigate: (screen: keyof RootStackParamList) => void;
}

export interface ServiceProps {
  service: Service;
  navigate: (screen: keyof RootStackParamList) => void;
  style?: StyleProp<ViewStyle>;
}

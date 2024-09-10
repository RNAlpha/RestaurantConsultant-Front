import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@_screens/type";

export interface ContainerWithHeaderProps<T extends keyof RootStackParamList>
  extends React.PropsWithChildren {
  navigation: NativeStackNavigationProp<RootStackParamList, T, undefined>;
}

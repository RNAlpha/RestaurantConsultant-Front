import { RootStackParamList } from "@_screens/type";

export type Service = {
  name: string;
  screen: keyof RootStackParamList;
  icon: React.FC<IconProps>;
};

export interface IconProps {
  size: number;
  color: string;
}

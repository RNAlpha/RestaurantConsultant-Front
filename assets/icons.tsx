import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { IconProps } from "./type";

export const DesignConsult: React.FC<IconProps> = ({ size, color }) => {
  return <Ionicons name="color-wand-outline" size={size} color={color} />;
};

export const AIChat: React.FC<IconProps> = ({ size, color }) => {
  return (
    <MaterialCommunityIcons
      name="robot-excited-outline"
      size={size}
      color={color}
    />
  );
};

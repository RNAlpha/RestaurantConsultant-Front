import { ASSETS } from "@_assets/assets";
import { View, ViewProps, StyleProp, ViewStyle } from "react-native";

export default function Header({
  children,
  ...props
}: React.PropsWithChildren<ViewProps>) {
  return (
    <View style={props.style ? [HeaderStyle, props.style] : HeaderStyle}>
      <>{children}</>
    </View>
  );
}

const HeaderStyle = {
  width: "100%",
  backgroundColor: ASSETS.main,
  alignItems: "flex-end",
  flexDirection: "row",
  justifyContent: "space-between",
  paddingBottom: 12,
  paddingHorizontal: 20,
  zIndex: 10,
  height: 90,
} satisfies StyleProp<ViewStyle>;

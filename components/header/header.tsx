import { ASSETS } from "@_assets/assets";
import { View } from "react-native";

export default function Header({ children }: React.PropsWithChildren) {
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: ASSETS.main,
        alignItems: "flex-end",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 12,
        paddingHorizontal: 20,
        zIndex: 10,
        height: 90,
      }}
    >
      <>{children}</>
    </View>
  );
}

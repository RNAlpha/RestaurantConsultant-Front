import { ASSETS } from "@_assets/assets";
import { View } from "react-native";

export default function Header({ children }: React.PropsWithChildren) {
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: ASSETS.main,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 25,
        paddingHorizontal: 20,
        zIndex: 10,
      }}
    >
      {children}
    </View>
  );
}

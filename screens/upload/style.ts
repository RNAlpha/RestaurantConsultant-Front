import { StyleProp, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { ASSETS } from "../../assets/assets";

type UploadStyleKey = "container" | "upload-button" | "upload-button-text";

export const UploadStyle: Record<
  UploadStyleKey,
  StyleProp<ViewStyle | TextStyle>
> = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  "upload-button": {
    width: "70%",
    aspectRatio: 1,
    backgroundColor: ASSETS.sub,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  "upload-button-text": {
    color: ASSETS.main,
    fontWeight: "bold",
    marginTop: 30,
  },
});

export default UploadStyle;

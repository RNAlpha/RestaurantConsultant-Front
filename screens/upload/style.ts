import {
  StyleProp,
  StyleSheet,
  TextStyle,
  ViewStyle,
  Dimensions,
} from "react-native";
import { ASSETS } from "../../assets/assets";

type UploadStyleKey =
  | "container"
  | "upload-button"
  | "upload-button-text"
  | "bottom-sheet-view"
  | "bottom-sheet-button";

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
  "bottom-sheet-view": {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  "bottom-sheet-button": {
    flex: 0.47,

    aspectRatio: 1,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    borderWidth: 0.3,
    borderRadius: 10,
    borderColor: ASSETS.input,
    backgroundColor: ASSETS.pale,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default UploadStyle;

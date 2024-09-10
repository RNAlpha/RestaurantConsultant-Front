import {
  StyleProp,
  StyleSheet,
  TextStyle,
  ViewStyle,
  Dimensions,
  ImageStyle,
} from "react-native";
import { ASSETS } from "../../assets/assets";

type UploadStyleKey =
  | "container"
  | "upload-preview"
  | "upload-preview-container"
  | "upload-button-text"
  | "bottom-sheet-view"
  | "bottom-sheet-button"
  | "image-preview"
  | "image-prompt"
  | "image-prompt-container"
  | "image-prompt-submit";

const UPLOAD_IMAGE_AR = 4 / 3;

export const UploadStyle = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "space-between",
  },
  "upload-preview": {
    width: "90%",
    aspectRatio: UPLOAD_IMAGE_AR,
    backgroundColor: ASSETS.pale,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: Dimensions.get("screen").height * 0.14,
  },
  "upload-preview-container": {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
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

  "image-preview": {
    width: "100%",
    aspectRatio: UPLOAD_IMAGE_AR,
    borderRadius: 10,
  },
  "image-prompt-container": {
    width: "100%",
    borderColor: ASSETS.input,
    borderWidth: 0.3,
    padding: 14,
    borderRadius: 10,
    flexDirection: "row",
    maxHeight: 100,
  },
  "image-prompt": {
    flex: 9,

    height: "100%",
  },
  "image-prompt-submit": { alignSelf: "flex-end" },
}) satisfies Record<
  UploadStyleKey,
  StyleProp<ViewStyle | TextStyle | ImageStyle>
>;

export default UploadStyle;

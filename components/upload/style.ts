import { StyleProp, ViewStyle } from "react-native";
import { ASSETS, UPLOAD_IMAGE_AR } from "../../assets/assets";

type ImagePromptStyleKey =
  | "image-prompt-container"
  | "image-prompt"
  | "image-prompt-submit";

export const ImagePromptStyle = {
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
} satisfies Record<ImagePromptStyleKey, StyleProp<ViewStyle>>;

import { Dimensions, StyleProp, TextStyle, ViewStyle } from "react-native";
import { ASSETS, UPLOAD_IMAGE_AR } from "../../assets/assets";

type ImagePromptStyleKey =
  | "image-prompt-container"
  | "image-prompt"
  | "image-prompt-submit";

type SubmitButtonStyleKey = "submit-button" | "submit-button-text";

export const ImagePromptStyle = {
  "image-prompt-container": {
    width: "100%",
    borderColor: ASSETS.input,
    borderWidth: 0.3,
    padding: 14,
    borderRadius: 10,
    flexDirection: "row",
    maxHeight: 100,
    backgroundColor: "white",
  },
  "image-prompt": {
    flex: 9,

    height: "100%",
  },
  "image-prompt-submit": { alignSelf: "flex-end" },
} satisfies Record<ImagePromptStyleKey, StyleProp<ViewStyle>>;

export const SubmitButtonStyle = {
  "submit-button": {
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: ASSETS.main,
    bottom: Dimensions.get("screen").height * 0.2,
    borderRadius: 8,
  },
  "submit-button-text": {
    color: "white",
    fontWeight: "500",
  },
} satisfies Record<SubmitButtonStyleKey, StyleProp<ViewStyle | TextStyle>>;

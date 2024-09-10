import { Dimensions, StyleProp, TextStyle, ViewStyle } from "react-native";
import { ASSETS, UPLOAD_IMAGE_AR } from "../../assets/assets";

type ImagePromptStyleKey =
  | "image-prompt-container"
  | "image-prompt"
  | "image-prompt-submit";

type SubmitButtonStyleKey = "submit-button" | "submit-button-text";

type PromptPreviewStyleKey = "prompt-preview" | "prompt-preview-text";

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
  "image-prompt-submit": {},
} satisfies Record<ImagePromptStyleKey, StyleProp<ViewStyle>>;

export const SubmitButtonStyle = {
  "submit-button": {
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: ASSETS.main,
    marginTop: 20,
    borderRadius: 8,
  },
  "submit-button-text": {
    color: "white",
    fontWeight: "500",
  },
} satisfies Record<SubmitButtonStyleKey, StyleProp<ViewStyle | TextStyle>>;

export const PromptPreviewStyle = {
  "prompt-preview": {
    width: "90%",
    borderWidth: 0.3,
    borderColor: ASSETS.main,
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginTop: 20,
    borderRadius: 5,
    backgroundColor: ASSETS.sub,
  },
  "prompt-preview-text": {
    fontSize: 20,
  },
} satisfies Record<PromptPreviewStyleKey, StyleProp<ViewStyle | TextStyle>>;

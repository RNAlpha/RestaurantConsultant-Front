import { ASSETS } from "@_assets/assets";
import { StyleProp, ViewStyle } from "react-native";

type PromptStyleKey = "prompt-container" | "prompt" | "prompt-submit";

export const PromptStyle = {
  "prompt-container": {
    width: "100%",
    borderColor: ASSETS.input,
    borderWidth: 0.3,
    padding: 14,
    borderRadius: 10,
    flexDirection: "row",
    maxHeight: 100,
    backgroundColor: "white",
  },
  prompt: {
    flex: 9,

    height: "100%",
  },
  "prompt-submit": {},
} satisfies Record<PromptStyleKey, StyleProp<ViewStyle>>;

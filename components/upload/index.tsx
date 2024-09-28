import { TouchableOpacity, Text } from "react-native";

import { SubmitButtonStyle as SBS, PromptPreviewStyle as PPS } from "./style";

import { PromptPreviewProps } from "./type";

import { FloatElementUI } from "@_components/UI/Float";

export function SubmitButton() {
  return (
    <FloatElementUI duration={1000}>
      <TouchableOpacity style={[SBS["submit-button"]]}>
        <Text style={SBS["submit-button-text"]}>AI 컨설팅 받기</Text>
      </TouchableOpacity>
    </FloatElementUI>
  );
}

export function PromptPreview({ prompt }: PromptPreviewProps) {
  return (
    <FloatElementUI duration={1000}>
      <TouchableOpacity style={PPS["prompt-preview"]}>
        <Text style={PPS["prompt-preview-text"]}>{prompt}</Text>
      </TouchableOpacity>
    </FloatElementUI>
  );
}

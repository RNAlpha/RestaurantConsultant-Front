import {
  View,
  TextInput,
  Pressable,
  Animated,
  Keyboard,
  TouchableOpacity,
  Text,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import {
  ImagePromptStyle as IPS,
  SubmitButtonStyle as SBS,
  PromptPreviewStyle as PPS,
} from "./style";
import { ASSETS } from "@_assets/assets";
import { ImageUploadPromptProps, PromptPreviewProps } from "./type";
import {
  useCallback,
  useDeferredValue,
  useEffect,
  useRef,
  useState,
} from "react";
import { FloatElementUI } from "@_components/UI/Float";

export function SubmitButton() {
  return (
    <FloatElementUI>
      <TouchableOpacity style={[SBS["submit-button"]]}>
        <Text style={SBS["submit-button-text"]}>AI 컨설팅 받기</Text>
      </TouchableOpacity>
    </FloatElementUI>
  );
}

export function PromptPreview({ prompt }: PromptPreviewProps) {
  return (
    <FloatElementUI>
      <TouchableOpacity style={PPS["prompt-preview"]}>
        <Text style={PPS["prompt-preview-text"]}>{prompt}</Text>
      </TouchableOpacity>
    </FloatElementUI>
  );
}

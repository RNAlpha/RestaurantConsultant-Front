import { StyleProp, TextStyle, ViewStyle } from "react-native";

export interface ChatRowProps {
  style: StyleProp<ViewStyle>;
}

export interface ChatBubbleProps {
  style: StyleProp<ViewStyle>;
}

export interface ChatProps {
  text: string;
}

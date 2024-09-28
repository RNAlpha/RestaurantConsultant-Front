import { StyleProp, TextStyle, ViewStyle } from "react-native";
import { AIChatData } from "state/type";

export interface ChatRowProps {
  style: StyleProp<ViewStyle>;
  type: "question" | "answer";
}

export interface ChatBubbleProps {
  style: StyleProp<ViewStyle>;
}

export interface ChatProps {
  text: string;
}

export interface ChatRowSetProps {
  data: AIChatData;
}

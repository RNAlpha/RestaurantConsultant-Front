import { Text, View } from "react-native";
import { FloatElementUI } from "@_components/UI/Float";
import {
  ChatBubbleProps,
  ChatProps,
  ChatRowProps,
  ChatRowSetProps,
} from "./type";
import { ASSETS } from "@_assets/assets";
import { Fragment } from "react";

function ChatRow({ style, children }: React.PropsWithChildren<ChatRowProps>) {
  return (
    <FloatElementUI duration={500} startOffset={5}>
      <View
        style={[
          {
            flex: 1,
            marginVertical: 8,
          },
          style,
        ]}
      >
        {children}
      </View>
    </FloatElementUI>
  );
}

function ChatBubble({
  style,
  children,
}: React.PropsWithChildren<ChatBubbleProps>) {
  return (
    <View
      style={[
        {
          width: "60%",
          borderRadius: 10,
          paddingVertical: 7,
          paddingHorizontal: 10,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}

export function MyChat({ text }: ChatProps) {
  return (
    <ChatRow style={{ alignItems: "flex-end" }}>
      <ChatBubble style={{ backgroundColor: ASSETS.main }}>
        <Text style={{ textAlign: "right" }}>{text}</Text>
      </ChatBubble>
    </ChatRow>
  );
}

export function AIChat({ text }: ChatProps) {
  return (
    <ChatRow style={{ alignItems: "flex-start" }}>
      <ChatBubble style={{ backgroundColor: ASSETS.input }}>
        <Text style={{ textAlign: "left" }}>{text}</Text>
      </ChatBubble>
    </ChatRow>
  );
}

export function ChatRowSet({ data }: ChatRowSetProps) {
  return (
    <Fragment key={data.requestId}>
      <MyChat text={data.question}></MyChat>
      <AIChat text={data.answer}></AIChat>
    </Fragment>
  );
}

import { Text, View, Animated } from "react-native";
import { FloatElementUI } from "@_components/UI/Float";
import {
  ChatBubbleProps,
  ChatProps,
  ChatRowProps,
  ChatRowSetProps,
} from "./type";
import { ASSETS } from "@_assets/assets";
import { Fragment, useEffect, useRef } from "react";

function ChatRow({
  style,
  children,
  type,
}: React.PropsWithChildren<ChatRowProps>) {
  return (
    <FloatElementUI
      duration={500}
      startOffset={5}
      delay={type === "question" ? 0 : 200}
    >
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
          width: "auto",
          maxWidth: "60%",

          borderRadius: 10,
          paddingVertical: 7,
          paddingHorizontal: 10,

          justifyContent: "center",
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
    <ChatRow style={{ alignItems: "flex-end" }} type="question">
      <ChatBubble style={{ backgroundColor: ASSETS.main }}>
        <Text style={{ textAlign: "right" }}>{text}</Text>
      </ChatBubble>
    </ChatRow>
  );
}

function ChatPending() {
  const [o1, o2, o3] = [
    useRef(new Animated.Value(1)).current,
    useRef(new Animated.Value(1)).current,
    useRef(new Animated.Value(1)).current,
  ];

  const staggerAnim = () => {
    Animated.stagger(400, [
      Animated.loop(
        Animated.sequence([
          Animated.timing(o1, {
            duration: 1000,
            toValue: 0,
            useNativeDriver: true,
          }),
          Animated.timing(o1, {
            duration: 1000,
            toValue: 1,
            useNativeDriver: true,
          }),
        ])
      ),
      Animated.loop(
        Animated.sequence([
          Animated.timing(o2, {
            duration: 1000,
            toValue: 0,
            useNativeDriver: true,
          }),
          Animated.timing(o2, {
            duration: 1000,
            toValue: 1,
            useNativeDriver: true,
          }),
        ])
      ),
      Animated.loop(
        Animated.sequence([
          Animated.timing(o3, {
            duration: 1000,
            toValue: 0,
            useNativeDriver: true,
          }),
          Animated.timing(o3, {
            duration: 1000,
            toValue: 1,
            useNativeDriver: true,
          }),
        ])
      ),
    ]).start();
  };

  useEffect(() => {
    staggerAnim();
  }, []);

  return (
    <View
      style={{
        flexDirection: "row",
        gap: 5,
      }}
    >
      <Animated.View
        style={{
          width: 10,
          aspectRatio: 1,
          borderRadius: 100,
          backgroundColor: "black",
          opacity: o1,
        }}
      ></Animated.View>
      <Animated.View
        style={{
          width: 10,
          aspectRatio: 1,
          borderRadius: 100,
          backgroundColor: "black",
          opacity: o2,
        }}
      ></Animated.View>
      <Animated.View
        style={{
          width: 10,
          aspectRatio: 1,
          borderRadius: 100,
          backgroundColor: "black",
          opacity: o3,
        }}
      ></Animated.View>
    </View>
  );
}

export function AIChat({ text }: ChatProps) {
  return (
    <ChatRow style={{ alignItems: "flex-start" }} type="answer">
      <ChatBubble style={{ backgroundColor: ASSETS.input }}>
        {text ? (
          <Text style={{ textAlign: "left" }}>{text}</Text>
        ) : (
          <ChatPending />
        )}
      </ChatBubble>
    </ChatRow>
  );
}

export function ChatRowSet({ data }: ChatRowSetProps) {
  return (
    <Fragment>
      <MyChat text={data.question}></MyChat>
      <AIChat text={data.answer}></AIChat>
    </Fragment>
  );
}

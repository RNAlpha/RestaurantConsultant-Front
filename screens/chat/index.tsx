import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@_screens/type";
import { KeyboardAvoidingView, ScrollView } from "react-native";
import { ContainerWithHeader } from "@_layout/index";
import { Prompt } from "@_components/prompt";
import { useState } from "react";

export default function ChatScreen({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "chat">) {
  const [prompt, setPrompt] = useState<string>("");

  return (
    <ContainerWithHeader navigation={navigation}>
      <KeyboardAvoidingView
        style={{
          flex: 1,
          justifyContent: "space-between",
        }}
        behavior="height"
      >
        <ScrollView></ScrollView>
        <Prompt
          prompt={prompt}
          onChange={(prompt) => setPrompt(prompt)}
          submit={(prompt) => {}}
          placeholder="AI에게 물어보고 싶은 것을 적어보세요!"
        ></Prompt>
      </KeyboardAvoidingView>
    </ContainerWithHeader>
  );
}

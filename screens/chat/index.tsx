import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@_screens/type";
import { KeyboardAvoidingView, ScrollView } from "react-native";
import { ContainerWithHeader } from "@_layout/index";
import { Prompt } from "@_components/prompt";
import { useState } from "react";
import { ChatRowSet } from "@_components/ChatRelated";
import { useSelector } from "react-redux";
import { chatQuery } from "state/slice";
import store, { RootState } from "state/store";

export default function ChatScreen({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "chat">) {
  const submitChat = (prompt: string) => {
    store.dispatch(chatQuery(prompt));
  };
  const chatData = useSelector((state: RootState) => state.chat);

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
        <ScrollView
          style={{
            paddingHorizontal: 10,
            paddingTop: 20,
          }}
        >
          {chatData.data.map((data) => (
            <ChatRowSet key={data.requestId} data={data}></ChatRowSet>
          ))}
        </ScrollView>
        <Prompt
          prompt={prompt}
          onChange={(prompt) => setPrompt(prompt)}
          submit={() => submitChat(prompt)}
          placeholder="AI에게 물어보고 싶은 것을 적어보세요!"
        ></Prompt>
      </KeyboardAvoidingView>
    </ContainerWithHeader>
  );
}

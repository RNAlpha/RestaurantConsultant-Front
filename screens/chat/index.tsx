import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@_screens/type";
import { KeyboardAvoidingView, ScrollView } from "react-native";
import { ContainerWithHeader } from "@_layout/index";
import { Prompt } from "@_components/prompt";
import { useState } from "react";
import { AIChat, MyChat } from "@_components/ChatRelated";

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
        <ScrollView
          style={{
            paddingHorizontal: 10,
            paddingTop: 20,
          }}
        >
          <MyChat text="adadaad"></MyChat>
          <MyChat text="adadaad"></MyChat>
          <AIChat text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis varius massa a fringilla. Sed at risus suscipit, varius quam ut, pharetra nisi. Aliquam erat volutpat. Donec porttitor, ipsum eget cursus volutpat, ipsum sapien mattis ligula, quis sagittis orci tellus non lacus. Aenean porttitor venenatis justo nec pellentesque. Integer nec est eu metus facilisis varius at nec quam. Sed felis quam, luctus ut ligula eu, facilisis tempus velit. Donec hendrerit, justo ac maximus vestibulum, justo ligula imperdiet quam, quis volutpat nunc lorem in ligula. Aliquam id ante felis. Integer lobortis feugiat consequat."></AIChat>
        </ScrollView>
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

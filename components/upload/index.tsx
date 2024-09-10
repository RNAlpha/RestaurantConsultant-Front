import { View, TextInput, Pressable } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { ImagePromptStyle as IPS } from "./style";
import { ASSETS } from "../../assets/assets";
export function ImageUploadPrompt() {
  return (
    <View style={IPS["image-prompt-container"]}>
      <TextInput
        style={IPS["image-prompt"]}
        placeholder="AI에게 요구할 사항들을 적어보세요!"
        multiline
      ></TextInput>
      <Pressable style={IPS["image-prompt-submit"]}>
        <Entypo name="arrow-with-circle-up" size={24} color={ASSETS.main} />
      </Pressable>
    </View>
  );
}

import { View, TextInput, Pressable, Animated, Keyboard } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { ImagePromptStyle as IPS } from "./style";
import { ASSETS } from "@_assets/assets";
import { ImageUploadPromptProps } from "./type";
import {
  useCallback,
  useDeferredValue,
  useEffect,
  useRef,
  useState,
} from "react";
export function ImageUploadPrompt({
  prompt,
  onChange,
  submit,
}: ImageUploadPromptProps) {
  const bop = useRef(new Animated.Value(0.2)).current;
  const [btActivated, setBtActivated] = useState<boolean>(false);
  const dfBtActivated = useDeferredValue(btActivated);

  const fadeIn = useCallback(() => {
    Animated.timing(bop, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, []);

  const fadeOut = useCallback(() => {
    Animated.timing(bop, {
      toValue: 0.2,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, []);

  const submitAction = useCallback(() => {
    if (!prompt) return;
    Keyboard.dismiss();
    submit(prompt);
    onChange("");
  }, [prompt]);

  useEffect(() => {
    if (prompt && !dfBtActivated) setBtActivated(true);
    else if (!prompt && dfBtActivated) setBtActivated(false);
  }, [prompt]);

  useEffect(() => {
    if (btActivated) fadeIn();
    else fadeOut();
  }, [btActivated]);

  return (
    <View style={IPS["image-prompt-container"]}>
      <TextInput
        style={IPS["image-prompt"]}
        placeholder="AI에게 요구할 사항들을 적어보세요!"
        multiline
        value={prompt}
        onChangeText={(e) => onChange(e)}
      ></TextInput>
      <Pressable onPress={submitAction}>
        <Animated.View style={[IPS["image-prompt-submit"], { opacity: bop }]}>
          <Entypo name="arrow-with-circle-up" size={24} color={ASSETS.main} />
        </Animated.View>
      </Pressable>
    </View>
  );
}

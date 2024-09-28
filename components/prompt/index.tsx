import { PromptProps } from "./type";
import {
  useRef,
  useState,
  useDeferredValue,
  useCallback,
  useEffect,
} from "react";
import { Animated, Keyboard, View, TextInput, Pressable } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { PromptStyle as PS } from "./style";
import { ASSETS } from "@_assets/assets";

export function Prompt({ prompt, onChange, submit, placeholder }: PromptProps) {
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
    <View style={PS["prompt-container"]}>
      <TextInput
        style={PS["prompt"]}
        placeholder={placeholder}
        multiline
        value={prompt}
        onChangeText={(e) => onChange(e)}
      ></TextInput>
      <Pressable onPress={submitAction} style={{ alignSelf: "flex-end" }}>
        <Animated.View style={[PS["prompt-submit"], { opacity: bop }]}>
          <Entypo name="arrow-with-circle-up" size={24} color={ASSETS.main} />
        </Animated.View>
      </Pressable>
    </View>
  );
}

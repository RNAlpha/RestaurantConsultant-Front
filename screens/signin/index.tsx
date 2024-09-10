import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
  Animated,
} from "react-native";
import { useEffect, useRef } from "react";
import { SignInStyle as style } from "./style";
import { RootStackParamList } from "../type";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useWindowDimensions } from "react-native";

export default function SignInScreen({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "signin">) {
  const { height, width } = useWindowDimensions();

  const pwInput = useRef<TextInput>(null);

  const blink = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(blink, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(blink, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <View style={style.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} hitSlop={100}>
        <View style={[style.wrapper, { width }]}>
          <View style={[style["signin-wrapper"]]}>
            <TextInput
              style={style["signin-input"]}
              placeholder="아이디를 입력하세요."
              returnKeyType="next"
              onSubmitEditing={() => pwInput.current && pwInput.current.focus()}
            ></TextInput>
            <TextInput
              style={style["signin-input"]}
              placeholder="비밀번호를 입력하세요."
              secureTextEntry={true}
              ref={pwInput}
            ></TextInput>
            <TouchableOpacity
              style={style["signin-button"]}
              onPress={() => navigation.navigate("upload")}
            >
              <Text style={style["signin-button-text"]}>로그인</Text>
            </TouchableOpacity>
          </View>
          <View style={[style["signup-wrapper"]]}>
            <Text style={style["signup-caption"]}>계정이 없으신가요?</Text>
            <TouchableOpacity style={[style["signup-button"]]}>
              <Text style={style["signup-button-text"]}>회원가입하기</Text>
              <Animated.View
                style={[
                  style["signup-button-bottom-border"],
                  { opacity: blink },
                ]}
              ></Animated.View>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

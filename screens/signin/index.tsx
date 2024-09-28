import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
  Animated,
} from "react-native";
import { useEffect, useRef, useState } from "react";
import { SignInStyle as style } from "./style";
import { RootStackParamList } from "../type";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useWindowDimensions } from "react-native";
import { SignInData } from "api/type";

export default function SignInScreen({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "signin">) {
  const { height, width } = useWindowDimensions();

  const pwInputRef = useRef<TextInput>(null);

  const [usernameInput, setUserNameInput] = useState<string>("");
  const [pwInput, setPwInput] = useState<string>("");

  const blink = useRef(new Animated.Value(1)).current;

  const handleSignIn = async (data: SignInData) => {
    console.log(data);
    navigation.navigate("main");
  };

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
              onSubmitEditing={() =>
                pwInputRef.current && pwInputRef.current.focus()
              }
              onChange={(e) => setUserNameInput(e.nativeEvent.text)}
              autoFocus
            ></TextInput>
            <TextInput
              style={style["signin-input"]}
              placeholder="비밀번호를 입력하세요."
              secureTextEntry={true}
              ref={pwInputRef}
              onChange={(e) => setPwInput(e.nativeEvent.text)}
            ></TextInput>
            <TouchableOpacity
              style={style["signin-button"]}
              onPress={() =>
                handleSignIn({ username: usernameInput, password: pwInput })
              }
            >
              <Text style={style["signin-button-text"]}>로그인</Text>
            </TouchableOpacity>
          </View>
          <View style={[style["signup-wrapper"]]}>
            <Text style={style["signup-caption"]}>계정이 없으신가요?</Text>
            <TouchableOpacity
              style={[style["signup-button"]]}
              onPress={() => navigation.navigate("signup")}
            >
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

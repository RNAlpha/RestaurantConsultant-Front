import { useRef, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@_screens/type";
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  useWindowDimensions,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import { style } from "./style";

export default function SignUpScreen({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "signup">) {
  const { width } = useWindowDimensions();

  const [userNameInput, setUserNameInput] = useState<string>("");
  const [pwInput, setPwInput] = useState<string>("");
  const [phoneInput, setPhoneInput] = useState<string>("");

  const pwRef = useRef<TextInput>(null);
  const phoneRef = useRef<TextInput>(null);

  return (
    <View style={style.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} hitSlop={100}>
        <View style={[style.wrapper, { width }]}>
          <View style={[style["signup-wrapper"]]}>
            <TextInput
              style={style["signup-input"]}
              placeholder="아이디를 입력하세요."
              returnKeyType="next"
              onSubmitEditing={() => pwRef.current && pwRef.current.focus()}
              onChange={(e) => setUserNameInput(e.nativeEvent.text)}
            />
            <TextInput
              style={style["signup-input"]}
              placeholder="비밀번호를 입력하세요."
              secureTextEntry={true}
              ref={pwRef}
              onSubmitEditing={() =>
                phoneRef.current && phoneRef.current.focus()
              }
              onChange={(e) => setPwInput(e.nativeEvent.text)}
            />
            <TextInput
              style={style["signup-input"]}
              placeholder="휴대폰 번호를 입력하세요."
              returnKeyType="next"
              ref={phoneRef}
              keyboardType="number-pad"
              onChange={(e) => setPhoneInput(e.nativeEvent.text)}
            />
          </View>
          <TouchableOpacity
            style={style["signup-button"]}
            onPress={() => navigation.navigate("upload")}
          >
            <Text style={style["signup-button-text"]}>회원가입</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

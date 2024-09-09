import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { SignInStyle as style } from "./style";

export default function SignInScreen() {
  return (
    <View style={style.container}>
      <View style={style["signin-wrapper"]}>
        <TextInput
          style={style["signin-input"]}
          placeholder="아이디를 입력하세요."
        ></TextInput>
        <TextInput
          style={style["signin-input"]}
          placeholder="비밀번호를 입력하세요."
          secureTextEntry={true}
        ></TextInput>
        <TouchableOpacity style={style["signin-button"]}>
          <Text style={style["signin-button-text"]}>로그인</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

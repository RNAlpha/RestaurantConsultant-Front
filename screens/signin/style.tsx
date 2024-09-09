import { StyleProp, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { ASSETS } from "../../assets/assets";

type SignInStyleKey =
  | "container"
  | "signin-wrapper"
  | "signin-input"
  | "signin-button"
  | "signin-button-text";

// type SignInStyle = {
//   container: StyleProp<ViewStyle>;
//   "signin-wrapper": StyleProp<ViewStyle>;
//   signInInput: StyleProp<ViewStyle>;
//   "signin-button": StyleProp<ViewStyle>;
// };

type SignInStyle = Record<SignInStyleKey, StyleProp<ViewStyle | TextStyle>>;

export const SignInStyle: SignInStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  "signin-input": {
    width: "100%",
    borderColor: ASSETS.input,
    borderWidth: 0.3,
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
  },
  "signin-wrapper": {
    width: "70%",
    justifyContent: "center",
    alignItems: "center",
    height: "50%",
  },
  "signin-button": {
    backgroundColor: ASSETS.main,
    width: "100%",
    borderRadius: 20,
    paddingVertical: 15,
    marginTop: 50,
  },
  "signin-button-text": {
    color: "white",
    textAlign: "center",
  },
});

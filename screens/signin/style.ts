import { StyleProp, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { ASSETS } from "../../assets/assets";

type SignInStyleKey =
  | "container"
  | "wrapper"
  | "signin-wrapper"
  | "signin-input"
  | "signin-button"
  | "signin-button-text"
  | "signup-wrapper"
  | "signup-caption"
  | "signup-button"
  | "signup-button-text"
  | "signup-button-bottom-border";

type SignInStyle = Record<SignInStyleKey, StyleProp<ViewStyle | TextStyle>>;

export const SignInStyle: SignInStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  wrapper: {
    flex: 1,
    justifyContent: "space-around",

    alignItems: "center",
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
    justifyContent: "flex-start",

    alignItems: "center",
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
  "signup-wrapper": {
    width: "100%",
  },
  "signup-button": {
    marginTop: 3,

    alignSelf: "center",
  },
  "signup-button-text": {
    textAlign: "center",
    fontSize: 20,
    color: ASSETS.main,
    fontWeight: "bold",
    paddingVertical: 4,
  },
  "signup-button-bottom-border": {
    backgroundColor: ASSETS.main,
    height: 3,
  },
  "signup-caption": {
    textAlign: "center",
  },
});

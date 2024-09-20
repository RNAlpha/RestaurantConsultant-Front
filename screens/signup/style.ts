import {
  StyleProp,
  ViewStyle,
  TextStyle,
  StyleSheet,
  Dimensions,
} from "react-native";
import { ASSETS } from "@_assets/assets";

type SignUpStyleKey =
  | "container"
  | "wrapper"
  | "signup-wrapper"
  | "signup-input"
  | "signup-button"
  | "signup-button-text"
  | "signup-header";

type SignUpStyle = Record<SignUpStyleKey, StyleProp<ViewStyle | TextStyle>>;

export const style: SignUpStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  wrapper: {
    flex: 1,
    justifyContent: "flex-start",

    alignItems: "center",
  },
  "signup-wrapper": {
    width: "70%",
    justifyContent: "flex-start",
    marginTop: Dimensions.get("screen").height * 0.1,
    alignItems: "center",
  },
  "signup-input": {
    width: "100%",
    borderColor: ASSETS.input,
    borderWidth: 0.3,
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
  },
  "signup-button": {
    backgroundColor: ASSETS.main,
    width: "100%",
    borderRadius: 20,
    paddingVertical: 15,
    marginTop: 50,
  },
  "signup-button-text": {
    color: "white",
    textAlign: "center",
  },
  "signup-header": {
    backgroundColor: "transparent",
  },
});

import { StyleProp, StyleSheet, ViewStyle } from "react-native";

type CameraStyleKey = "camera";

const style: Record<CameraStyleKey, StyleProp<ViewStyle>> = StyleSheet.create({
  camera: {
    flex: 1,
  },
});

export default style;

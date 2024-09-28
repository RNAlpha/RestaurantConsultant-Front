import { PropsWithChildren, useRef, useEffect } from "react";
import { Animated } from "react-native";
import { FloatElementUIProps } from "./type";

export function FloatElementUI({
  children,
  duration,
  startOffset,
  delay,
}: PropsWithChildren<FloatElementUIProps>) {
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(startOffset)).current;

  const float = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration,
      delay,
      useNativeDriver: true,
    }).start();
    Animated.timing(translateY, {
      toValue: 0,
      duration,
      delay,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    float();
  }, []);
  return (
    <Animated.View style={{ opacity, transform: [{ translateY }] }}>
      {children}
    </Animated.View>
  );
}

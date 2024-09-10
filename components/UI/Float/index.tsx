import { PropsWithChildren, useRef, useEffect } from "react";
import { Animated, View } from "react-native";

export function FloatElementUI({ children }: PropsWithChildren) {
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(20)).current;

  const duration = 1000;

  const float = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration,
      useNativeDriver: true,
    }).start();
    Animated.timing(translateY, {
      toValue: 0,
      duration,
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

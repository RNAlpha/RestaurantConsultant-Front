import {
  View,
  TouchableOpacity,
  Text,
  useWindowDimensions,
} from "react-native";
import style from "./style";
import Fontisto from "@expo/vector-icons/Fontisto";

export default function UploadScreen() {
  const { width } = useWindowDimensions();

  return (
    <View style={style.container}>
      <TouchableOpacity style={style["upload-button"]}>
        <Fontisto name="photograph" size={width * 0.3} color="green" />
        <Text style={[style["upload-button-text"], { fontSize: width * 0.05 }]}>
          매장의 사진을 추가해보세요!
        </Text>
      </TouchableOpacity>
    </View>
  );
}

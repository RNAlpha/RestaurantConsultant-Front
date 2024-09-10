import {
  View,
  TouchableOpacity,
  Text,
  useWindowDimensions,
} from "react-native";
import style from "./style";
import Fontisto from "@expo/vector-icons/Fontisto";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { useCallback, useMemo, useRef } from "react";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import * as ImagePicker from "expo-image-picker";

export default function UploadScreen() {
  const { width } = useWindowDimensions();

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const bottomSheetPresent = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const snapPoints = useMemo(() => ["45%", "50%"], []);

  const openImageLibrary = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });
  };

  const openCamera = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();

    if (permission.granted) {
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
      });
    }
  };

  return (
    <BottomSheetModalProvider>
      <View style={style.container}>
        <TouchableOpacity
          style={style["upload-button"]}
          onPress={bottomSheetPresent}
        >
          <Fontisto name="photograph" size={width * 0.3} color="green" />
          <Text
            style={[style["upload-button-text"], { fontSize: width * 0.05 }]}
          >
            매장의 사진을 추가해보세요!
          </Text>
        </TouchableOpacity>
        <BottomSheetModal ref={bottomSheetModalRef} snapPoints={snapPoints}>
          <BottomSheetView style={[style["bottom-sheet-view"]]}>
            <TouchableOpacity
              style={style["bottom-sheet-button"]}
              onPress={() => openCamera()}
            >
              <Feather name="camera" size={width * 0.2} color="black" />
              <Text>사진을 찍어보세요!</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={style["bottom-sheet-button"]}
              onPress={() => {
                openImageLibrary();
              }}
            >
              <FontAwesome name="photo" size={width * 0.2} color="black" />
              <Text>사진을 선택하세요!</Text>
            </TouchableOpacity>
          </BottomSheetView>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
}

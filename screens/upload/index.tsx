import {
  View,
  TouchableOpacity,
  Text,
  useWindowDimensions,
  KeyboardAvoidingView,
  Keyboard,
  Pressable,
} from "react-native";
import style from "./style";
import Fontisto from "@expo/vector-icons/Fontisto";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { useCallback, useMemo, useRef, useState } from "react";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import * as ImagePicker from "expo-image-picker";
import { Image } from "expo-image";

import { ImageUploadPrompt, SubmitButton } from "@_components/upload/index";

export default function UploadScreen() {
  const { width, height } = useWindowDimensions();

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const [image, setImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState<string>("");

  const [submittedPrompt, setSubmittedPrompt] = useState<string>("");

  const imageOption: ImagePicker.ImagePickerOptions = useMemo(() => {
    return {
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
      aspect: [3, 4],
    };
  }, []);

  const bottomSheetPresent = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const bottomSheetDismiss = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

  const snapPoints = useMemo(() => ["45%", "50%"], []);

  const openImageLibrary = async () => {
    const result = await ImagePicker.launchImageLibraryAsync(imageOption);
    result.assets && setImage(result.assets[0].uri);
    bottomSheetDismiss();
  };

  const openCamera = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();

    if (permission.granted) {
      const result = await ImagePicker.launchCameraAsync(imageOption);
      result.assets && setImage(result.assets[0].uri);
      bottomSheetDismiss();
    }
  };

  return (
    <BottomSheetModalProvider>
      <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
        <View
          style={{
            position: "absolute",
            flex: 1,
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          {submittedPrompt && <SubmitButton />}
        </View>
        <KeyboardAvoidingView style={style.container} behavior="height">
          <View style={style["upload-preview-container"]}>
            <TouchableOpacity
              style={style["upload-preview"]}
              onPress={() => {
                Keyboard.dismiss();
                bottomSheetPresent();
              }}
            >
              {!image ? (
                <>
                  <Fontisto
                    name="photograph"
                    size={width * 0.3}
                    color="green"
                  />
                  <Text
                    style={[
                      style["upload-button-text"],
                      { fontSize: width * 0.05 },
                    ]}
                  >
                    매장의 사진을 추가해보세요!
                  </Text>
                </>
              ) : (
                <Image
                  source={{ uri: image }}
                  style={style["image-preview"]}
                  contentFit="cover"
                />
              )}
            </TouchableOpacity>
            {submittedPrompt && (
              <TouchableOpacity style={style["prompt-preview"]}>
                <Text style={style["prompt-preview-text"]}>
                  {submittedPrompt}
                </Text>
              </TouchableOpacity>
            )}
          </View>
          <ImageUploadPrompt
            prompt={prompt}
            onChange={(prompt) => setPrompt(prompt)}
            submit={(prompt) => setSubmittedPrompt(prompt)}
          />

          <BottomSheetModal ref={bottomSheetModalRef} snapPoints={snapPoints}>
            <BottomSheetView style={[style["bottom-sheet-view"]]}>
              <TouchableOpacity
                style={style["bottom-sheet-button"]}
                onPress={() => openCamera()}
              >
                <Feather name="camera" size={width * 0.2} color={"green"} />
                <Text style={style["bottom-sheet-button-text"]}>
                  사진을 찍어보세요!
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={style["bottom-sheet-button"]}
                onPress={() => {
                  openImageLibrary();
                }}
              >
                <FontAwesome name="photo" size={width * 0.2} color={"green"} />
                <Text style={style["bottom-sheet-button-text"]}>
                  사진을 선택하세요!
                </Text>
              </TouchableOpacity>
            </BottomSheetView>
          </BottomSheetModal>
        </KeyboardAvoidingView>
      </Pressable>
    </BottomSheetModalProvider>
  );
}

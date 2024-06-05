import { Image, Pressable, StyleSheet, TouchableOpacity, View, Button } from "react-native";
import ActionButton from "./SubButton/ActionButton";
import CenterButton from "./SubButton/CenterButton";
import { useEffect, useRef, useState } from "react";
import EmojiPicker from "./Emoji/EmojiPicker";
import Emoji from "./Emoji/Emoji";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ContentWriter from "./Content/ContentWriter";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import ViewShot, { captureRef } from "react-native-view-shot";
import * as MediaLibrary from "expo-media-library";

export default function SavedPhoto({ route, source }) {
    const [imageUri, setImageUri] = useState(source);
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [pickedEmoji, setPickedEmoji] = useState(null);
    const [showContentWriter, setShowContentWriter] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [isImageLoading, setIsImageLoading] = useState(false);
    const navigation = useNavigation();
    const cameraRef = useRef();

    useEffect(() => {
        if (route !== undefined) {
            setImageUri(route.params.image);
            setInputValue(route.params.content);
        }
    }, [route]);

    const saveAction = async () => {
        if (isPickedEmoji() || !isImageLoading) {
            setIsImageLoading(true);
            const newImageUri = await takeScreenshot();
            const asset = await MediaLibrary.createAssetAsync(newImageUri);
            setImageUri(asset.uri);
            setIsImageLoading(false);
            setPickedEmoji(null);
        }
    };

    const contentAction = () => {
        setShowContentWriter(true);
    };

    const addEmojiAction = () => {
        setShowEmojiPicker(true);
    };

    const nextAction = async () => {
        navigation.navigate("PreviewPost", {
            image: imageUri,
            content: inputValue,
        });
    };

    const takeScreenshot = async () => {
        if (cameraRef.current) {
            try {
                const newImageUri = await captureRef(cameraRef, {
                    format: "png",
                    quality: 0.75,
                });
                return newImageUri;
            } catch (error) {
                console.log("Error when take a screenshot: " + error);
            }
        }
    };

    const isPickedEmoji = () => {
        return pickedEmoji !== null;
    };

    return (
        <GestureHandlerRootView style={styles.container}>
            <ViewShot ref={cameraRef} collapsable={false}>
                <Image source={{ uri: imageUri }} style={styles.image} />
                {pickedEmoji && <Emoji emoji={pickedEmoji} size={40} />}
            </ViewShot>
            <View style={styles.iconButtonContainer}>
                <ActionButton onPress={saveAction} iconName={"save-outline"} iconSize={30} iconColor={"#fff"} title={"Save"} />
                <CenterButton onPress={addEmojiAction} visible={showEmojiPicker} />
                <ActionButton onPress={contentAction} iconName={"chatbubble-outline"} iconSize={30} iconColor={"#fff"} title={"Content"} />
            </View>
            <View style={styles.nextButtonContainer}>
                <Pressable onPress={nextAction} disabled={isImageLoading}>
                    <Ionicons name={"arrow-forward-circle-outline"} size={30} color={isImageLoading ? "#ccc" : "#fff"} />
                </Pressable>
            </View>

            {showEmojiPicker && (
                <EmojiPicker
                    onSelectEmoji={setPickedEmoji}
                    onClose={() => {
                        setShowEmojiPicker(false);
                    }}
                />
            )}

            {showContentWriter && <ContentWriter isVisible={showContentWriter} onClose={() => setShowContentWriter(false)} inputValue={inputValue} onChangeText={(val) => setInputValue(val)} />}
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: "100%",
        height: "100%",
    },
    iconButtonContainer: {
        position: "absolute",
        bottom: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        paddingHorizontal: 40,
        paddingBottom: 40,
    },
    nextButtonContainer: {
        position: "absolute",
        top: 20,
        right: 20,
    },
});

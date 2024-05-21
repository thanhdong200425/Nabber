import { Text, View, StyleSheet, Button, TouchableOpacity, Pressable, Alert, BackHandler } from "react-native";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { useCameraPermissions, CameraView } from "expo-camera";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";
import SavedPhoto from "./SavedPhoto";
import { useFocusEffect } from "@react-navigation/native";
import { PhotoUriContext } from "../../components/CommonComponent/PhotoUriContext";
import { getToken } from "../../helper_functions/handleToken";
import { baseUrl } from "../Login-WelcomeScreen/LoginScreen/LoginScreen";

export default function AddStoryPage({ navigation }) {
    const [facing, setFacing] = useState("back");
    const [photoUri, setPhotoUri] = useContext(PhotoUriContext);
    const [permission, requestCameraPermission] = useCameraPermissions();
    const [libraryPermission, requestLibraryPermission] = ImagePicker.useMediaLibraryPermissions();
    const cameraRef = useRef(null);

    useEffect(() => {
        const backAction = async () => {
            if (photoUri) {
                Alert.alert("Discard Photo?", "Are you sure you want to discard this photo?", [
                    {
                        text: "Cancel",
                        style: "cancel",
                    },
                    {
                        text: "Discard",
                        onPress: () => {
                            setPhotoUri(null);
                            navigation.goBack();
                        },
                    },
                ]);
                return true;
            } else {
                const loginToken = await getToken("loginToken");
                const userId = await getToken("userId");
                const fetchUserInfo = await fetch(baseUrl + "post/get-user", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        logintoken: loginToken,
                    },
                    body: JSON.stringify({ id: userId }),
                });
                if (fetchUserInfo.status === 200) {
                    const user = await fetchUserInfo.json();
                    console.log(user.data);
                    navigation.push("MainApp", {
                        user: user.data,
                    });
                }
                return true;
            }
            return false;
        };
        const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);
        return () => {
            backHandler.remove();
        };
    }, [photoUri, navigation]);

    const takeAndSavePhoto = async function () {
        if (cameraRef.current) {
            const options = { quality: 0.75, base64: true };
            const photo = await cameraRef.current.takePictureAsync(options);
            const asset = await MediaLibrary.createAssetAsync(photo.uri);
            setPhotoUri(asset.uri);
        }
    };

    const toggleCameraFacing = function () {
        setFacing((value) => (value === "back" ? "front" : "back"));
    };

    const openLibraryAsync = async function () {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            quality: 1,
            aspect: [4, 3],
        });
        setPhotoUri(result.assets);
    };

    if (!permission || !libraryPermission) {
        return <View />;
    }

    if (!permission.granted) {
        return (
            <View style={{ ...styles.container, alignItems: "center" }}>
                <Text style={styles.textRequest}>We need your permission to show the camera</Text>
                <Pressable onPress={requestCameraPermission} style={styles.buttonRequest}>
                    <Text style={{ color: "#fff" }}>Grant permission</Text>
                </Pressable>
            </View>
        );
    }

    if (!libraryPermission.granted) {
        return (
            <View style={{ ...styles.container, alignItems: "center" }}>
                <Text style={styles.textRequest}>We need your permission to save your photo</Text>
                <Pressable onPress={requestLibraryPermission} style={styles.buttonRequest}>
                    <Text style={{ color: "#fff" }}>Grant permission</Text>
                </Pressable>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {!photoUri ? (
                <CameraView style={styles.camera} facing={facing} ref={cameraRef}>
                    <View style={styles.actionContainer}>
                        <TouchableOpacity style={{ paddingBottom: 20 }} onPress={openLibraryAsync}>
                            <Ionicons name="images-outline" size={35} color={"#fff"} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonContainer} onPress={takeAndSavePhoto}>
                            <View style={styles.button} />
                        </TouchableOpacity>

                        <TouchableOpacity style={{ paddingBottom: 15 }} onPress={toggleCameraFacing}>
                            <Ionicons name={"camera-reverse-outline"} size={40} color={"#fff"} />
                        </TouchableOpacity>
                    </View>
                </CameraView>
            ) : (
                <SavedPhoto source={photoUri} />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    camera: {
        flex: 1,
    },
    actionContainer: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "transparent",
        alignItems: "flex-end",
        justifyContent: "space-between",
        marginBottom: 30,
        marginHorizontal: 30,
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
    },
    buttonContainer: {
        maxWidth: 90,
        maxHeight: 90,
        borderWidth: 20,
        borderColor: "rgba(223, 199, 211, 0.15)",
        width: "100%",
        height: "100%",
        borderRadius: 40,
        backgroundColor: "#fff",
    },
    button: {
        width: "100%",
        height: "100%",
    },
    textRequest: {
        fontSize: 18,
        fontWeight: "500",
        marginBottom: 10,
    },
    buttonRequest: {
        borderRadius: 15,
        backgroundColor: "blue",
        padding: 10,
    },
});

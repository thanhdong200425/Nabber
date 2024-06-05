import { Image, Pressable, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";
import { baseUrl } from "../Login-WelcomeScreen/LoginScreen/LoginScreen";
import { getToken } from "../../helper_functions/handleToken";
import { ResetPhotoUriContext } from "./AddStoryPage";
import { PhotoUriContext } from "../CommonComponent/PhotoUriContext";

export default function PreviewPost({ route }) {
    const [image, setImage] = useState(null);
    const [content, setContent] = useState("");
    const navigation = useNavigation();
    const [photoUri, setPhotoUri] = useContext(PhotoUriContext);
    useEffect(() => {
        if (route !== undefined) {
            setImage(route.params.image);
            setContent(route.params.content);
        }
    }, [route]);
    const backAction = () => {
        navigation.navigate("SavedPhoto", {
            image: image,
            content: content,
        });
    };

    const postAction = async () => {
        try {
            const userId = await getToken("userId");
            const loginToken = await getToken("loginToken");
            const data = JSON.stringify({ userId: userId, content: content, image: image });
            const response = await fetch(baseUrl + "post/add-post", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    logintoken: loginToken,
                },
                body: data,
            });
            setPhotoUri(null);
            navigation.navigate("AddStoryPage");
        } catch (error) {
            console.log("Error when add post: " + error);
        }
    };

    return (
        <LinearGradient colors={["#84fab0", "#8fd3f4"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.container}>
            {/* Preview Container */}
            <View style={styles.previewContainer}>
                <Image source={{ uri: image }} style={styles.previewImage} resizeMode="cover" />
                {content && (
                    <View style={styles.previewContentContainer}>
                        <Text style={styles.previewContent}>{content}</Text>
                    </View>
                )}
            </View>

            {/* Action Bar */}
            <View style={styles.actionBar}>
                <TouchableOpacity style={styles.actionButton} onPress={backAction}>
                    <Icon name="arrow-back" size={30} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton} onPress={postAction}>
                    <Icon name="paper-plane-outline" size={30} color="#fff" />
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    previewContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    previewImage: {
        width: "100%",
        height: "70%",
        borderRadius: 20,
    },
    previewContentContainer: {
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        padding: 15,
        marginTop: 15,
        borderRadius: 15,
        width: "90%",
    },
    previewContent: {
        fontSize: 17,
    },
    actionBar: {
        // Stylish action bar
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10,
        backgroundColor: "rgba(0, 0, 0, 0.05)",
        borderRadius: 20,
        marginTop: 20,
    },
    actionButton: {
        padding: 15,
        borderRadius: 50,
    },
});

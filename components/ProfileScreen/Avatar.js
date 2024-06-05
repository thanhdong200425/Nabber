import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useState } from "react";
import { deleteToken } from "../../helper_functions/handleToken";
import { useNavigation } from "@react-navigation/native";
export default function Avatar(props) {
    const [isShowOptions, setIsShowOptions] = useState(false);
    const [isPressed, setIsPressed] = useState(false);
    const navigation = useNavigation();

    const showOptions = () => {
        setIsShowOptions(!isShowOptions);
    };

    const signOutFunction = async () => {
        await deleteToken("loginToken");
        navigation.reset({
            index: 0,
            routes: [{ name: "LoginScreen" }],
        });
    };
    return (
        <View>
            <Pressable style={styles.container} onPress={showOptions}>
                <LinearGradient colors={["#8A2387", "#E94057", "#F27121"]} style={styles.imageContainer}>
                    <Image source={props.imageSrc} style={styles.image} />
                </LinearGradient>

                <View style={styles.textContainer}>
                    <Text style={styles.fullNameStyle}>{props.avatarFullName}</Text>
                    <Text style={styles.userNameStyle}>{props.avatarUserName}</Text>
                </View>
            </Pressable>
            {isShowOptions && (
                <View style={styles.dropdownContainer}>
                    <Pressable style={{ ...styles.dropdownElement, backgroundColor: isPressed === 1 ? "#fff" : "#000" }} onPressIn={() => setIsPressed(1)} onPressOut={() => setIsPressed(false)}>
                        <Text style={{ ...styles.dropdownText, color: isPressed === 1 ? "#000" : "#fff" }}>Edit profile</Text>
                    </Pressable>
                    <Pressable
                        style={{ ...styles.dropdownElement, backgroundColor: isPressed === 2 ? "#fff" : "#000" }}
                        onPressIn={() => setIsPressed(2)}
                        onPress={() => {
                            setIsPressed(false);
                            signOutFunction();
                        }}
                    >
                        <Text style={{ ...styles.dropdownText, color: isPressed === 2 ? "#000" : "#fff" }}>Sign out</Text>
                    </Pressable>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        position: "absolute",
        bottom: -20,
        alignSelf: "center",
        alignItems: "center",
    },
    imageContainer: {
        width: 73.5,
        height: 73.5,
        padding: 5,
        borderRadius: 35.5,
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 35.5,
    },
    textContainer: {
        marginTop: 7,
    },
    fullNameStyle: {
        fontWeight: "700",
        fontSize: 18,
    },
    userNameStyle: {
        fontWeight: "400",
        textAlign: "center",
    },
    dropdownContainer: {
        position: "absolute",
        top: -105,
        left: 280,
        backgroundColor: "#090909",
        padding: 5,
        borderRadius: 10,
        paddingVertical: 10,
    },
    dropdownElement: {
        margin: 5,
        padding: 7,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#fff",
    },
    dropdownText: {
        color: "#fff",
        textAlign: "center",
        fontWeight: "500",
    },
});

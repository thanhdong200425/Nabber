import { useState } from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function BottomInput({ inputValue, setInputValue, addAComment, setIsSendButtonClick }) {
    const [backgroundColorSendButton, setBackgroundColorSendButton] = useState("rgb(13, 110, 253)");
    const [colorSendButton, setColorSendButton] = useState("#fff");
    const changeColorForSendButton = () => {
        setBackgroundColorSendButton("#fff");
        setColorSendButton("rgb(13, 110, 253)");
    };

    const resetColorForSendButton = () => {
        setBackgroundColorSendButton("rgb(13, 110, 253)");
        setColorSendButton("#fff");
        setIsSendButtonClick(true);
    };

    const makeRequest = () => {
        resetColorForSendButton();
        setInputValue("");
        addAComment();
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput value={inputValue} onChangeText={(value) => setInputValue(value)} placeholder="Write a comment..." style={styles.textInput} />
            <Pressable style={{ ...styles.sendButton, backgroundColor: backgroundColorSendButton }} onPressIn={changeColorForSendButton} onPressOut={makeRequest}>
                <Ionicons name="paper-plane-outline" size={25} color={colorSendButton} />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: "#e0e0e0",
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#eeeeee",
        flexDirection: "row",
    },
    textInput: {
        height: 40,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 10,
        width: "87%",
        marginRight: 10,
    },
    sendButton: {
        justifyContent: "center",
        padding: 5,
        borderRadius: 10,
    },
});

import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function InputField(props) {
    const isSecureField = props.isSecure ? props.isSecure : false;

    const [isHidden, setIsHidden] = useState(isSecureField);

    function show() {
        setIsHidden(!isHidden);
    }

    const passwordField = (
        <View style={styles.inputContainer}>
            <TextInput value={props.value} onChangeText={props.onChangeText} style={styles.textInputStyle} secureTextEntry={isHidden} />
            {isSecureField && (
                <TouchableOpacity onPress={show}>
                    <Ionicons name={isHidden ? "eye-outline" : "eye-off-outline"} size={24} />
                </TouchableOpacity>
            )}
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>{props.inputTitle}</Text>
            {isSecureField ? passwordField : <TextInput value={props.value} onChangeText={props.onChangeText} style={styles.textInputStyle} />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        gap: 10,
    },
    textInputStyle: {
        backgroundColor: "#D3D3D3",
        borderRadius: 20,
        height: 46,
        paddingLeft: 15,
    },
    textStyle: {
        fontSize: 18,
        fontWeight: "500",
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#D3D3D3",
        borderRadius: 20,
        height: 46,
        paddingLeft: 5,
        paddingRight: 15,
        justifyContent: "space-between",
    },
});

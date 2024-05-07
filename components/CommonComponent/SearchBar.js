import {StyleSheet, TextInput, View} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {useState} from "react";

export default function SearchBar() {
    const [textInputValue, setTextInputValue] = useState("");

    return <View style={styles.container}>
        <View style={styles.insideContainer}>
            <Ionicons name={"search"} size={20} color={styles.textColor}/>
            <TextInput defaultValue={textInputValue} onChangeText={setTextInputValue} placeholder={"Find notification"} placeholderTextColor={"rgba(255,255,255,0.8)"} style={styles.textColor}/>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        maxHeight: 60,
        paddingHorizontal: 25,
        marginVertical: 10
    },
    insideContainer: {
        flexDirection: "row",
        width: "100%",
        height: "100%",
        alignItems: "center",
        backgroundColor: "#635A8F",
        borderRadius: 25,
        gap: 13,
        paddingHorizontal: 25
    },
    textColor: {
        color: "rgba(255,255,255,0.8)"
    }
})
import { StyleSheet, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function InteractiveIcon({ iconName, numberInteractive, color, onPress }) {
    return (
        <View style={style.container}>
            <Ionicons name={iconName} size={style.iconSize} color={color} onPress={onPress}/>
            <Text style={style.text}>{numberInteractive}</Text>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        flexDirection: "row",
        alignItems: "center",
    },
    iconSize: 24,
    text: {
        fontSize: 12,
        fontWeight: "700",
        padding: 5,
    },
});

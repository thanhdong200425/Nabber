import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function CenterButton(props) {
    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <View style={styles.circleButton}>
                <Ionicons name={"add-outline"} size={40} />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 84,
        height: 84,
        padding: 3,
        borderWidth: 4,
        borderColor: "#ffd33d",
        borderRadius: 42,
    },
    circleButton: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 42,
        backgroundColor: "#fff",
    },
});

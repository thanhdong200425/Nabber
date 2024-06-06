import { StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function CompleteButton({ onPress }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Ionicons name={"checkmark-outline"} size={24} color={"#000"} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
    },
});

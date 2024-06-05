import {StyleSheet, TouchableOpacity} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function BackButton({onPress}) {
    return <TouchableOpacity onPress={onPress} style={styles.containerButton}>
        <Ionicons name={"chevron-back-outline"} size={24} color={"#000"}/>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    containerButton: {
        marginRight: 15
    }
})
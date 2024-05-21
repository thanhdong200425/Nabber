import {StyleSheet, Text, TouchableOpacity} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function ActionButton(props) {
    return <TouchableOpacity style={styles.container} onPress={props.onPress}>
        <Ionicons name={props.iconName} size={props.iconSize} color={props.iconColor}/>
        <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    text: {
        color: "#fff"
    },
    container: {
        justifyContent: "center",
        alignItems: "center",
        gap: 5
    }
})
import { StyleSheet, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function OptionsLogin(props) {
    const iconName = props.iconsName;
    return (
        <View style={styles.container}>
            <Text style={styles.contentStyle}>{props.content}</Text>
            <View style={styles.iconContainer}>
                <Ionicons name={iconName[0]} size={28} />
                <Ionicons name={iconName[1]} size={28} color={"#3b5998"} />
                <Ionicons name={iconName[2]} size={28} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    iconContainer: {
        flexDirection: "row",
        gap: 8,
    },
    contentStyle: {
        color: "#36454F",
        fontSize: 18,
        fontWeight: "500",
    },
});

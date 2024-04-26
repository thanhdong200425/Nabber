import { StyleSheet, Text, View } from "react-native";

export default function ProfileStat(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.textNumber}>{props.stat}</Text>
            <Text style={styles.textStat}>{props.fieldStat}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 12,
    },
    textStat: {
        fontSize: 16,
        fontWeight: "300",
    },
    textNumber: {
        fontWeight: "700",
        fontSize: 20,
    },
});

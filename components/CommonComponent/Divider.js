import { StyleSheet, View } from "react-native";

export default function Divider() {
    return <View style={styles.divider} />;
}

const styles = StyleSheet.create({
    divider: {
        borderLeftWidth: 1,
        borderColor: "#000",
        marginHorizontal: 14,
    },
});

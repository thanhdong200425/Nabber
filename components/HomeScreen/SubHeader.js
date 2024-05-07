import { StyleSheet, Text, View } from "react-native";

export default function SubHeader(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.content}>{props.content}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 16,
    },
    content: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "400",
    },
});

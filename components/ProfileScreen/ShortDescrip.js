import { StyleSheet, Text, View } from "react-native";

export default function ShortDescription(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>"{props.content}"</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginTop: 18,
    },
    text: {
        fontSize: 16,
        fontStyle: "italic",
        fontWeight: "400",
    },
});

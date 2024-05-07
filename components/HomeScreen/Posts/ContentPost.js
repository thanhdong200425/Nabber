import { StyleSheet, Text, View } from "react-native";

export default function ContentPost(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.content}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    text: {
        lineHeight: 25,
        fontSize: 16,
    },
});

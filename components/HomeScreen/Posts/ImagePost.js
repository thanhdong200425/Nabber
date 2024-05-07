import { Image, StyleSheet, View } from "react-native";

export default function ImagePost(props) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={props.src} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 200,
        maxHeight: 200,
        marginVertical: 16,
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 12,
        overflow: "hidden",
    },
});

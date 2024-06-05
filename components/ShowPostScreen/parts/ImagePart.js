import { Image, StyleSheet, View } from "react-native";

export default function ImagePart({ src }) {
    return (
        <View style={styles.container}>
            <Image source={src} style={styles.image} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    image: {
        width: "100%",
        height: 350,
        borderRadius: 12,
        borderWidth: 3,
        borderColor: "#fff",
    },
});

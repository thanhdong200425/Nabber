import { Image, StyleSheet, View } from "react-native";

export default function PostBig({src, width = 180, height = 273}) {
    return (
        <View style={styles.container}>
            <Image source={src} style={{...styles.image, width: width, height: height}} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 180,
        height: 273,
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 12,
    },
});

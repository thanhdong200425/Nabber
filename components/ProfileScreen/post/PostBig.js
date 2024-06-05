import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function PostBig({ src, width = 180, height = 273, navigation }) {
    return (
        <TouchableOpacity style={styles.container} onPress={navigation}>
            <Image source={src} style={{ ...styles.image, width: width, height: height }} />
        </TouchableOpacity>
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

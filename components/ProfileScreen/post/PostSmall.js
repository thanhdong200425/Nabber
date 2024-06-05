import { Image, StyleSheet, View, TouchableOpacity } from "react-native";

export default function PostSmall(props) {
    return (
        <TouchableOpacity style={styles.container} onPress={props.navigation}>
            <Image source={props.src} style={styles.image} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 180,
        height: 131,
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 12,
    },
});

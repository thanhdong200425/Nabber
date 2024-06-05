import { Image, StyleSheet, TouchableOpacity } from "react-native";
import PostBig from "./PostBig";

export default function SinglePostRow(props) {
    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <Image source={props.imageSrc} width={370} height={273} style={styles.image} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        borderRadius: 12,
    },
});

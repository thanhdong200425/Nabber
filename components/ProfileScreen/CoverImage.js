import { Image, StyleSheet, View } from "react-native";
import Avatar from "./Avatar";
import { demoPicture } from "../../assets/resource";

export default function CoverImage(props) {
    return (
        <View style={styles.container}>
            <Image source={props.imageSrc} style={styles.image} resizeMode="cover" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "relative",
        width: "100%",
        maxHeight: 230,
    },
    image: {
        width: "100%",
        height: 227,
    },
});

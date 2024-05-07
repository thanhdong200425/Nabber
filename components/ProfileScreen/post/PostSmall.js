import { Image, StyleSheet, View } from "react-native";

export default function PostSmall(props) {
    return (
        <View style={styles.container}>
            <Image source={props.src} style={styles.image} />
        </View>
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

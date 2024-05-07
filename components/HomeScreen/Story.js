import { Image, StyleSheet, View } from "react-native";

export default function Story(props) {
    return (
        <View style={styles.outsideContainer}>
            <Image source={{ uri: props.uri }} style={styles.image} />
        </View>
    );
}

const styles = StyleSheet.create({
    outsideContainer: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginLeft: 25,
    },
    image: {
        overflow: "hidden",
        width: "100%",
        height: "100%",
        borderRadius: 50,
    },
});

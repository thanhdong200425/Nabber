import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View, Image, Text } from "react-native";

export default function Avatar(props) {
    return (
        <View style={styles.container}>
            <LinearGradient colors={["#8A2387", "#E94057", "#F27121"]} style={styles.imageContainer}>
                <Image source={props.imageSrc} style={styles.image} />
            </LinearGradient>

            <View style={styles.textContainer}>
                <Text style={styles.fullNameStyle}>{props.avatarFullName}</Text>
                <Text style={styles.userNameStyle}>{props.avatarUserName}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        position: "absolute",
        bottom: -20,
        alignSelf: "center",
        alignItems: "center",
    },
    imageContainer: {
        width: 73.5,
        height: 73.5,
        padding: 5,
        borderRadius: 35.5,
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 35.5,
    },
    textContainer: {
        marginTop: 7,
    },
    fullNameStyle: {
        fontWeight: "700",
        fontSize: 18,
    },
    userNameStyle: {
        fontWeight: "400",
        textAlign: "center",
    },
});

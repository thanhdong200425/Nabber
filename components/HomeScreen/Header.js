import { Image, StyleSheet, View, Text, StatusBar } from "react-native";
import { logo } from "../../assets/resource";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Header(props) {
    return (
        <View style={styles.outsideContainer}>
            <View style={styles.imageContainer}>
                <Image source={props.uri} style={styles.image} />
            </View>

            <View>
                <Ionicons name={props.iconName} style={styles.textDisplay} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    outsideContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        backgroundColor: "#000",
        height: 50,
    },
    textDisplay: {
        color: "#fff",
        fontSize: 24,
    },
    imageContainer: {
        width: 28,
        height: 35,
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
    },
});

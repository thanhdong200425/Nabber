import { Image, StyleSheet, Text, View } from "react-native";

export default function TitlePost(props) {
    return (
        <View style={styles.container}>
            {/* Left side */}
            <View style={styles.leftContainer}>
                <Image source={props.src} style={styles.image} />
                <View style={styles.textLeftContainer}>
                    <Text style={{ fontWeight: "700" }}>{props.namePerson}</Text>
                    <Text style={{ fontWeight: "300" }}>{props.locationPerson}</Text>
                </View>
            </View>
            {/* Right side */}
            <View>
                <Text style={{ fontWeight: "300" }}>{props.timePost}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    leftContainer: {
        flexDirection: "row",
    },
    image: {
        width: 43,
        height: 47,
        borderRadius: 12,
        marginEnd: 10,
    },
    textLeftContainer: {
        alignItems: "flex-start",
        justifyContent: "center",
    },
});

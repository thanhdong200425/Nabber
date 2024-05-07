import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { welcomePage } from "../../../assets/resource";
import { LinearGradient } from "expo-linear-gradient";

export default function ChildPage(props) {
    const color = props.backgroundColor;
    const isLastChild = props.isLastChild;
    const navigation = props.navigation;

    function handlePress() {
        navigation.navigate("LoginScreen");
    }

    if (color.length === 2) {
        return (
            <LinearGradient colors={color} style={styles.container}>
                <Image source={props.imageSrc} style={styles.image} />
                <View style={styles.contentContainer}>
                    {/*Heading*/}
                    <Text style={styles.heading}>{props.heading}</Text>
                    <Text style={styles.subHeading}>{props.subHeading}</Text>
                    <View style={styles.buttonContainer}>
                        {isLastChild && (
                            <TouchableOpacity style={styles.button} onPress={handlePress}>
                                <LinearGradient colors={["#654ea3", "#eaafc8"]} style={{ padding: 10, borderRadius: 12 }}>
                                    <Text style={{ color: "#fff", fontWeight: "bold" }}>Get Started</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            </LinearGradient>
        );
    } else {
        return (
            <View style={{ ...styles.container, backgroundColor: props.backgroundColor }}>
                <Image source={props.imageSrc} style={styles.image} />
                <View style={styles.contentContainer}>
                    {/*Heading*/}
                    <Text style={styles.heading}>{props.heading}</Text>
                    <Text style={styles.subHeading}>{props.subHeading}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    image: {
        maxWidth: 220,
        maxHeight: 290,
        marginBottom: 70,
    },
    heading: {
        fontSize: 26,
        fontWeight: "700",
        color: "#fff",
        marginBottom: 10,
    },
    subHeading: {
        color: "#fff",
        fontSize: 15,
        letterSpacing: 0.8,
    },
    contentContainer: {
        paddingHorizontal: 20,
        marginTop: 30,
    },
    buttonContainer: {
        marginTop: 40,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        borderRadius: 12,
    },
});

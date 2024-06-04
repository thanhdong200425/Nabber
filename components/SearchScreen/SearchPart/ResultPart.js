import {Image, StyleSheet, Text, View, TouchableOpacity} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {useNavigation} from "@react-navigation/native";

export default function ResultPart(props) {
    const user = props.user;
    const subName = user.givenName && user.givenSurname ? `${user.givenName} ${user.givenSurname}` : "";
    const navigation = useNavigation();

    const handlePress = (id, user) => {
        navigation.push('ProfileResult', {id: id, user: user})
    }
    return (
        <TouchableOpacity style={styles.container} onPress={() => handlePress(props.id, user)}>
            <LinearGradient colors={["#833ab4", "#fd1d1d", "#fcb045"]} style={styles.imageContainer}>
                <Image source={{uri: user.image}} width={40} height={40} style={styles.image}/>
            </LinearGradient>

            <View style={styles.textContainer}>
                <Text style={styles.userText}>{user.username}</Text>
                <Text style={styles.subContentText}>{subName}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        maxHeight: 70,
        paddingVertical: 10,
        flexDirection: "row",
    },
    imageContainer: {
        width: 46,
        height: 46,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        borderRadius: 22,
        borderWidth: 2,
        borderColor: "#a2a2a2",
    },
    textContainer: {
        paddingLeft: 10,
    },
    userText: {
        fontWeight: "bold",
        fontSize: 14,
    },
    subContentText: {
        fontSize: 13,
        color: "#737373",
    },
});

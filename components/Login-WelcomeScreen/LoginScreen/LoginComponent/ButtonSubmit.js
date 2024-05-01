import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

export default function ButtonSubmit(props) {
    const navigation = props.navigation;
    return <View style={styles.container}>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate("MainApp")}>
            <Text style={styles.textStyle}>{props.buttonName}</Text>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10
    },
    buttonStyle: {
        height: 46,
        borderRadius: 20,
        backgroundColor: "#FF7F50",
        justifyContent: "center",
        alignItems: "center"
    },
    textStyle: {
        fontSize: 18,
        fontWeight: "500",
        color: "#D3D3D3"
    }
})
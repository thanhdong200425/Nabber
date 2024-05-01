import {StyleSheet, Text, TextInput, View} from "react-native";

export default function InputField(props) {
    return <View style={styles.container}>
        <Text style={styles.textStyle}>{props.inputTitle}</Text>
        <TextInput value={props.value} onChangeText={props.onChangeText} style={styles.textInputStyle}/>
    </View>
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        gap: 10,
    },
    textInputStyle: {
        backgroundColor: "#D3D3D3",
        borderRadius: 20,
        height: 46,
        paddingLeft: 15
    },
    textStyle: {
        fontSize: 18,
        fontWeight: "500"
    }
})

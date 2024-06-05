import {Modal, Pressable, StyleSheet, Text, TextInput, View} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function ContentWriter(props) {
    return <Modal animationType={"slide"} transparent={true} visible={props.isVisible}>
        <View style={styles.modalContainer}>
            {/*Title*/}
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Add some content</Text>
                <Pressable onPress={props.onClose}>
                    <Ionicons name={'close-outline'} size={30} color={"#fff"}/>
                </Pressable>
            </View>
            {/*Content*/}
            <TextInput placeholder={"Enter something..."} placeholderTextColor={"#fff"} value={props.inputValue} onChangeText={props.onChangeText} style={styles.textInput}/>
        </View>
    </Modal>
}

const styles = StyleSheet.create({
    modalContainer: {
        width: "100%",
        height: "30%",
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
        position: "absolute",
        bottom: 0,
        backgroundColor: "#25292e",
    },
    titleContainer: {
        width: "100%",
        height: "16%",
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        backgroundColor: "#464C55",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10
    },
    title: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold"
    },
    textInput: {
        padding: 20,
        color: "#fff",
        fontSize: 15
    }
})
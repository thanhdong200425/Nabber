import { Button, Modal, StyleSheet, View, Text, Pressable } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import EmojiList from "./EmojiList";
import {useState} from "react";

export default function EmojiPicker(props) {
    return (
        <Modal animationType="slide" transparent={true} visible={props.visible}>
            <View style={styles.modalContent}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Choose an emoji</Text>
                    <Pressable onPress={props.onClose}>
                        <Ionicons name="close-outline" size={22} color={"#fff"} />
                    </Pressable>
                </View>
                <EmojiList onSelectEmoji={props.onSelectEmoji}/>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalContent: {
        height: "25%",
        width: "100%",
        backgroundColor: "#25292e",
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
        position: "absolute",
        bottom: 0
    },
    titleContainer: {
        height: "16%",
        backgroundColor: "#464C55",
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "700"
    }
});

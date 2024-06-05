import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // For the icon
import { useContext, useEffect, useState } from "react";
import { ResultContext } from "../SearchPage";

export default function EmptyPart(props) {
    const [resultFromSearch, setResultFromSearch] = useContext(ResultContext);
    const setIsEmpty = props.setIsEmpty;
    const isEmpty = props.isEmpty;
    useEffect(() => {
        if (resultFromSearch[0] === null) setIsEmpty("Find your contacts");
        else if (resultFromSearch.length === 0) setIsEmpty("Not found");
    }, [resultFromSearch]);
    return (
        <View style={styles.container}>
            <View style={styles.circleContainer}>
                <Ionicons name="people-outline" size={80} color="#777" />
            </View>
            <Text style={styles.textStyle}>{isEmpty}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    circleContainer: {
        width: 180,
        height: 180,
        borderRadius: 90,
        backgroundColor: "#e7e9e9",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
    },
    textStyle: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#555",
        textAlign: "center",
    },
});

import { StyleSheet, View } from "react-native";
import InteractiveIcon from "./InteractiveIcon";
import Divider from "../../CommonComponent/Divider";
import { useState } from "react";

export default function InteractiveBar(props) {
    const [isLoveClicked, setLoveClick] = useState(false);

    const changeColorIcon = () => {
        setLoveClick(!isLoveClicked);
    };

    const backgroundColor = props.backgroundColor ? {
        backgroundColor: props.backgroundColor,
        borderRadius: 120
    } : {};

    return (
        <View style={{...style.container, ...backgroundColor}}>
            <InteractiveIcon iconName={isLoveClicked ? "heart" : "heart-outline"} numberInteractive={4923} color={isLoveClicked ? "red" : "black"} onPress={changeColorIcon} />
            <Divider width={"1"} height={"100%"} borderLeftWidth={1} marginHorizontal={14}/>
            <InteractiveIcon iconName={"chatbox-outline"} numberInteractive={4923} />
            <Divider width={1} height={"100%"} borderLeftWidth={1} marginHorizontal={14}/>
            <InteractiveIcon iconName={"arrow-redo-outline"} numberInteractive={4923} />
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        paddingVertical: 20,
        flexDirection: "row",
        justifyContent: "center",
    },
});

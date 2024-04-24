import { StyleSheet, View } from "react-native";
import InteractiveIcon from "./InteractiveIcon";
import Divider from "../../CommonComponent/Divider";
import { useState } from "react";

export default function InteractiveBar() {
    const [isLoveClicked, setLoveClick] = useState(false);

    const changeColorIcon = () => {
        setLoveClick(!isLoveClicked);
    };

    return (
        <View style={style.container}>
            <InteractiveIcon iconName={isLoveClicked ? "heart" : "heart-outline"} numberInteractive={4923} color={isLoveClicked ? "red" : "black"} onPress={changeColorIcon} />
            <Divider />
            <InteractiveIcon iconName={"chatbox-outline"} numberInteractive={4923} />
            <Divider />
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

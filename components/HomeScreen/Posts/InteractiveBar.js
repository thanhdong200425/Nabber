import { StyleSheet, View } from "react-native";
import InteractiveIcon from "./InteractiveIcon";
import Divider from "../../CommonComponent/Divider";
import { useContext, useEffect, useState } from "react";
import { baseUrl } from "../../Login-WelcomeScreen/LoginScreen/LoginScreen";
import { getToken } from "../../../helper_functions/handleToken";
import { UserContext } from "../../ProfileScreen/ProfileNavigation";

export default function InteractiveBar(props) {
    const backgroundColor = props.backgroundColor
        ? {
              backgroundColor: props.backgroundColor,
              borderRadius: 120,
          }
        : {};

    return (
        <View style={{ ...style.container, ...backgroundColor }}>
            <InteractiveIcon iconName={props.isLoveClicked ? "heart" : "heart-outline"} numberInteractive={props.likeCount} color={props.isLoveClicked ? "red" : "black"} onPress={props.setLikeCount} />
            <Divider width={"1"} height={"100%"} borderLeftWidth={1} marginHorizontal={14} />
            <InteractiveIcon iconName={"chatbox-outline"} numberInteractive={4923} />
            <Divider width={1} height={"100%"} borderLeftWidth={1} marginHorizontal={14} />
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

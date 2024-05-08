import { StyleSheet, View } from "react-native";

export default function Divider({height, borderLeftWidth, width, borderTopWidth, borderColor, marginHorizontal = 14}) {
    return <View style={{...styles.divider, width: width, height: height, borderLeftWidth: borderLeftWidth, borderTopWidth: borderTopWidth, borderColor: borderColor, marginHorizontal: marginHorizontal}} />;
}

const styles = StyleSheet.create({
    divider: {
        borderColor: "#000",
    },
});

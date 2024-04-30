import { StyleSheet, View } from "react-native";

export default function Divider(props) {
    return <View style={{...styles.divider, width: props.width, height: props.height, borderLeftWidth: props.borderLeftWidth, borderTopWidth: props.borderTopWidth, borderColor: props.borderColor}} />;
}

const styles = StyleSheet.create({
    divider: {
        borderColor: "#000",
        marginHorizontal: 14,
    },
});

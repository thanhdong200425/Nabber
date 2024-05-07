import { StyleSheet, View } from "react-native";

export default function Divider(props) {
    return <View style={{...styles.divider, width: props.width, height: props.height, borderLeftWidth: props.borderLeftWidth, borderTopWidth: props.borderTopWidth, borderColor: props.borderColor, marginHorizontal: props.marginHorizontal}} />;
}

Divider.defaultProps = {
    marginHorizontal: 14
}

const styles = StyleSheet.create({
    divider: {
        borderColor: "#000",
    },
});

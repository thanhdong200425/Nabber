import { StyleSheet, View } from "react-native";

export default function Divider(props) {
    return <View style={[styles.divider, { borderLeftWidth: props.width, height: props.height }]} />;
}

Divider.defaultProps = {
    width: 1,
    height: "100%",
};

const styles = StyleSheet.create({
    divider: {
        borderColor: "#000",
        marginHorizontal: 14,
    },
});

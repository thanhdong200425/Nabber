import { Image, StyleSheet, View } from "react-native";

export default function LoginImage(props) {
    const width = props.width !== undefined ? props.width : 350,
        height = props.height !== undefined ? props.height : 360;

    return (
        <View style={styles.container}>
            <Image source={props.source} style={{ width: width, height: height }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
});

import { StyleSheet, View } from "react-native";
import PostBig from "./PostBig";
import PostSmall from "./PostSmall";

export default function PostRow(props) {
    let layout = props.layout;
    let childElement = layout == "1-2" ? layoutFirst : layoutSecond;

    return childElement(props);
}

const layoutFirst = function (props) {
    return (
        <View style={styles.rowContainer}>
            <PostBig src={props.bigImageSrc} />
            <View style={styles.postSmallContainer}>
                <PostSmall src={props.firstSmallImageSrc} />
                <PostSmall src={props.secondSmallImageSrc} />
            </View>
        </View>
    );
};

const layoutSecond = function (props) {
    return (
        <View style={styles.rowContainer}>
            <View style={styles.postSmallContainer}>
                <PostSmall src={props.firstSmallImageSrc} />
                <PostSmall src={props.secondSmallImageSrc} />
            </View>
            <PostBig src={props.bigImageSrc} />
        </View>
    );
};

const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: "row",
        gap: 11,
        justifyContent: "center",
        marginBottom: 10,
    },
    postSmallContainer: {
        gap: 11,
    },
});

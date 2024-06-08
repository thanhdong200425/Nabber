import { StyleSheet, View } from "react-native";
import PostBig from "./PostBig";
import PostSmall from "./PostSmall";

export default function PostRow(props) {
    const layout = props.layout;
    const childElement = layout === "1-2" ? layoutFirst : layoutSecond;
    return childElement(props);
}

const layoutFirst = function (props) {
    const navigation = props.onPress,
        user = props.user,
        bigPostInfo = props.bigPostInfo,
        firstSmallPostInfo = props.firstSmallPostInfo,
        secondSmallPostInfo = props.secondSmallPostInfo;
    return (
        <View style={styles.rowContainer}>
            <PostBig src={props.bigImageSrc} navigation={() => navigation(bigPostInfo.id, bigPostInfo.image, user.image, user.givenName, user.country, bigPostInfo.createdAt, bigPostInfo.content, bigPostInfo.likeCount)} />
            <View style={styles.postSmallContainer}>
                <PostSmall src={props.firstSmallImageSrc} navigation={() => navigation(firstSmallPostInfo.id, firstSmallPostInfo.image, user.image, user.givenName, user.country, firstSmallPostInfo.createdAt, firstSmallPostInfo.content, firstSmallPostInfo.likeCount)} />
                <PostSmall src={props.secondSmallImageSrc} navigation={() => navigation(secondSmallPostInfo.id, secondSmallPostInfo.image, user.image, user.givenName, user.country, secondSmallPostInfo.createdAt, secondSmallPostInfo.content, secondSmallPostInfo.likeCount)} />
            </View>
        </View>
    );
};

const layoutSecond = function (props) {
    const navigation = props.onPress,
        user = props.user,
        bigPostInfo = props.bigPostInfo,
        firstSmallPostInfo = props.firstSmallPostInfo,
        secondSmallPostInfo = props.secondSmallPostInfo;
    return (
        <View style={styles.rowContainer}>
            <View style={styles.postSmallContainer}>
                <PostSmall src={props.firstSmallImageSrc} navigation={() => navigation(firstSmallPostInfo.id, firstSmallPostInfo.image, user.image, user.givenName, user.country, firstSmallPostInfo.createdAt, firstSmallPostInfo.content, firstSmallPostInfo.likeCount)} />
                <PostSmall src={props.secondSmallImageSrc} navigation={() => navigation(secondSmallPostInfo.id, secondSmallPostInfo.image, user.image, user.givenName, user.country, secondSmallPostInfo.createdAt, secondSmallPostInfo.content, secondSmallPostInfo.likeCount)} />
            </View>
            <PostBig src={props.bigImageSrc} navigation={() => navigation(bigPostInfo.id, bigPostInfo.image, user.image, user.givenName, user.country, bigPostInfo.createdAt, bigPostInfo.content, bigPostInfo.likeCount)} />
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

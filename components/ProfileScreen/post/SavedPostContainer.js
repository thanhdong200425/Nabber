import { View, ScrollView, StyleSheet } from "react-native";
import PostBig from "./PostBig";
import PostSmall from "./PostSmall";
import PostRow from "./PostRow";

export default function SavedPostContainer() {
    return (
        <View style={styles.outsideContainer}>
            <PostRow layout="1-2" bigImageSrc={{ uri: "https://picsum.photos/200/300" }} firstSmallImageSrc={{ uri: "https://picsum.photos/seed/picsum/200/300" }} secondSmallImageSrc={{ uri: "https://picsum.photos/id/233/200/300" }} />
            <PostRow layout="2-1" bigImageSrc={{ uri: "https://picsum.photos/id/232/200/300" }} firstSmallImageSrc={{ uri: "https://picsum.photos/id/231/200/300" }} secondSmallImageSrc={{ uri: "https://picsum.photos/id/220/200/300" }} />
            <PostRow layout="1-2" bigImageSrc={{ uri: "https://picsum.photos/200/300" }} firstSmallImageSrc={{ uri: "https://picsum.photos/seed/picsum/200/300" }} secondSmallImageSrc={{ uri: "https://picsum.photos/id/233/200/300" }} />
        </View>
    );
}

const styles = StyleSheet.create({
    outsideContainer: {
        marginVertical: 15,
    },
});

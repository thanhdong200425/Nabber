import { StyleSheet, View } from "react-native";
import TitlePost from "../../HomeScreen/Posts/TitlePost";
import ContentPost from "../../HomeScreen/Posts/ContentPost";
import InteractiveBar from "../../HomeScreen/Posts/InteractiveBar";
import Divider from "../../CommonComponent/Divider";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function ContentPart(props) {
    const navigation = useNavigation();
    const openCommentPage = () => {
        navigation.push("CommentPage", {
            postId: props.postId,
        });
    };
    return (
        <View style={styles.container}>
            <TitlePost src={props.personSrc} namePerson={props.namePerson} locationPerson={props.locationPerson} timePost={props.timePost} textColor={"#fff"} />
            <Divider height={20} />
            <ContentPost textColor={"#fff"} content={props.content} />
            <Divider height={25} />
            <InteractiveBar openCommentPage={openCommentPage} backgroundColor={"#fff"} likeCount={props.likeCount} postId={props.postId} userId={props.userId} isLoveClicked={props.isLoveClicked} setLikeCount={props.setLikeCount} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingBottom: 40,
    },
});

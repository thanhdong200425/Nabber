import { StyleSheet, View } from "react-native";
import TitlePost from "./TitlePost";
import ImagePost from "./ImagePost";
import ContentPost from "./ContentPost";
import InteractiveBar from "./InteractiveBar";
import { useEffect, useState } from "react";
import { checkLoveClick, getLikeQuantity, toggleALike } from "../../../helper_functions/handleLike";
import { useNavigation } from "@react-navigation/native";

export default function Post(props) {
    const postId = props.postId;
    const [isLoveClicked, setIsLoveClicked] = useState(false);
    const [likeCount, setLikeCount] = useState(props.likeCount);
    const navigation = useNavigation();

    useEffect(() => {
        checkLoveClick(postId).then((value) => setIsLoveClicked(value));
        getLikeQuantity(postId).then((value) => setLikeCount(value));
    }, []);

    const changeColorIcon = () => {
        setIsLoveClicked(!isLoveClicked);
        toggleALike(postId).then((value) => setLikeCount(value));
    };

    const openCommentPage = () => {
        navigation.push("CommentPage", {
            postId: postId,
        });
    };

    return (
        <View style={styles.container}>
            <TitlePost src={props.personSrc} namePerson={props.namePerson} locationPerson={props.locationPerson} timePost={props.timePost} />
            <ImagePost src={props.imageSrc} />
            <ContentPost content={props.content} />
            <InteractiveBar likeCount={likeCount} isLoveClicked={isLoveClicked} setLikeCount={changeColorIcon} openCommentPage={openCommentPage} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 20,
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
});

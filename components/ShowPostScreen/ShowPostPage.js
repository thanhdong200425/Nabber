import { StyleSheet, View, ScrollView } from "react-native";
import ImagePart from "./parts/ImagePart";
import ContentPart from "./parts/ContentPart";
import InteractiveBar from "../HomeScreen/Posts/InteractiveBar";
import Divider from "../CommonComponent/Divider";
import { useEffect, useState } from "react";
import { checkLoveClick, getLikeQuantity, toggleALike } from "../../helper_functions/handleLike";

export default function ShowPostPage({ route }) {
    const info = route.params;
    const [likeCount, setLikeCount] = useState(info.likeCount);
    const [isLoveClicked, setIsLoveClicked] = useState();

    useEffect(() => {
        checkLoveClick(info.postId).then((value) => setIsLoveClicked(value));
        getLikeQuantity(info.postId).then((value) => setLikeCount(value));
    }, []);

    const changeColorIcon = () => {
        setIsLoveClicked(!isLoveClicked);
        toggleALike(info.postId).then((value) => setLikeCount(value));
    };

    return (
        <ScrollView style={styles.container}>
            <ImagePart src={{ uri: info.imageSrc }} />
            <Divider height={25} />
            <ContentPart personSrc={{ uri: info.personSrc }} namePerson={info.namePerson} locationPerson={info.locationPerson} timePost={info.timePost} content={info.content} likeCount={likeCount} isLoveClicked={isLoveClicked} setLikeCount={changeColorIcon} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#CEC040",
        paddingHorizontal: 21,
        paddingTop: 5,
    },
});

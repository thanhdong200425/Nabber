import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, KeyboardAvoidingView, Platform, FlatList, Text } from "react-native";
import Comment from "./Comment";
import Ionicons from "react-native-vector-icons/Ionicons";
import BottomInput from "./BottomInput";
import { addAComment, getAISummary, getAllComments } from "../../helper_functions/handleComment";
import { timeDifference } from "../../helper_functions/handleTime";
import { aiAvatar } from "../../assets/resource";
import { BadgeContext } from "../CommonComponent/BottomBar";

export default function CommentPage({ route }) {
    const [inputValue, setInputValue] = useState("");
    const [comments, setComments] = useState([]);
    const [isSendButtonClick, setIsSendButtonClick] = useState(false);
    const [aiSummary, setAiSummary] = useState("");
    const [badgeCount, setBadgeCount] = useContext(BadgeContext);
    const postId = route.params.postId ? route.params.postId : "";

    const addComment = (content) => {
        addAComment(postId, content);
        setBadgeCount((prev) => prev + 1);
        getAllComments(postId).then((value) => setComments(value));
    };

    useEffect(() => {
        getAISummary(postId).then((value) => setAiSummary(value));
    }, [isSendButtonClick === true]);

    useEffect(() => {
        getAllComments(postId).then((value) => {
            setComments(value);
            setIsSendButtonClick(false);
        });
    }, [isSendButtonClick === true]);

    return (
        <View style={styles.outerContainer}>
            {comments && comments.length === 0 && (
                <View style={styles.emptyPart}>
                    <Text style={styles.emptyText}>Become the first one share your thought</Text>
                </View>
            )}
            <View style={{ flex: 1 }}>
                {aiSummary && <Comment marginBottom={0} avatarSource={aiAvatar} username={"AI"} content={aiSummary} timePost={""} isShowReply={false} />}
                <FlatList
                    contentContainerStyle={styles.scrollContent}
                    data={comments}
                    renderItem={({ item }) => {
                        let timePost = timeDifference(new Date(), new Date(item.createdAt));
                        return <Comment avatarSource={{ uri: item.image }} username={item.username} content={item.content} timePost={timePost} isShowReply={true} />;
                    }}
                />

                <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
                    <BottomInput
                        inputValue={inputValue}
                        setInputValue={setInputValue}
                        addAComment={() => {
                            addComment(inputValue);
                        }}
                        setIsSendButtonClick={setIsSendButtonClick}
                    />
                </KeyboardAvoidingView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        backgroundColor: "#fff",
    },
    scrollContent: {},
    emptyPart: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    emptyText: {
        padding: 10,
        backgroundColor: "#eeeeee",
        fontSize: 25,
        fontWeight: "600",
        color: "#686D76",
        borderRadius: 25,
        maxWidth: "50%",
        textAlign: "center",
    },
});

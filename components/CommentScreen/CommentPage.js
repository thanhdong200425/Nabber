import React, { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView, KeyboardAvoidingView, Platform, Pressable, TextInput, FlatList, Text } from "react-native";
import Comment from "./Comment";
import Ionicons from "react-native-vector-icons/Ionicons";
import BottomInput from "./BottomInput";
import { addAComment, getAllComments } from "../../helper_functions/handleComment";
import { timeDifference } from "../../helper_functions/handleTime";

export default function CommentPage({ route }) {
    const [inputValue, setInputValue] = useState("");
    const [comments, setComments] = useState([]);
    const [isSendButtonClick, setIsSendButtonClick] = useState(false);
    const postId = route.params.postId ? route.params.postId : "";

    const addComment = (content) => {
        addAComment(postId, content);
        getAllComments(postId).then((value) => setComments(value));
    };

    useEffect(() => {
        getAllComments(postId).then((value) => setComments(value));
    }, [comments]);

    return (
        <View style={styles.outerContainer}>
            {comments && comments.length === 0 && (
                <View style={styles.emptyPart}>
                    <Text style={styles.emptyText}>Become the first one share your thought</Text>
                </View>
            )}
            <View style={{ flex: 1 }}>
                <FlatList
                    contentContainerStyle={styles.scrollContent}
                    data={comments}
                    renderItem={({ item }) => {
                        let timePost = timeDifference(new Date(), new Date(item.createdAt));
                        return <Comment avatarSource={item.image} username={item.username} content={item.content} timePost={timePost} />;
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

import { View, StyleSheet, ScrollView, FlatList } from "react-native";
import Post from "./Posts/Post";

export default function ContainerPosts() {
    const data = [
        { personSrc: { uri: "https://picsum.photos/seed/picsum/200/300" }, namePerson: "Thanh Dong", locationPerson: "New York City, USA", timePost: "10 mins ago", content: content, imageSrc: { uri: "https://picsum.photos/seed/picsum/200/300" } },
        { personSrc: { uri: "https://picsum.photos/seed/picsum/200/300" }, namePerson: "Thanh Dong", locationPerson: "New York City, USA", timePost: "10 mins ago", content: content, imageSrc: { uri: "https://picsum.photos/seed/picsum/200/300" } },
        { personSrc: { uri: "https://picsum.photos/seed/picsum/200/300" }, namePerson: "Thanh Dong", locationPerson: "New York City, USA", timePost: "10 mins ago", content: content, imageSrc: { uri: "https://picsum.photos/seed/picsum/200/300" } },
    ];
    return <FlatList style={styles.container} data={data} renderItem={({ item }) => <Post {...item} />} keyExtractor={(item, index) => index.toString()} />;
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 16,
        backgroundColor: "#fff",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        overflow: "hidden",
    },
});

const content = "Search for your friends on the app and connect with them. You can also invite your friends who are not on the app yet to join you.";

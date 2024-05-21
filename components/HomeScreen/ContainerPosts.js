import { View, StyleSheet, ScrollView, FlatList } from "react-native";
import Post from "./Posts/Post";
import { useEffect, useState } from "react";
import { baseUrl } from "../Login-WelcomeScreen/LoginScreen/LoginScreen";
import { getToken } from "../../helper_functions/handleToken";

export default function ContainerPosts() {
    let data = [
        {
            personSrc: { uri: "https://picsum.photos/seed/picsum/200/300" },
            namePerson: "Thanh Dong",
            locationPerson: "New York City, USA",
            timePost: "10 mins ago",
            content: content,
            imageSrc: { uri: "https://picsum.photos/seed/picsum/200/300" },
        },
        {
            personSrc: { uri: "https://picsum.photos/seed/picsum/200/300" },
            namePerson: "Thanh Dong",
            locationPerson: "New York City, USA",
            timePost: "10 mins ago",
            content: content,
            imageSrc: { uri: "https://picsum.photos/seed/picsum/200/300" },
        },
        {
            personSrc: { uri: "https://picsum.photos/seed/picsum/200/300" },
            namePerson: "Thanh Dong",
            locationPerson: "New York City, USA",
            timePost: "10 mins ago",
            content: content,
            imageSrc: { uri: "https://picsum.photos/seed/picsum/200/300" },
        },
    ];
    const [newData, setNewData] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const token = await getToken("loginToken");
                const response = await fetch(baseUrl + "post/friend-posts", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        logintoken: token,
                    },
                });

                let result = await response.json();
                return result.posts;
            } catch (error) {
                console.log(error);
            }
        };

        getPosts().then((value) => {
            setNewData(value);
        });
    }, []);

    return (
        <FlatList
            style={styles.container}
            data={newData}
            renderItem={({ item }) => {
                return <Post imageSrc={{ uri: item.image }} content={item.content} personSrc={{ uri: item.userImage }} namePerson={`${item.givenName} ${item.givenSurname}`} locationPerson={item.country} timePost={data[0].timePost} />;
            }}
            keyExtractor={(item, index) => index.toString()}
        />
    );
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

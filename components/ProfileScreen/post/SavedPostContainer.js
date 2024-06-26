import { StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";
import { getToken } from "../../../helper_functions/handleToken";
import { baseUrl } from "../../Login-WelcomeScreen/LoginScreen/LoginScreen";
import PostRow from "./PostRow";
import SinglePostRow from "./SinglePostRow";
import { useNavigation } from "@react-navigation/native";
import { timeDifference } from "../../../helper_functions/handleTime";

export default function SavedPostContainer({ id = 0 }) {
    const [data, setData] = useState([]);
    const [userData, setUserData] = useState({});
    const layouts = ["1-2", "2-1"];
    const navigate = useNavigation();
    const navigation = (postId, imageSrc, personSrc, namePerson, locationPerson, timePost, content, likeCount) => {
        let current = new Date();
        let previous = new Date(timePost);
        timePost = timeDifference(current, previous);
        navigate.push("ShowPostPage", {
            postId: postId,
            imageSrc: imageSrc,
            personSrc: personSrc,
            namePerson: namePerson,
            locationPerson: locationPerson,
            timePost: timePost,
            content: content,
            likeCount: likeCount,
        });
    };

    useEffect(() => {
        const getPosts = async () => {
            try {
                const loginToken = await getToken("loginToken");
                // For search page
                if (id !== 0) {
                    const response = await fetch(baseUrl + "post/specific-user/" + id, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            logintoken: loginToken,
                        },
                    });
                    let result = await response.json();
                    setUserData(result.user);
                    return result.groupArray;
                }
                // For profile page
                else {
                    const response = await fetch(baseUrl + "post/", {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            logintoken: loginToken,
                        },
                    });
                    let result = await response.json();
                    setUserData(result.user);
                    return result.groupArray;
                }
            } catch (error) {
                console.log("Error when fetching data in SavedPostContainer component: " + error);
            }
        };

        getPosts().then((value) => setData(value));
    }, []);
    return (
        <View style={styles.outsideContainer}>
            {data &&
                Object.keys(data).map((key) => {
                    const group = data[key] ? data[key] : null;
                    // Handle when an array contains one object
                    if (group[0] && group.length === 1) {
                        return <SinglePostRow key={key} imageSrc={{ uri: group[0].image }} onPress={() => navigation(group[0].id, group[0].image, userData.image, userData.givenName, userData.country, group[0].createdAt, group[0].content, group[0].likeCount)} />;
                    }
                    // Handle when an array contains two objects
                    if (group[0] && group[1] && group.length === 2) {
                    }
                    const bigPostInfo = group[0] ? group[0] : null;
                    const firstSmallPostInfo = group[1] ? group[1] : null;
                    const secondSmallPostInfo = group[2] ? group[2] : null;
                    const firstImageSource = group[1] ? group[1].image : null;
                    const secondImageSource = group[2] ? group[2].image : null;
                    const layout = layouts[Math.floor(Math.random() * layouts.length)];

                    return <PostRow key={key} user={userData} onPress={navigation} layout={layout} bigPostInfo={bigPostInfo} bigImageSrc={{ uri: bigPostInfo.image }} firstSmallPostInfo={firstSmallPostInfo} firstSmallImageSrc={{ uri: firstImageSource }} secondSmallPostInfo={secondSmallPostInfo} secondSmallImageSrc={{ uri: secondImageSource }} />;
                })}
        </View>
    );
}

const styles = StyleSheet.create({
    outsideContainer: {
        marginVertical: 15,
    },
});

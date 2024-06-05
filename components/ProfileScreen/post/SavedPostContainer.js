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
    const navigation = (imageSrc, personSrc, namePerson, locationPerson, timePost, content) => {
        let current = new Date(),
            previous = new Date(timePost);

        timePost = timeDifference(current, previous);
        navigate.push("ShowPostPage", {
            src: imageSrc,
            personSrc: personSrc,
            namePerson: namePerson,
            locationPerson: locationPerson,
            timePost: timePost,
            content: content,
        });
    };

    useEffect(() => {
        const getPosts = async () => {
            try {
                const loginToken = await getToken("loginToken");
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
                } else {
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
        console.log(userData);
        getPosts().then((value) => setData(value));
    }, []);
    return (
        <View style={styles.outsideContainer}>
            {Object.keys(data).map((key) => {
                const group = data[key];

                // Handle when an array contains one object
                if (group.length === 1) {
                    return <SinglePostRow key={key} imageSrc={{ uri: group[0].image }} onPress={() => navigation(group[0].image, userData.image, userData.givenName, userData.country, group[0].createdAt, group[0].content)} />;
                }

                // Handle when an array contains two objects
                if (group.length === 2) {
                }
                const firstImageSource = group[1] ? group[1].image : null;
                const secondImageSource = group[2] ? group[2].image : null;
                const layout = layouts[Math.floor(Math.random() * layouts.length)];

                return <PostRow key={key} user={userData} onPress={navigation} layout={layout} bigPostInfo={group[0]} bigImageSrc={{ uri: group[0].image }} firstSmallPostInfo={group[1]} firstSmallImageSrc={{ uri: firstImageSource }} secondSmallPostInfo={group[2]} secondSmallImageSrc={{ uri: secondImageSource }} />;
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    outsideContainer: {
        marginVertical: 15,
    },
});

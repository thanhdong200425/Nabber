import { StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";
import { getToken } from "../../../helper_functions/handleToken";
import { baseUrl } from "../../Login-WelcomeScreen/LoginScreen/LoginScreen";
import PostRow from "./PostRow";
import SinglePostRow from "./SinglePostRow";

export default function SavedPostContainer() {
    const [data, setData] = useState([]);
    const layouts = ["1-2", "2-1"];
    useEffect(() => {
        const getPosts = async () => {
            try {
                const loginToken = await getToken("loginToken");
                const response = await fetch(baseUrl + "post/", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        logintoken: loginToken,
                    },
                });
                let result = await response.json();
                return result.groupArray;
            } catch (error) {
                console.log("Error when fetching data in SavedPostContainer component: " + error);
            }
        };

        getPosts().then((value) => setData(value));
    }, []);

    return (
        <View style={styles.outsideContainer}>
            {Object.keys(data).map((key) => {
                const group = data[key];

                // Handle when an array contains one object
                if (group.length === 1) {
                    return <SinglePostRow key={key} imageSrc={{ uri: group[0].image }} />;
                }

                // Handle when an array contains two objects
                if (group.length === 2) {
                }

                const firstImageSource = group[1] ? group[1].image : null;
                const secondImageSource = group[2] ? group[2].image : null;
                const layout = layouts[Math.floor(Math.random() * layouts.length)];

                return <PostRow key={key} layout={layout} bigImageSrc={{ uri: group[0].image }} firstSmallImageSrc={{ uri: firstImageSource }} secondSmallImageSrc={{ uri: secondImageSource }} />;
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    outsideContainer: {
        marginVertical: 15,
    },
});

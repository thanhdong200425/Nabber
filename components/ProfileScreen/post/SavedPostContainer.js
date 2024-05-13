import {StyleSheet, View} from "react-native";
import {useEffect, useState} from "react";
import {getToken} from "../../../helper_functions/handleToken";
import {baseUrl} from "../../Login-WelcomeScreen/LoginScreen/LoginScreen";
import PostRow from "./PostRow";

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
                        logintoken: loginToken
                    }
                })
                let result = await response.json();
                return result.groupArray;
            } catch (error) {
                console.log("Error when fetching data in SavedPostContainer component: " + error);
            }
        }

        getPosts().then(value => setData(value));
    }, []);


    return (
        <View style={styles.outsideContainer}>
            {Object.keys(data).map(key => {
                const group = data[key];
                return (<PostRow
                    key={key}
                    layout={layouts[Number(key) - 1]}
                    bigImageSrc={{uri: group[0].image}}
                    firstSmallImageSrc={{uri: group[1].image}}
                    secondSmallImageSrc={{uri: group[2].image}}
                />)
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    outsideContainer: {
        marginVertical: 15,
    },
});

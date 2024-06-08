import { getToken } from "./handleToken";
import { baseUrl } from "../components/Login-WelcomeScreen/LoginScreen/LoginScreen";

export const checkLoveClick = async (postId) => {
    try {
        const loginToken = await getToken("loginToken");
        const userId = await getToken("userId");
        const fetchData = await fetch(baseUrl + "post/check-like", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                logintoken: loginToken,
            },
            body: JSON.stringify({
                postId: postId,
                userId: userId,
            }),
        });

        const result = await fetchData.json();
        return result.isExist;
    } catch (error) {
        console.log("Error in check love click: " + error);
    }
};

export const getLikeQuantity = async (postId) => {
    try {
        const loginToken = await getToken("loginToken");
        const fetchData = await fetch(baseUrl + "post/get-like", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                logintoken: loginToken,
            },
            body: JSON.stringify({
                postId: postId,
            }),
        });

        const quantity = await fetchData.json();
        return quantity.data;
    } catch (error) {
        console.log("Error when get like quantity in " + error);
    }
};

export const toggleALike = async (postId) => {
    try {
        const loginToken = await getToken("loginToken");
        const userId = await getToken("userId");
        const query = await fetch(baseUrl + "post/toggle-like", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                logintoken: loginToken,
            },
            body: JSON.stringify({
                postId: postId,
                userId: userId,
            }),
        });

        const result = await query.json();
        return result.data;
    } catch (error) {
        console.log("Error in InteractiveBar component: " + error);
        return null;
    }
};

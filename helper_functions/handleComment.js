import { getToken } from "./handleToken";
import { baseUrl } from "../components/Login-WelcomeScreen/LoginScreen/LoginScreen";
export const getAllComments = async (postId) => {
    try {
        const loginToken = await getToken("loginToken");
        const fetchData = await fetch(baseUrl + "post/get-comment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                logintoken: loginToken,
            },
            body: JSON.stringify({
                postId: postId,
            }),
        });

        if (fetchData.ok) {
            const result = await fetchData.json();
            return result.data;
        }

        return fetchData.status;
    } catch (error) {
        console.log("Error in getAllComments function: " + error);
    }
};

export const addAComment = async (postId, content) => {
    try {
        const userId = await getToken("userId");
        const loginToken = await getToken("loginToken");
        const fetchData = await fetch(baseUrl + "post/add-comment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                logintoken: loginToken,
            },
            body: JSON.stringify({
                userId: userId,
                postId: postId,
                content: content,
            }),
        });

        const result = await fetchData.json();
        return result.data;
    } catch (error) {
        console.log("Error in addAComment function: " + error);
    }
};

export const getAISummary = async (postId) => {
    try {
        const loginToken = await getToken("loginToken");
        const fetchData = await fetch(baseUrl + "post/get-summary-comment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                logintoken: loginToken,
            },
            body: JSON.stringify({
                postId: postId,
            }),
        });

        const result = await fetchData.json();
        return result.data;
    } catch (error) {
        console.log("Error in getAISummary function: " + error);
    }
};

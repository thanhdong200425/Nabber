import { baseUrl } from "../components/Login-WelcomeScreen/LoginScreen/LoginScreen";
import { getToken } from "./handleToken";

export const getAllNotifications = async () => {
    try {
        const userId = await getToken("userId");
        const loginToken = await getToken("loginToken");
        const fetchData = await fetch(baseUrl + "post/get-all-notifications", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                logintoken: loginToken,
            },
            body: JSON.stringify({
                receiverId: userId,
            }),
        });
        const result = await fetchData.json();
        return result.data;
    } catch (error) {
        console.log("Error in getAllNotifcations function: " + error);
    }
};

export const isExistingNotification = async (postId, receiverId) => {
    try {
        const senderId = await getToken("userId");
        const loginToken = await getToken("loginToken");
        const fetchData = await fetch(baseUrl + "post/is-existing-notification", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                logintoken: loginToken,
            },
            body: JSON.stringify({
                senderId: senderId,
                postId: postId,
                receiverId: receiverId,
            }),
        });

        const result = await fetchData.json();
        return result.data;
    } catch (error) {
        console.log("Error in isExistingNotification function: " + error);
    }
};

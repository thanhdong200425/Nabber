import { getToken } from "./handleToken";
import { baseUrl } from "../components/Login-WelcomeScreen/LoginScreen/LoginScreen";

export default async function handleUpdateUser(userId, givenName, username, gender, image) {
    try {
        const loginToken = await getToken("loginToken");
        const data = { id: userId, givenName: givenName, username: username, gender: gender, image: image };
        const request = await fetch(baseUrl + "post/update-user", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                logintoken: loginToken,
            },
            body: JSON.stringify(data),
        });

        const response = await request.json();
        return response.user;
    } catch (e) {
        console.log("Error when update user: " + e);
    }
}

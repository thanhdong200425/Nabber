import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import AuthStack from "./components/Login-WelcomeScreen/AuthStack";
import { NavigationContainer } from "@react-navigation/native";
import MainApp from "./components/MainApp";
import { getToken } from "./helper_functions/handleToken";
import LoginScreen from "./components/Login-WelcomeScreen/LoginScreen/LoginScreen";

export default function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [isLogin, setIsLogin] = useState(false);
    useEffect(() => {
        let idTimeOut = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        let checkLoginStatus = async () => {
            try {
                const loginStatus = await getToken("isAuthenticated");
                console.log("Login status: " + loginStatus);
                if (loginStatus == "true") {
                    setIsLoading(false);
                    setIsLogin(true);
                }
            } catch (error) {
                console.log("Error when check login status at App component: " + error);
            }
        };

        checkLoginStatus();
    }, []);

    if (isLogin) {
        return (
            <NavigationContainer>
                <LoginScreen />
            </NavigationContainer>
        );
    }
}

const styles = StyleSheet.create({
    bottomBar: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "flex-end",
    },
});

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import BottomBar from "./components/CommonComponent/BottomBar";
import { createContext, useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import LoginScreen from "./components/Login-WelcomeScreen/LoginScreen/LoginScreen";
import WelcomePage from "./components/Login-WelcomeScreen/WelcomeScreen/WelcomePage";
import AuthStack from "./components/Login-WelcomeScreen/AuthStack";
import { NavigationContainer } from "@react-navigation/native";
import MainApp from "./components/MainApp";

export default function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [isLogin, setIsLogin] = useState(false);
    useEffect(() => {
        let idTimeOut = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    if (!isLogin)
        return (
            <NavigationContainer>
                <AuthStack />
            </NavigationContainer>
        );

    if (isLoading) {
        return <LoadingScreen />;
    } else {
        return <MainApp />;
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

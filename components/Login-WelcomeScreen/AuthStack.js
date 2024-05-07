import { createStackNavigator } from "@react-navigation/stack";
import { Text, View } from "react-native";
import WelcomePage from "./WelcomeScreen/WelcomePage";
import LoginScreen from "./LoginScreen/LoginScreen";
import MainApp from "../MainApp";
import SignUpScreen from "./SignUpScreen/SignUpScreen";

const Stack = createStackNavigator();

export default function AuthStack() {
    return (
        <Stack.Navigator initialRouteName="WelcomePage" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="WelcomePage" component={WelcomePage} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
            <Stack.Screen name="MainApp" component={MainApp} />
        </Stack.Navigator>
    );
}

import { createStackNavigator } from "@react-navigation/stack";
import { Text, View } from "react-native";
import WelcomePage from "./WelcomeScreen/WelcomePage";
import LoginScreen from "./LoginScreen/LoginScreen";
import MainApp from "../MainApp";
import SignUpScreen from "./SignUpScreen/SignUpScreen";
import SavedPhoto from "../AddStoryScreen/SavedPhoto";
import PreviewPost from "../AddStoryScreen/PreviewPost";
import AddStoryPage from "../AddStoryScreen/AddStoryPage";
import { createContext, useState } from "react";
import { PhotoUriContext } from "../CommonComponent/PhotoUriContext";

const Stack = createStackNavigator();

export default function AuthStack() {
    const [photoUri, setPhotoUri] = useState(null);
    return (
        <PhotoUriContext.Provider value={[photoUri, setPhotoUri]}>
            <Stack.Navigator initialRouteName="WelcomePage" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="WelcomePage" component={WelcomePage} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
                <Stack.Screen name="MainApp" component={MainApp} />
                <Stack.Screen name="SavedPhoto" component={SavedPhoto} />
                <Stack.Screen name="PreviewPost" component={PreviewPost} />
                <Stack.Screen name="AddStoryPage" component={AddStoryPage} />
            </Stack.Navigator>
        </PhotoUriContext.Provider>
    );
}

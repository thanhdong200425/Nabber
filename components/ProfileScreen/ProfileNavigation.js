import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfilePage from "./ProfilePage";
import ShowPostPage from "../ShowPostScreen/ShowPostPage";
import BackButton from "../CommonComponent/BackButton";
import EditProfilePage from "./DropDownScreen/EditProfilePage";
import { createContext, useState } from "react";
import ThreeDotButton from "../CommonComponent/ThreeDotButton";
import CommentPage from "../CommentScreen/CommentPage";

const Stack = createNativeStackNavigator();
export const UserContext = createContext();

export default function ProfileNavigation({ route }) {
    const [user, setUser] = useState(route.params.user);
    return (
        <UserContext.Provider value={[user, setUser]}>
            <Stack.Navigator>
                <Stack.Screen name={"ProfilePage"} component={ProfilePage} options={{ headerShown: false }} />
                <Stack.Screen
                    name={"ShowPostPage"}
                    component={ShowPostPage}
                    options={({ navigation }) => ({
                        headerTitle: "",
                        headerStyle: { backgroundColor: "#CEC040" },
                        headerLeft: (props) => <BackButton {...props} onPress={navigation.goBack} />,
                        headerRight: (props) => <ThreeDotButton onPress={() => console.log("Three dot")} />,
                        headerShadowVisible: false,
                    })}
                />
                <Stack.Screen
                    name={"EditProfilePage"}
                    component={EditProfilePage}
                    options={({ navigation }) => ({
                        headerStyle: { backgroundColor: "#fff" },
                        headerTitleAlign: "center",
                        headerLeft: (props) => <BackButton {...props} onPress={navigation.goBack} />,
                        headerShadowVisible: false,
                        headerTitle: "Edit profile",
                        headerTitleStyle: { fontWeight: "700" },
                    })}
                />
                <Stack.Screen
                    name="CommentPage"
                    component={CommentPage}
                    options={({ navigation }) => ({
                        headerLeft: (props) => <BackButton {...props} onPress={navigation.goBack} />,
                        headerTitleAlign: "center",
                        headerTitle: "Comment",
                        headerTitleStyle: { fontSize: 18 },
                        headerShadowVisible: false,
                    })}
                />
            </Stack.Navigator>
        </UserContext.Provider>
    );
}

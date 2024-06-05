import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfilePage from "./ProfilePage";
import ShowPostPage from "../ShowPostScreen/ShowPostPage";
import BackButton from "../CommonComponent/BackButton";

const Stack = createNativeStackNavigator();

export default function ProfileNavigation({ route }) {
    const user = route.params.user;
    return (
        <Stack.Navigator>
            <Stack.Screen name={"ProfilePage"} component={ProfilePage} initialParams={{ user: user }} options={{ headerShown: false }} />
            <Stack.Screen
                name={"ShowPostPage"}
                component={ShowPostPage}
                options={({ navigation }) => ({
                    headerTitle: "",
                    headerStyle: { backgroundColor: "#CEC040" },
                    headerLeft: (props) => <BackButton {...props} onPress={navigation.goBack} />,
                    headerShadowVisible: false,
                })}
            />
        </Stack.Navigator>
    );
}

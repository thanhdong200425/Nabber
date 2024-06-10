import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./HomePage";
import CommentPage from "../CommentScreen/CommentPage";
import BackButton from "../CommonComponent/BackButton";

const Stack = createNativeStackNavigator();

export default function HomePageNavigation({ route }) {
    const user = route.params.user;
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomePage" component={HomePage} initialParams={{ user: user }} options={{ headerShown: false }} />
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
    );
}

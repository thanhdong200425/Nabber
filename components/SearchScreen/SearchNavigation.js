import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchPage from "./SearchPage";
import ResultPart from "./SearchPart/ResultPart";
import EmptyPart from "./SearchPart/EmptyPart";
import ProfileSearchResult from "./ProfileSearchResult";

import { backButton } from "../../assets/resource";
import BackButton from "../CommonComponent/BackButton";
import ShowPostPage from "../ShowPostScreen/ShowPostPage";

const Stack = createNativeStackNavigator();

export default function SearchNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={"SearchPage"} component={SearchPage} options={{ headerShown: false }} />
            <Stack.Screen name={"ResultPart"} component={ResultPart} />
            <Stack.Screen name={"EmptyPart"} component={EmptyPart} />
            <Stack.Screen
                name={"ProfileResult"}
                component={ProfileSearchResult}
                options={({ navigation }) => ({
                    headerStyle: { backgroundColor: "#fff" },
                    headerLeft: (props) => <BackButton {...props} onPress={navigation.goBack} />,
                    headerTitleAlign: "center",
                    headerShadowVisible: false,
                })}
            />
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

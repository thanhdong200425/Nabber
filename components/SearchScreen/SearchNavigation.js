import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SearchPage from "./SearchPage";
import ResultPart from "./SearchPart/ResultPart";
import EmptyPart from "./SearchPart/EmptyPart";
import ProfileSearchResult from "./ProfileSearchResult";
import {backButton} from "../../assets/resource";
import BackButton from "../CommonComponent/BackButton";

const Stack = createNativeStackNavigator();

export default function SearchNavigation() {
    return <Stack.Navigator>
        <Stack.Screen name={'SearchPage'} component={SearchPage} options={{headerShown: false}}/>
        <Stack.Screen name={'ResultPart'} component={ResultPart}/>
        <Stack.Screen name={'EmptyPart'} component={EmptyPart}/>
        <Stack.Screen name={"ProfileResult"} component={ProfileSearchResult} options={({navigation}) => ({
            headerStyle: {backgroundColor: "#fff"},
            headerLeft: (props) => <BackButton {...props} onPress={navigation.goBack}/>,
            headerTitleAlign: "center",
            headerShadowVisible: false
        })}/>
    </Stack.Navigator>
}
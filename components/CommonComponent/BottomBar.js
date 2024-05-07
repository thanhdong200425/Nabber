// Libraries
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

// Components
import HomePage from "../HomeScreen/HomePage";
import SearchPage from "../SearchScreen/SearchPage";
import AddStoryPage from "../AddStoryScreen/AddStoryPage";
import NotifyPage from "../NotifyScreen/NotifyPage.js";
import ProfilePage from "../ProfileScreen/ProfilePage";
import {StyleSheet, View} from "react-native";

const Tab = createBottomTabNavigator();

export default function BottomBar() {
    return (
        <Tab.Navigator screenOptions={changeAppearance}>
            <Tab.Screen name="Home" component={HomePage}/>
            <Tab.Screen name="Search" component={SearchPage}/>
            <Tab.Screen name="Add story" component={AddStoryPage}/>
            <Tab.Screen name="Notify" component={NotifyPage}/>
            <Tab.Screen name="Profile" component={ProfilePage}/>
        </Tab.Navigator>
    );
}

const changeAppearance = function ({route}) {
    return {
        tabBarShowLabel: false,
        tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let iconComponent;
            switch (route.name) {
                case "Home":
                    iconName = focused ? "home" : "home-outline";
                    break;
                case "Search":
                    iconName = focused ? "search" : "search-outline";
                    break;
                case "Add story":
                    iconName = focused ? "add" : "add-outline";
                    iconComponent = (
                        <View style={styles.circleContainer}>
                            <Ionicons name={iconName} color={"#fff"} size={size}/>
                        </View>
                    );
                    break;
                case "Notify":
                    iconName = focused ? "notifications" : "notifications-outline";
                    break;
                case "Profile":
                    iconName = focused ? "person" : "person-outline";
                    break;
            }

            return iconComponent || <Ionicons name={iconName} color={color} size={size}/>;
        },
        tabBarStyle: {
            height: 96,
        },
        tabBarActiveTintColor: "#E55733",
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    circleContainer: {
        borderRadius: 30,
        width: 60,
        height: 60,
        padding: 15,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#E55733",
    },
});

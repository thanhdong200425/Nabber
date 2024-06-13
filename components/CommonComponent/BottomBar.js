// Libraries
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

// Components
import HomePage from "../HomeScreen/HomePage";
import AddStoryPage from "../AddStoryScreen/AddStoryPage";
import NotifyPage from "../NotifyScreen/NotifyPage.js";
import ProfilePage from "../ProfileScreen/ProfilePage";
import { StyleSheet, View } from "react-native";
import SearchNavigation from "../SearchScreen/SearchNavigation";
import ProfileNavigation from "../ProfileScreen/ProfileNavigation";
import HomePageNavigation from "../HomeScreen/HomePageNavigation.js";
import { createContext, useState } from "react";

const Tab = createBottomTabNavigator();

export const BadgeContext = createContext();

const getTabBarVisibility = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === "ShowPostPage" || routeName === "CommentPage") return "none";
    return "flex";
};

export default function BottomBar({ user }) {
    const [badgeCount, setBadgeCount] = useState(0);
    return (
        <BadgeContext.Provider value={[badgeCount, setBadgeCount]}>
            <Tab.Navigator screenOptions={changeAppearance}>
                <Tab.Screen name="Home" component={HomePageNavigation} initialParams={{ user: user }} />
                <Tab.Screen name="Search" component={SearchNavigation} />
                <Tab.Screen name="Add story" component={AddStoryPage} options={{ tabBarStyle: { display: "none" } }} />
                <Tab.Screen
                    name="Notify"
                    component={NotifyPage}
                    options={
                        badgeCount != 0 && {
                            tabBarBadge: badgeCount,
                            tabBarBadgeStyle: {
                                marginTop: 20,
                            },
                        }
                    }
                />
                <Tab.Screen name="Profile" component={ProfileNavigation} initialParams={{ user: user }} />
            </Tab.Navigator>
        </BadgeContext.Provider>
    );
}

const changeAppearance = function ({ route }) {
    return {
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
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
                            <Ionicons name={iconName} color={"#fff"} size={size} />
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

            return iconComponent || <Ionicons name={iconName} color={color} size={size} />;
        },
        tabBarStyle: {
            display: getTabBarVisibility(route),
            height: 96,
        },
        tabBarActiveTintColor: "#E55733",
        headerShown: false,
        tabBarHideOnKeyboard: true,
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

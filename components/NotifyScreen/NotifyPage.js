import { StyleSheet, TouchableOpacity, View } from "react-native";
import SearchBar from "../CommonComponent/SearchBar";
import { useContext, useEffect, useState } from "react";
import FollowNotification from "./FollowNotificationPart/FollowNotification";
import FollowNotificationHeading from "./FollowNotificationPart/FollowNotificationHeading";
import AllNotificationHeading from "./AllNotificationPart/AllNotificationHeading";
import LikeNotificationHeading from "./LikeNotificationPart/LikeNotificationHeading";
import AllNotificationContainer from "./AllNotificationPart/AllNotificationContainer";
import FollowNotificationContainer from "./FollowNotificationPart/FollowNotificationContainer";
import LikeNotificationContainer from "./LikeNotificationPart/LikeNotificationContainer";
import { getAllNotifications } from "../../helper_functions/handleNotification";
import { BadgeContext } from "../CommonComponent/BottomBar";

export default function NotifyPage() {
    const [selectedContainer, setSelectedContainer] = useState("all");
    const [notification, setNotification] = useState({});
    const [badgeCount, setBadgeCount] = useContext(BadgeContext);
    useEffect(() => {
        getAllNotifications().then((result) => setNotification(result));
    }, [badgeCount]);

    let displayContainer;
    switch (selectedContainer) {
        case "all":
            displayContainer = <AllNotificationContainer dataSet={notification} />;
            break;
        case "follow":
            displayContainer = <FollowNotificationContainer dataSet={dataSet.followNotifications} />;
            break;
        case "like":
            displayContainer = <LikeNotificationContainer dataSet={notification} />;
            break;
    }

    return (
        <View style={styles.outsideContainer}>
            {/*Notification heading part*/}
            <View style={styles.notifyContainer}>
                <TouchableOpacity
                    onPress={() => {
                        setSelectedContainer("all");
                    }}
                >
                    <AllNotificationHeading isSelected={selectedContainer === "all"} />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        setSelectedContainer("follow");
                    }}
                >
                    <FollowNotificationHeading isSelected={selectedContainer === "follow"} />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        setSelectedContainer("like");
                    }}
                >
                    <LikeNotificationHeading isSelected={selectedContainer === "like"} />
                </TouchableOpacity>
            </View>

            {/*Notification content part*/}
            <View style={styles.contentPart}>{displayContainer}</View>
        </View>
    );
}

const styles = StyleSheet.create({
    outsideContainer: {
        paddingTop: 15,
        paddingHorizontal: 7,
        flex: 1,
        backgroundColor: "#fff",
    },
    notifyContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    contentPart: {
        flex: 1,
        marginVertical: 5,
    },
});

const dataSet = {
    followNotifications: [
        {
            image: { uri: "https://picsum.photos/200/300" },
            username: "Thanh Dong",
            content: "Started following you",
            timePost: "10:00 AM",
        },
        {
            image: { uri: "https://picsum.photos/200/300" },
            username: "Thanh Dong",
            content: "Started following you",
            timePost: "10:00 AM",
        },
        {
            image: { uri: "https://picsum.photos/200/300" },
            username: "Thanh Dong",
            content: "Started following you",
            timePost: "10:00 AM",
        },
        {
            image: { uri: "https://picsum.photos/200/300" },
            username: "Thanh Dong",
            content: "Started following you",
            timePost: "10:00 AM",
        },
        {
            image: { uri: "https://picsum.photos/200/300" },
            username: "Thanh Dong",
            content: "Started following you",
            timePost: "10:00 AM",
        },
        {
            image: { uri: "https://picsum.photos/200/300" },
            username: "Thanh Dong",
            content: "Started following you",
            timePost: "10:00 AM",
        },
        {
            image: { uri: "https://picsum.photos/200/300" },
            username: "Thanh Dong",
            content: "Started following you",
            timePost: "10:00 AM",
        },
        {
            image: { uri: "https://picsum.photos/200/300" },
            username: "Thanh Dong",
            content: "Started following you",
            timePost: "10:00 AM",
        },
        {
            image: { uri: "https://picsum.photos/200/300" },
            username: "Thanh Dong",
            content: "Started following you",
            timePost: "10:00 AM",
        },
        {
            image: { uri: "https://picsum.photos/200/300" },
            username: "Thanh Dong",
            content: "Started following you",
            timePost: "10:00 AM",
        },
    ],
    likeNotifications: [
        {
            image: { uri: "https://picsum.photos/200/300" },
            username: "Thanh Dong",
            content: "Like your post",
            timePost: "10:00 PM",
            postImage: { uri: `https://picsum.photos/id/109/200/300` },
        },
        {
            image: { uri: "https://picsum.photos/200/300" },
            username: "Thanh Dong",
            content: "Like your post",
            timePost: "10:00 PM",
            postImage: { uri: `https://picsum.photos/id/104/200/300` },
        },
        {
            image: { uri: "https://picsum.photos/200/300" },
            username: "Thanh Dong",
            content: "SLike your post",
            timePost: "10:00 PM",
            postImage: { uri: `https://picsum.photos/id/103/200/300` },
        },
        {
            image: { uri: "https://picsum.photos/200/300" },
            username: "Thanh Dong",
            content: "Like your post",
            timePost: "10:00 PM",
            postImage: { uri: `https://picsum.photos/id/101/200/300` },
        },
        {
            image: { uri: "https://picsum.photos/200/300" },
            username: "Thanh Dong",
            content: "Like your post",
            timePost: "10:00 PM",
            postImage: { uri: `https://picsum.photos/id/100/200/300` },
        },
        {
            image: { uri: "https://picsum.photos/200/300" },
            username: "Thanh Dong",
            content: "Like your post",
            timePost: "10:00 PM",
            postImage: { uri: `https://picsum.photos/id/99/200/300` },
        },
        {
            image: { uri: "https://picsum.photos/200/300" },
            username: "Thanh Dong",
            content: "Like your post",
            timePost: "10:00 PM",
            postImage: { uri: `https://picsum.photos/id/95/200/300` },
        },
        {
            image: { uri: "https://picsum.photos/200/300" },
            username: "Thanh Dong",
            content: "Like your post",
            timePost: "10:00 PM",
            postImage: { uri: `https://picsum.photos/id/88/200/300` },
        },
    ],
};

const allNotifications = [...dataSet.likeNotifications, ...dataSet.followNotifications].sort(() => Math.random() - 0.5);

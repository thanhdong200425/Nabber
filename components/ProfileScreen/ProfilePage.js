import { ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "../HomeScreen/Header";
import { demoPicture, faviconPicture, logo } from "../../assets/resource";
import CoverImage from "./CoverImage";
import Avatar from "./Avatar";
import ProfileStatsLine from "./ProfileStatsLine";
import ShortDescription from "./ShortDescrip";
import SavedPostContainer from "./post/SavedPostContainer";

export default function ProfilePage() {
    return (
        <View style={styles.container}>
            <CoverImage imageSrc={demoPicture} />
            <View style={styles.containerAvatar}>
                <Avatar imageSrc={{ uri: "https://picsum.photos/id/235/200/300" }} avatarFullName={"Thanh Dong"} avatarUserName={"@tdong_07"} />
            </View>
            <ScrollView style={styles.scrollViewContainer}>
                <ProfileStatsLine />
                <ShortDescription content="I can draw my life by myself" />
                <SavedPostContainer />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
    },
    containerAvatar: {
        marginTop: 60,
        marginBottom: 40,
    },
    scrollViewContainer: {
        paddingVertical: 12,
        borderRadius: 12,
    },
});

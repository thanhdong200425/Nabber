import { ScrollView, StyleSheet, Text, View, Pressable } from "react-native";
import Header from "../HomeScreen/Header";
import { demoPicture, faviconPicture, logo } from "../../assets/resource";
import CoverImage from "./CoverImage";
import Avatar from "./Avatar";
import ProfileStatsLine from "./ProfileStatsLine";
import ShortDescription from "./ShortDescrip";
import SavedPostContainer from "./post/SavedPostContainer";
import { useContext } from "react";
import { UserContext } from "./ProfileNavigation";

export default function ProfilePage({ route }) {
    const [user, setUser] = useContext(UserContext);
    return (
        <View style={styles.container}>
            <CoverImage imageSrc={user.coverImage} />
            <Pressable style={styles.containerAvatar}>
                <Avatar imageSrc={{ uri: user.image }} avatarFullName={user.givenName} avatarUserName={user.username} user={user} />
            </Pressable>
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
        backgroundColor: "#fff",
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

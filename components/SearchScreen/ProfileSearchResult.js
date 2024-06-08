import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import CoverImage from "../ProfileScreen/CoverImage";
import Avatar from "../ProfileScreen/Avatar";
import ProfileStatsLine from "../ProfileScreen/ProfileStatsLine";
import ShortDescription from "../ProfileScreen/ShortDescrip";
import SavedPostContainer from "../ProfileScreen/post/SavedPostContainer";

export default function ProfileSearchResult({ route }) {
    const id = route.params.id,
        user = route.params.user;
    const navigation = useNavigation();
    let displayName = "";

    useEffect(() => {
        displayName = user.username.substring(1);
        navigation.setOptions({ title: displayName });
    }, [id]);
    return (
        <View style={styles.container}>
            <CoverImage imageSrc={user.coverImage} />
            <View style={styles.containerAvatar}>
                <Avatar imageSrc={{ uri: user.image }} avatarFullName={user.givenName} avatarUserName={user.username} />
            </View>
            <ScrollView style={styles.scrollViewContainer}>
                <ProfileStatsLine />
                <ShortDescription content={"Stay focused, be present"} />
                <SavedPostContainer id={id} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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

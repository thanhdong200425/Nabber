import { StyleSheet, View } from "react-native";
import ProfileStat from "./ProfileStat";
import Divider from "../CommonComponent/Divider";

export default function ProfileStatsLine() {
    return (
        <View style={styles.container}>
            <ProfileStat stat={"146"} fieldStat={"Post"} />
            <Divider />
            <ProfileStat stat={"12K"} fieldStat={"Follower"} />
            <Divider />
            <ProfileStat stat={"200"} fieldStat={"Following"} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        marginHorizontal: 10,
    },
});

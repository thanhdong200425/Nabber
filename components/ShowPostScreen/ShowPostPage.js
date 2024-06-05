import { StyleSheet, View, ScrollView } from "react-native";
import ImagePart from "./parts/ImagePart";
import ContentPart from "./parts/ContentPart";
import InteractiveBar from "../HomeScreen/Posts/InteractiveBar";
import Divider from "../CommonComponent/Divider";

export default function ShowPostPage({ route }) {
    const userInfo = route.params;
    return (
        <ScrollView style={styles.container}>
            <ImagePart src={{ uri: userInfo.src }} />
            <Divider height={25} />
            <ContentPart personSrc={{ uri: userInfo.personSrc }} namePerson={userInfo.namePerson} locationPerson={userInfo.locationPerson} timePost={userInfo.timePost} content={userInfo.content} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#CEC040",
        paddingHorizontal: 21,
        paddingTop: 5,
    },
});

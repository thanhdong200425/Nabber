import { StyleSheet, View } from "react-native";
import TitlePost from "./TitlePost";
import ImagePost from "./ImagePost";
import ContentPost from "./ContentPost";
import InteractiveBar from "./InteractiveBar";

export default function Post(props) {
    return (
        <View style={styles.container}>
            <TitlePost src={props.personSrc} namePerson={props.namePerson} locationPerson={props.locationPerson} timePost={props.timePost} />
            <ImagePost src={props.imageSrc} />
            <ContentPost content={props.content} />
            <InteractiveBar />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 20,
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
});

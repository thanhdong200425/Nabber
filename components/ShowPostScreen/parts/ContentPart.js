import { StyleSheet, View } from "react-native";
import TitlePost from "../../HomeScreen/Posts/TitlePost";
import ContentPost from "../../HomeScreen/Posts/ContentPost";
import InteractiveBar from "../../HomeScreen/Posts/InteractiveBar";
import Divider from "../../CommonComponent/Divider";

export default function ContentPart(props) {
    return (
        <View style={styles.container}>
            <TitlePost src={props.personSrc} namePerson={props.namePerson} locationPerson={props.locationPerson} timePost={props.timePost} textColor={"#fff"} />
            <Divider height={20} />
            <ContentPost textColor={"#fff"} content={props.content} />
            <Divider height={25} />
            <InteractiveBar backgroundColor={"#fff"} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingBottom: 40,
    },
});

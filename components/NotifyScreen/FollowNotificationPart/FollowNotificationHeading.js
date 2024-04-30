import {ScrollView, Text, View, StyleSheet} from "react-native";
import FollowNotification from "./FollowNotification";

export default function FollowNotificationHeading(props) {
    let isSelected = props.isSelected;
    let value = props.data;
    return <View>
        {/*Heading part*/}
        <View style={styles.containerHeading}>
            <Text style={isSelected ? styles.selectedHeadingColor : styles.headingTitle}>Follow</Text>
            {isSelected && <View style={{...styles.bottomLine, backgroundColor: "#0336FF"}}/>}
        </View>
    </View>
}

const styles = StyleSheet.create({
    containerHeading: {

    },
    bottomLine: {
        height: 2,
        marginTop: 5,
    },
    headingTitle: {
        fontSize: 18,
        color: "#9E9E9E",
        textAlign: "center"
    },
    selectedHeadingColor: {
        fontSize: 18,
        color: "#0336FF",
        fontWeight: "700",
        textAlign: "center"
    }
})
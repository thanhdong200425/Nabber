import {ScrollView, Text, View, StyleSheet} from "react-native";

export default function AllNotificationHeading(props) {
    let isSelected = props.isSelected;
    return <View>
        {/*Heading part*/}
        <View>
            <Text style={isSelected ? styles.selectedHeadingColor : styles.headingTitle}>All</Text>
            {isSelected && <View style={{...styles.bottomLine, backgroundColor: "#0336FF"}}/>}
        </View>
    </View>
}

const styles = StyleSheet.create({
    bottomLine: {
        height: 2,
        marginTop: 5
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
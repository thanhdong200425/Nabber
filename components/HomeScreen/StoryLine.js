import { StyleSheet, ScrollView } from "react-native";
import Story from "./Story";

export default function StoryLine() {
    return (
        <ScrollView horizontal={true} style={styles.container} showsHorizontalScrollIndicator={false}>
            <Story uri="https://picsum.photos/id/235/200/300" />
            <Story uri="https://picsum.photos/200/300?grayscale" />
            <Story uri="https://picsum.photos/seed/picsum/200/300" />
            <Story uri="https://picsum.photos/seed/picsum/200/300" />
            <Story uri="https://picsum.photos/seed/picsum/200/300" />
            <Story uri="https://picsum.photos/seed/picsum/200/300" />
            <Story uri="https://picsum.photos/seed/picsum/200/300" />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        flexDirection: "row",
    },
});

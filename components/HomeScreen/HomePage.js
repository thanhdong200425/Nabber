import { StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./Header";
import StoryLine from "./StoryLine";
import SubHeader from "./SubHeader";
import { logo } from "../../assets/resource";
import ContainerPosts from "./ContainerPosts";

export default function HomePage() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <Header uri={logo} iconName={"mail-unread-outline"} />
            <SubHeader content="Explore Feeds" />
            <ContainerPosts />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        height: "100%",
    },
});

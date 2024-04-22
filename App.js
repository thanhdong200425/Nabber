import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import BottomBar from "./components/CommonComponent/BottomBar";

export default function App() {
    return (
        <View style={styles.bottomBar}>
            <BottomBar />
        </View>
    );
}

const styles = StyleSheet.create({
    bottomBar: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "flex-end",
    },
});

import { StyleSheet, View } from "react-native";
import BottomBar from "./CommonComponent/BottomBar";

export default function MainApp({ route }) {
    const { user } = route.params;
    return (
        <View style={styles.bottomBar}>
            <BottomBar user={user} />
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

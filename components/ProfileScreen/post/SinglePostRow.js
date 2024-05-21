import {StyleSheet, View} from "react-native";
import PostBig from "./PostBig";

export default function SinglePostRow(props) {
    return <View style={styles.container}>
        <PostBig src={props.imageSrc} width={370}/>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: 11,
        marginBottom: 10,
        marginHorizontal: 40
    }
})


import {Image, StyleSheet, View} from "react-native";
import PostBig from "./PostBig";

export default function SinglePostRow(props) {
    return (
        <View style={styles.container}>
            <Image source={props.imageSrc} width={370} height={273} style={styles.image}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        borderRadius: 12
    }
});

import {Image, StyleSheet, View} from "react-native";

export default function LoadingScreen() {
    return <View style={styles.container}>
        <Image source={require("../../assets/logo/nabber-logo-zip-file/png/logo-black.png")} style={styles.image}/>
    </View>
}

const styles = StyleSheet.create(({
    container: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: 250,
        height: 250
    }
}))
import {Image, StyleSheet, View} from "react-native";

export default function LoginImage(props) {
    return <View style={styles.container}>
        <Image source={props.source} style={styles.image}/>
    </View>
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20
    },
    image: {
        width: 350,
        height: 360,
    }
})
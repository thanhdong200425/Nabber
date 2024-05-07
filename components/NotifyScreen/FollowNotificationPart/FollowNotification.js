import {Image, Pressable, StyleSheet, Text, View} from "react-native";

export default function FollowNotification(props) {
    return <View style={styles.container}>
        <View style={styles.insideContainer}>
            <View style={styles.contentContainer}>
                {/*Image part*/}
                <Image source={props.src} width={32} height={32} style={styles.image}/>

                {/*Content part*/}
                <View style={styles.textContainer}>
                    <Text style={styles.textUserName}>{props.username}</Text>
                    <Text>{props.content} <Text style={styles.timePost}>{props.timePost}</Text></Text>
                </View>
            </View>

            {/*Button part*/}
            <Pressable style={styles.button}>
                <Text style={styles.textButtonColor}>Follow</Text>
            </Pressable>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        marginVertical: 3
    },
    insideContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    contentContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    image: {
        borderRadius: 16,
        marginEnd: 9,
    },
    timePost: {
        color: "#9E9E9E"
    },
    button: {
        backgroundColor: "#0336FF",
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 6,
    },
    textButtonColor: {
        color: "#fff",
        fontWeight: "600"
    },
    textUserName: {
        fontWeight: "700"
    }
})
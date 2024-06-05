import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function EmojiList(props) {
    const emojis = ["😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "😊", "😇", "🤔", "🙃", "Ⓜ️", "⚽", "💯"];
    return (
        <View style={styles.container}>
            {emojis.map((emoji, index) => {
                return (
                    <TouchableOpacity key={index} onPress={() => props.onSelectEmoji(emoji)}>
                        <Text style={styles.emoji}>{emoji}</Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: 10,
    },
    emoji: {
        fontSize: 30,
        margin: 10,
    },
});

import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function ContentPost(props) {
    const [isExpanded, setIsExpanded] = useState(false);
    const textColor = props.textColor
        ? {
              color: props.textColor,
          }
        : {};
    const toggleText = () => {
        setIsExpanded(!isExpanded);
    };
    return (
        <View style={styles.container}>
            <Pressable onPress={toggleText}>
                <Text style={{ ...styles.text, ...textColor }} numberOfLines={isExpanded ? 0 : 5} ellipsizeMode="tail">
                    {props.content}
                </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    text: {
        lineHeight: 25,
        fontSize: 16,
    },
});

import { useState, useRef, useEffect } from "react";
import { View, Image, StyleSheet, Text, useWindowDimensions, Pressable } from "react-native";

export default function Comment({ marginBottom, avatarSource, username, content, timePost, isShowReply }) {
    return (
        <View style={{ ...styles.container, marginBottom: marginBottom }}>
            {/* Avatar part */}
            <View style={styles.avatarContainer}>
                <Image source={avatarSource} style={styles.image} />
            </View>

            {/* Content part */}
            <View style={styles.contentContainer}>
                <Text style={{ lineHeight: 18, letterSpacing: 0.5 }}>
                    <Text style={{ fontWeight: "700" }}>{username} </Text> {content}
                </Text>
                <View style={styles.infoContent}>
                    <Text>{timePost}</Text>
                    {isShowReply && (
                        <Pressable>
                            <Text style={{ fontWeight: "600" }}>Reply</Text>
                        </Pressable>
                    )}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 15,
        flexDirection: "row",
        paddingHorizontal: 16,
        gap: 10,
    },
    avatarContainer: {},
    image: {
        width: 40,
        height: 40,
        maxHeight: 50,
        maxWidth: 50,
        borderRadius: 20,
    },
    contentContainer: {
        flex: 1,
    },
    infoContent: {
        marginTop: 7,
        flexDirection: "row",
        gap: 15,
    },
});

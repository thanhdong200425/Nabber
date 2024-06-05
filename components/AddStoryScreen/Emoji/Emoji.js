import {Image, StyleSheet, Text, View} from "react-native";
import Animated, {useAnimatedStyle, useSharedValue, withSpring} from "react-native-reanimated";
import {Gesture, GestureDetector} from "react-native-gesture-handler";

export default function Emoji(props) {
    const scale = useSharedValue(props.size);
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);

    const dobuleTap = Gesture.Tap().numberOfTaps(2).onStart(() => {
        if (scale.value !== props.size * 2) scale.value *= 2;
        else scale.value = props.size;
    })

    const emojiStyle = useAnimatedStyle(() => {
        return {
            fontSize: withSpring((scale.value))
        }
    })

    const dragEmoji = Gesture.Pan().onChange((event) => {
        translateX.value += event.changeX;
        translateY.value += event.changeY;
    })

    const emojiContainerStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: translateX.value
                },
                {
                    translateY: translateY.value
                }
            ]
        }
    })

    return (
        <GestureDetector gesture={dragEmoji}>
            <Animated.View style={[emojiContainerStyle, styles.containerFloat]}>
                <GestureDetector gesture={dobuleTap}>
                    <Animated.Text
                        style={{...emojiStyle, fontSize: props.size, color: "#fff"}}>{props.emoji}</Animated.Text>
                </GestureDetector>
            </Animated.View>
        </GestureDetector>
    );
}

const styles = StyleSheet.create({
    containerFloat: {
        position: "absolute",
        top: 0,
        left: 20
    },
});

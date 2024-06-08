import { Pressable } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function ThreeDotButton({ onPress }) {
    return (
        <Pressable onPress={onPress}>
            <Ionicons name={"ellipsis-vertical"} size={24} color={"#000"} />
        </Pressable>
    );
}

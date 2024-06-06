import { Image, StyleSheet, View, Pressable } from "react-native";
import Avatar from "./Avatar";
import { demoPicture } from "../../assets/resource";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

export default function CoverImage(props) {
    const [image, setImage] = useState(props.imageSrc);

    const changePhoto = async () => {
        const pickedPhoto = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [16, 9],
            quality: 1,
        });

        if (!pickedPhoto.canceled) {
            setImage(pickedPhoto.assets[0].uri);
        }
    };

    return (
        <Pressable style={styles.container} onLongPress={changePhoto}>
            <Image source={{ uri: image }} style={styles.image} resizeMode="cover" />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "relative",
        width: "100%",
        maxHeight: 230,
    },
    image: {
        width: "100%",
        height: 227,
    },
});

import { Image, Pressable, StyleSheet, View, Text } from "react-native";
import EditInfo from "./EditInfo";
import { useContext, useEffect, useRef, useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { useNavigation } from "@react-navigation/native";
import CompleteButton from "../../CommonComponent/CompleteButton";
import handleUpdateUser from "../../../helper_functions/handleUpdateUser";
import { UserContext } from "../ProfileNavigation";
import * as ImagePicker from "expo-image-picker";
import isInternetImage from "../../../helper_functions/isInternetImage";

export default function EditProfilePage() {
    const navigation = useNavigation();
    const [user, setUser] = useContext(UserContext);
    const defaultName = (user.givenName !== null && user.givenName !== "" ? user.givenName : "") + " " + (user.givenSurname !== null && user.givenSurname !== "" ? user.givenSurname : "");
    const [imageInput, setImageInput] = useState(user.image);
    const [nameInput, setNameInput] = useState(defaultName);
    const [usernameInput, setUsernameInput] = useState(user.username);
    const [isGenderDropOpen, setIsGenderDropOpen] = useState(false);
    const [selectedGender, setSelectedGender] = useState(user.gender);
    const [genderList, setGenderList] = useState([
        { label: "Male", value: 0 },
        { label: "Female", value: 1 },
        { label: "Others", value: 2 },
    ]);
    const [descriptionInput, setDescriptionInput] = useState("");

    const changePhoto = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImageInput(result.assets[0].uri);
        }
    };

    useEffect(() => {
        navigation.setOptions({
            headerRight: (props) => (
                <CompleteButton
                    {...props}
                    onPress={() => {
                        handleUpdateUser(user.id, nameInput, usernameInput, selectedGender, imageInput).then((newValue) => {
                            setUser(newValue);
                            navigation.push("ProfilePage");
                        });
                    }}
                />
            ),
        });
    }, [nameInput, usernameInput, selectedGender, imageInput]);

    return (
        <View style={styles.container}>
            {/* Customize image part */}
            <View style={styles.imageContainer}>
                <Image source={{ uri: imageInput }} style={styles.image} />
                <Pressable style={{ marginTop: 10 }} onPress={changePhoto}>
                    <Text style={styles.editText}>Edit your avatar</Text>
                </Pressable>
            </View>

            {/* Input part */}
            <View style={styles.inputContainer}>
                <EditInfo input={nameInput} setInput={setNameInput} inputFieldName={"Name"} />
                <EditInfo input={usernameInput} setInput={setUsernameInput} inputFieldName={"Username"} />
                <EditInfo input={descriptionInput} setInput={setDescriptionInput} inputFieldName={"Description"} />
                <DropDownPicker
                    style={styles.dropdown}
                    open={isGenderDropOpen}
                    setOpen={setIsGenderDropOpen}
                    value={selectedGender}
                    setValue={setSelectedGender}
                    items={genderList}
                    setItems={setGenderList}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 20,
    },
    imageContainer: {
        paddingTop: 30,
        width: "100%",
        alignItems: "center",
        marginBottom: 30,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    inputContainer: {
        gap: 25,
    },
    dropdown: {
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: "grey",
    },
    editText: {
        fontWeight: "700",
        color: "#7992F7",
    },
});

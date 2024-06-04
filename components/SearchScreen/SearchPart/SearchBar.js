import { useContext, useEffect, useRef, useState } from "react";
import { StyleSheet, TextInput, View, Text, Pressable, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ResultContext } from "../SearchPage";
import { getToken } from "../../../helper_functions/handleToken";
import { baseUrl } from "../../Login-WelcomeScreen/LoginScreen/LoginScreen";

export default function SearchBar(props) {
    const setInputValue = props.setInputValue;
    const inputValue = props.inputValue;
    const setIsEmpty = props.setIsEmpty;
    const isClicked = props.isClicked;
    const setIsClicked = props.setIsClicked;
    const textInputRef = useRef(null);
    const [preInputValue, setPreInputValue] = useState();
    const [resultFromSearch, setResultFromSearch] = useContext(ResultContext);

    useEffect(() => {
        const timer = setTimeout(async () => {
            if (inputValue !== "") await fetchResult(inputValue);
            else setResultFromSearch([null]);
        }, 300);

        return () => clearTimeout(timer);
    }, [inputValue]);

    const fetchResult = async (value) => {
        try {
            const userToken = await getToken("loginToken");
            const request = await fetch(baseUrl + `search?query=${value}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    logintoken: userToken,
                },
            });
            if (request.status === 400 || request.status === 404) {
                setResultFromSearch([]);
            } else {
                const response = await request.json();
                setResultFromSearch(response.data);
            }
        } catch (error) {
            console.error("Error when fetch a search result: " + error);
            return null;
        }
    };

    return (
        <View style={styles.outsideContainer}>
            <View style={styles.inputContainer}>
                <TextInput
                    ref={textInputRef}
                    style={{ ...styles.input, textAlign: isClicked ? "left" : "left" }}
                    value={inputValue}
                    onChangeText={(e) => {
                        setInputValue(e);
                    }}
                    onFocus={() => {
                        if (preInputValue) setInputValue(preInputValue);
                        setIsClicked(true);
                    }}
                    onBlur={() => {
                        setIsClicked(false);
                    }}
                    onSubmitEditing={(e) => {
                        if (resultFromSearch.length === 0) setInputValue("");
                        setPreInputValue(inputValue);
                    }}
                ></TextInput>
                {!isClicked && (inputValue === "" || inputValue === undefined) && (
                    <TouchableOpacity style={styles.floatPlaceholder} onPress={() => textInputRef.current.focus()}>
                        <Ionicons name="search" size={20} color={"#737373"} style={styles.icon} />
                        <Text>Search</Text>
                    </TouchableOpacity>
                )}
            </View>
            {isClicked && (
                <Pressable
                    onPress={() => {
                        setPreInputValue(inputValue);
                        setInputValue("");
                        setIsClicked(false);
                        setResultFromSearch([null]);
                        textInputRef.current.blur();
                    }}
                >
                    <Text style={styles.cancelButton}>Cancel</Text>
                </Pressable>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    outsideContainer: {
        width: "100%",
        paddingVertical: 7,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#737373",
        borderRadius: 7,
    },
    input: {
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 3,
    },
    floatPlaceholder: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        gap: 4,
    },
    cancelButton: {
        marginLeft: 12,
        color: "#000",
        fontWeight: "600",
    },
});

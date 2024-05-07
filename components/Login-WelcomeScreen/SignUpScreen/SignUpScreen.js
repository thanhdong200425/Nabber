import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import LoginImage from "../LoginScreen/LoginComponent/LoginImage";
import { signUpPage } from "../../../assets/resource";
import { useState } from "react";
import InputField from "../LoginScreen/LoginComponent/InputField";
import ButtonSubmit from "../LoginScreen/LoginComponent/ButtonSubmit";
import OptionsLogin from "../LoginScreen/LoginComponent/OptionsLogin";
import Divider from "../../CommonComponent/Divider";

export default function SignUpScreen() {
    const [error, setError] = useState("");
    const [emailInputField, setEmailInputField] = useState("");
    const [passwordInputField, setPasswordInputField] = useState("");
    const [retypePasswordInputField, setRetypePasswordInputField] = useState("");
    const [nameInputField, setNameInputField] = useState("");

    const signUp = function () {};

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
            <ScrollView contentContainerStyle={{ alignItems: "center", paddingVertical: 30 }} showsVerticalScrollIndicator={false}>
                <LoginImage source={signUpPage.headingImage} width={300} height={250} />
                <View style={styles.headingStyle}>
                    <Text style={styles.textStyle}>Create Account</Text>
                    {error !== "" && <Text style={styles.errorMessage}>{error}</Text>}
                </View>

                {/* Main part */}
                <View style={styles.mainPart}>
                    <InputField
                        inputTitle={"Your name"}
                        value={nameInputField}
                        onChangeText={(newValue) => {
                            setNameInputField(newValue);
                            setError("");
                        }}
                    />
                    <InputField
                        inputTitle={"Email"}
                        value={emailInputField}
                        onChangeText={(newValue) => {
                            setEmailInputField(newValue);
                            setError("");
                        }}
                    />
                    <InputField
                        inputTitle={"Password"}
                        value={passwordInputField}
                        onChangeText={(newValue) => {
                            setPasswordInputField(newValue);
                            setError("");
                        }}
                        isSecure={true}
                    />
                    <InputField
                        inputTitle={"Confirm password"}
                        value={retypePasswordInputField}
                        onChangeText={(newValue) => {
                            setRetypePasswordInputField(newValue);
                            setError("");
                        }}
                        isSecure={true}
                    />
                    <ButtonSubmit buttonName={"Sign up"} onPress={signUp} />
                    <OptionsLogin content={"Sign up with"} iconsName={["logo-google", "logo-facebook", "logo-github"]} />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center",
        flex: 1,
        paddingTop: 30,
    },
    textStyle: {
        fontWeight: "700",
        fontSize: 22,
        color: "#36454F",
    },
    headingStyle: {
        paddingTop: 20,
    },
    mainPart: {
        marginVertical: 10,
        maxWidth: 290,
        width: "100%",
        gap: 15,
    },
});

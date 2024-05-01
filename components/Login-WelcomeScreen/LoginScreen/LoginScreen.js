import {KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import LoginImage from "./LoginComponent/LoginImage";
import { loginPage } from "../../../assets/resource";
import InputField from "./LoginComponent/InputField";
import { useState } from "react";
import ButtonSubmit from "./LoginComponent/ButtonSubmit";
import OptionsLogin from "./LoginComponent/OptionsLogin";
import Divider from "../../CommonComponent/Divider";

export default function LoginScreen({navigation}) {
    const [emailInputField, setEmailInputField] = useState("");
    const [passwordInputField, setPasswordInputField] = useState("");



    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainerStyle} showsVerticalScrollIndicator={false}>
                <LoginImage source={loginPage.headingImage} />
                <View style={styles.headingStyle}>
                    <Text style={styles.textStyle}>Welcome Back!</Text>
                </View>

                {/*Main part*/}
                <View style={styles.mainPart}>
                    <InputField inputTitle={"Email"} value={emailInputField} onChangeText={(newValue) => setEmailInputField(newValue)} />
                    <InputField inputTitle={"Password"} value={passwordInputField} onChangeText={(newValue) => setPasswordInputField(newValue)} />
                    <ButtonSubmit buttonName={"Log in"} navigation={navigation}/>
                    <OptionsLogin content={"Log in with"} iconsName={["logo-google", "logo-facebook", "logo-github"]} />
                    <Divider width={290} height={1} borderTopWidth={1} borderColor={"#D9D9D9"} marginHorizontal={0}/>

                    {/*Sign up option*/}
                    <View style={styles.signUpContainer}>
                        <Text style={styles.signUpStyle}>No account?</Text>
                        <TouchableOpacity><Text style={{color: "#FF7F50", fontWeight: "bold"}}>Sign up</Text></TouchableOpacity>
                    </View>
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
    mainPart: {
        marginVertical: 10,
        maxWidth: 290,
        width: "100%",
        gap: 15,
    },
    contentContainerStyle: {
        alignItems: "center",
    },
    headingStyle: {
        paddingTop: 20,
    },
    signUpStyle: {
        fontWeight: "500",
    },
    signUpContainer: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        gap: 5
    }
});

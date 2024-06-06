import { StyleSheet, Text, TextInput, View } from "react-native";

export default function EditInfo({ input, setInput, inputFieldName }) {
    return (
        <View style={styles.container}>
            {input !== "" && <Text>{inputFieldName}</Text>}
            <TextInput
                defaultValue={input}
                onChangeText={(newValue) => {
                    setInput(newValue);
                }}
                placeholder={input === "" ? inputFieldName : ""}
            ></TextInput>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderColor: "grey",
    },
});

import * as SecureStorage from "expo-secure-store";

const saveToken = async (name, value) => {
    try {
        await SecureStorage.setItemAsync(name, value);
        // console.log("Set value successfully!");
    } catch (error) {
        console.log("Error when save token: " + error);
    }
};

const getToken = async (name) => {
    try {
        let result = await SecureStorage.getItemAsync(name);
        if (result) {
            return result;
        } else console.log("Not exist!");
    } catch (error) {
        console.log("Error when get token: " + error);
    }
};

const deleteToken = async (name) => {
    try {
        await SecureStorage.deleteItemAsync(name);
    } catch (error) {
        console.log("Error when delete token: " + error);
    }
};

export { saveToken, getToken, deleteToken };

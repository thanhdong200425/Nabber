import { FlatList, StyleSheet, Text, View } from "react-native";
import SearchBar from "./SearchPart/SearchBar";
import { createContext, useState } from "react";
import EmptyPart from "./SearchPart/EmptyPart";
import ResultPart from "./SearchPart/ResultPart";

export const ResultContext = createContext(null);

export default function SearchPage() {
    const [inputValue, setInputValue] = useState("");
    const [isClicked, setIsClicked] = useState(false);
    const [resultFromSearch, setResultFromSearch] = useState([null]);
    const [isEmpty, setIsEmpty] = useState("Find your contacts");
    return (
        <ResultContext.Provider value={[resultFromSearch, setResultFromSearch]}>
            <View style={styles.container}>
                <SearchBar inputValue={inputValue} setInputValue={setInputValue} setIsEmpty={setIsEmpty} isClicked={isClicked} setIsClicked={setIsClicked} />
                {(resultFromSearch[0] === null || resultFromSearch.length === 0) && <EmptyPart setIsEmpty={setIsEmpty} isEmpty={isEmpty} />}
                {resultFromSearch.length > 0 && resultFromSearch[0] !== null && <FlatList style={styles.listData} data={resultFromSearch} renderItem={({ item }) => <ResultPart user={item} id={item.id} />} keyExtractor={(item) => item.id} />}
            </View>
        </ResultContext.Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        marginTop: 5,
        backgroundColor: "#fff",
    },
    listData: {
        marginTop: 2,
        borderTopWidth: 1,
        borderTopColor: "#DBDBDB",
        paddingBottom: 5,
    },
});

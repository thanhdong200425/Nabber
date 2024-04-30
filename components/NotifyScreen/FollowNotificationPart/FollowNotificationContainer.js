import {FlatList, StyleSheet, Text, View} from "react-native";
import FollowNotification from "./FollowNotification";
import Divider from "../../CommonComponent/Divider";

export default function FollowNotificationContainer(props) {
    let data = props.dataSet;

    return <View style={styles.container}>
        <FlatList showsVerticalScrollIndicator={false} data={data} renderItem={({item}) => {
            return <View>
                <FollowNotification src={item.image} username={item.username} content={item.content}
                                    timePost={item.timePost}/>
                <Divider width={"92%"} height={1} borderTopWidth={1} borderColor={"#D0D0D0"}/>
            </View>
        }}/>

        {/*<FollowNotification src={{uri: "https://picsum.photos/200/300"}} username={"Thanh Dong"} content={"Started following you"} timePost={"10:00 AM"}/>*/}
        {/*<Divider width={"92%"} height={1} borderTopWidth={1} borderColor={"#D0D0D0"}/>*/}
    </View>
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%"
    }
})
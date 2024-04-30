import {FlatList, Text, View} from "react-native";
import LikeNotification from "./LikeNotification";
import Divider from "../../CommonComponent/Divider";

export default function LikeNotificationContainer(props) {
    let data = props.dataSet;
    console.log(data);
    return <View>
        <FlatList data={data} renderItem={({item}) => {
            return <View>
                <LikeNotification src={item.image} username={item.username} content={item.content} timePost={item.timePost} postImageSrc={item.postImage}/>
                <Divider width={"92%"} height={1} borderTopWidth={1} borderColor={"#D0D0D0"}/>
            </View>
        }} />
    </View>
}


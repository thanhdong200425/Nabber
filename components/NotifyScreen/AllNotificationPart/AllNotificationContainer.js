import {FlatList, Text, View} from "react-native";
import FollowNotification from "../FollowNotificationPart/FollowNotification";
import LikeNotification from "../LikeNotificationPart/LikeNotification";
import Divider from "../../CommonComponent/Divider";

export default function AllNotificationContainer(props) {
    const data = props.dataSet;
    return <View>
        <FlatList data={data} renderItem={({item}) => {
            return <View>
                {item.postImage === undefined ? (
                    <FollowNotification src={item.image} username={item.username} content={item.content}
                                        timePost={item.timePost}/>
                ) : (
                    <LikeNotification src={item.image} username={item.username} content={item.content}
                                       timePost={item.timePost} postImageSrc={item.postImage}/>)}
                <Divider width={"92%"} height={1} borderTopWidth={1} borderColor={"#D0D0D0"}/>
            </View>
        }}/>
    </View>
}
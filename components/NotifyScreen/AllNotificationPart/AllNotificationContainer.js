import { FlatList, Text, View } from "react-native";
import FollowNotification from "../FollowNotificationPart/FollowNotification";
import LikeNotification from "../LikeNotificationPart/LikeNotification";
import Divider from "../../CommonComponent/Divider";
import { timeDifference } from "../../../helper_functions/handleTime";

export default function AllNotificationContainer({ dataSet }) {
    return (
        <View>
            <FlatList
                data={dataSet}
                renderItem={({ item }) => {
                    const timePost = timeDifference(new Date(), new Date(item.createdAt));
                    return (
                        <View>
                            {item.imageUrl === undefined ? <FollowNotification src={item.imageUrl} username={item.username} content={item.content} timePost={timeDifference(new Date(), new Date(item.createdAt))} /> : <LikeNotification src={{ uri: item.userImage }} username={item.username} content={item.content} timePost={timePost} postImageSrc={{ uri: item.imageUrl }} />}
                            <Divider width={"92%"} height={1} borderTopWidth={1} borderColor={"#D0D0D0"} />
                        </View>
                    );
                }}
            />
        </View>
    );
}

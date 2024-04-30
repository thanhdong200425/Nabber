import { StyleSheet, Text, View } from "react-native";
import Swiper from "react-native-swiper";
import ChildPage from "./ChildPage";
import { welcomePage } from "../../../assets/resource";

export default function WelcomePage({ navigation }) {
    return (
        <Swiper showsButtons={false} loop={false} dotColor={"#A6A6A6"} activeDotColor={"#fff"} dotStyle={styles.dotStyle} activeDotStyle={styles.activeDotStyle}>
            <ChildPage imageSrc={welcomePage.firstWelcomePage} heading={"Connect with friends"} subHeading={"Search for your friends on the app and connect with them. You can also invite your friends who are not on the app yet to join you."} backgroundColor={"#E65834"} />
            <ChildPage imageSrc={welcomePage.secondWelcomePage} heading={"Stay connected"} subHeading={"Chat and have fun with your friends. Create a big community to connect and express your idea."} backgroundColor={"#A7C0BA"} />
            <ChildPage imageSrc={welcomePage.thirdWelcomePage} heading={"And more ...."} subHeading={"Start to explore all the benefits of Nabber"} backgroundColor={["#C6ABF2", "#A98CE0"]} isLastChild={true} navigation={navigation} />
        </Swiper>
    );
}

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    dotStyle: {
        width: 10,
        height: 4,
    },
    activeDotStyle: {
        width: 20,
        height: 4,
    },
});

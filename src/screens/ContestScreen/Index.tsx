import React from 'react'
import { ScrollView, Text, StyleSheet, Animated, FlatList, Dimensions } from 'react-native';
import { DrawerActions } from "@react-navigation/native";
import { Box, DrawerHeader, DrawerContent } from "../../components";
import { HomeNavigationProps } from "../../navigation/navigation";
import ContestCard from "./ContestCard";
import JoinedContestCard from './JoinedContestCard';
const footerHeight = (Dimensions.get("window").width) * 2 / 3;


const DATA = [
    {
        contest: "Contest",
        pair: "EUR USD",
        time: "1: 30 PM",
        contest_fees: "Rs.10",
        status: "Live now",
        id: 1,
        price: '1.35678',
        duration: 12 * (60 * 10 + 30)
    },
    {
        contest: "Contest",
        pair: "USD CAD",
        time: "1: 30 PM",
        contest_fees: "Rs.10",
        status: "Live now",
        id: 2,
        price: '1.35678',
        duration: 12 * (60 * 10 + 30)
    },
    {
        contest: "Contest",
        pair: "AUD USD",
        time: "1: 30 PM",
        contest_fees: "Rs.12",
        status: "Live now",
        id: 3,
        price: '1.35678',
        duration: 12 * (60 * 10 + 30)
    },
    {
        contest: "Contest",
        pair: "AUD USD",
        time: "6: 00 PM",
        contest_fees: "Rs.14",
        status: "Live now",
        id: 4,
        price: '1.35678',
        duration: 12 * (120 * 10 + 30)
    },
    {
        contest: "Contest",
        pair: "EUR USD",
        time: "6: 00 PM",
        contest_fees: "Rs.18",
        status: "Live now",
        id: 5,
        price: '1.35678',
        duration: 12 * (120 * 10 + 30)
    },
    {
        contest: "Contest",
        pair: "AUD USD",
        time: "6: 00 PM",
        contest_fees: "Rs.19",
        status: "Live now",
        id: 6,
        price: '1.35678',
        duration: 12 * (120 * 10 + 30)
    },
];



const ContestScreen = ({ navigation }: HomeNavigationProps<"HomeScreen">) => {
    const y = new Animated.Value(0)
    const onScroll = Animated.event([{ nativeEvent: { contentOffset: { y } } }], {
        useNativeDriver: true,
    });
    const renderItem = ({ item }) => (
        <ContestCard {...item} />
    );
    const joinedrenderItem = ({ item }) => (
        <JoinedContestCard {...item} />
    );
    return (
        <DrawerContent>
            <Box backgroundColor="background3">
                <DrawerHeader
                    left={{ icon: "menu", onPress: () => navigation.dispatch(DrawerActions.openDrawer()), color: "background" }}
                    right={{ icon: "share", onPress: () => true }}
                    title="Fx-Whistle"
                />
            </Box>
            <Box>
                <Text style={styles.card}>
                    Joined Contest
            </Text>
            </Box>
            <Box backgroundColor="background">
            <ScrollView horizontal>
                    <FlatList
                        data={DATA}
                        renderItem={joinedrenderItem}
                        horizontal
                    />
                </ScrollView>
            </Box>
            <Box>
                <Text style={styles.card}>
                    Upcoming Contest
                </Text>
            </Box>
            <Box backgroundColor="background">
                <ScrollView
                    contentContainerStyle={styles.scrollView}
                    showsVerticalScrollIndicator={false}>
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                    // keyExtractor={(item) => item.id}
                    />
                </ScrollView>
            </Box>
        </DrawerContent>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#00162B",
        height: "50%",
        marginTop: 40
    },
    root: {
        padding: 20,
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'white'
    },
    card: {
        padding: 5,
        fontWeight: 'bold',
        fontSize: 15,
        color: '#000',
        alignContent: 'center',
        justifyContent: 'center'
    },
    scrollView: {
        paddingBottom: footerHeight,
    },
})

export default ContestScreen;
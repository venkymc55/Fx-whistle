import React from 'react'
import {View, Text, StyleSheet, Dimensions, ScrollView, FlatList} from 'react-native';
import { DrawerActions } from "@react-navigation/native";
import { Box, DrawerHeader, DrawerContent } from "../../components";
import { HomeNavigationProps } from "../../navigation/navigation";
import CompletedContestCard from './CompletedContestCard';


const footerHeight = (Dimensions.get("window").width)*2/3;

const DATA = [
  {
      contest: "Contest",
      pair: "EUR USD",
      time: "1: 30 PM",
      contest_fees: "Rs.10",
      id: 1,
      status: 'Upcoming',
      duration: 12 * (60 * 10 + 30)
  },
  {
      contest: "Contest",
      pair: "USD CAD",
      time: "1: 30 PM",
      contest_fees: "Rs.10",
      id: 2,
      status: 'Upcoming',
      duration: 12 * (60 * 10 + 30)
  },
  {
      contest: "Contest",
      pair: "AUD USD",
      time: "1: 30 PM",
      contest_fees: "Rs.12",
      id: 3,
      status: 'Upcoming',
      duration: 12 * (60 * 10 + 30)
  },
  {
      contest: "Contest",
      pair: "AUD USD",
      time: "6: 00 PM",
      contest_fees: "Rs.14",
      id: 4,
      status: 'Live now',
      duration: 12 * (120 * 10 + 30)
  },
  {
      contest: "Contest",
      pair: "EUR USD",
      time: "6: 00 PM",
      contest_fees: "Rs.18",
      id: 5,
      status: 'Live now',
      duration: 12 * (120 * 10 + 30)
  },
  {
      contest: "Contest",
      pair: "AUD USD",
      time: "6: 00 PM",
      contest_fees: "Rs.19",
      id: 6,
      status: 'Live now',
      duration: 12 * (120 * 10 + 30)
  },
];

const CurrentTopBar = ({ navigation }: HomeNavigationProps<"HomeScreen">) => {
  const renderItem = ({ item }) => (
    <CompletedContestCard {...item} />
    );
    return (
        <DrawerContent>
        <Box backgroundColor="background">
            <ScrollView
            showsVerticalScrollIndicator={false}
          >
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

const styles=StyleSheet.create({
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
    scrollView: {
      paddingBottom: footerHeight,
    },
})

export default CurrentTopBar;
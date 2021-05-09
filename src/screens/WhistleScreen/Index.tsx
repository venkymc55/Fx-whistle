import React from 'react'
import {View, Text, StyleSheet, Dimensions, ScrollView, FlatList} from 'react-native';
import { DrawerActions } from "@react-navigation/native";
import { Box, DrawerHeader, DrawerContent } from "../../components";
import { HomeNavigationProps } from "../../navigation/navigation";
import MaterialTopTabNavigator from "./MaterialTopBarNavigator";

const footerHeight = (Dimensions.get("window").width)*2/3;

const WhistleScreen = ({ navigation }: HomeNavigationProps<"HomeScreen">) => {

    return (
        <DrawerContent >
        <Box backgroundColor="background3">
          <DrawerHeader
            left={{icon: "menu", onPress: () => navigation.dispatch(DrawerActions.openDrawer()), color: "background"}}
            right={{ icon: "bell", onPress: () => true }}
            title="Signal - Whistle"
          />
        </Box>
          <MaterialTopTabNavigator />
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

export default WhistleScreen;
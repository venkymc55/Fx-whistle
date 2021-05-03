import React from "react";
import { Dimensions, Image } from "react-native";
import {
  DrawerActions,
  useNavigation,
  CommonActions,
} from "@react-navigation/native";

import { Box, useTheme, Text, DrawerHeader } from "../../../components";

import DrawerItem, { DrawerItemProps } from "./DrawerItem";

export const assets = [require("./assets/drawer.png")];

const { width } = Dimensions.get("window");
export const DRAWER_WIDTH = width * 0.8;
const aspectRatio = 750 / 1125;
const height = DRAWER_WIDTH * aspectRatio;

const items: DrawerItemProps[] = [
    {
      icon: "user",
      label: "Edit Profile",
      screen: "EditProfile",
      color: "drawer2",
    },
    {
      icon: "settings",
      label: "Notifications Settings",
      screen: "Settings",
      color: "drawer4",
    },
    {
      icon: "log-out",
      label: "Logout",
      onPress: (navigation) =>
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: "Authentication" }],
          })
        ),
      color: "secondary",
    },
  ];
  const Drawer = () => {
    const navigation = useNavigation();
    const theme = useTheme();
    return (
      <Box flex={1}>
        <Box flex={0.2} backgroundColor="background">
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            borderBottomRightRadius="xl"
            backgroundColor="background3"
          >
            <DrawerHeader
              title="Menu"
              left={{
                icon: "x",
                onPress: () => navigation.dispatch(DrawerActions.closeDrawer()),
                color: "background"
              }}
              right={{
                icon: "shopping-bag",
                onPress: () => navigation.navigate("Cart"),
              }}
              dark
            />
          </Box>
        </Box>
        <Box flex={0.8}>
          <Box flex={1} backgroundColor="secondary" />
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            backgroundColor="background"
            borderTopLeftRadius="xl"
            borderBottomRightRadius="xl"
            justifyContent="center"
            padding="xl"
          >
            <Box
              position="absolute"
              left={DRAWER_WIDTH / 2 - 50}
              top={-50}
              backgroundColor="primary"
              width={100}
              height={100}
              style={{ borderRadius: 50 }}
            />
            <Box marginVertical="m">
              <Text variant="title1" textAlign="center">
                Venky
              </Text>
              <Text variant="body" textAlign="center">
                venky@gmail.com
              </Text>
            </Box>
            {items.map((item) => (
              <DrawerItem key={item.icon} {...item} />
            ))}
          </Box>
        </Box>
        <Box
          backgroundColor="background3"
          width={DRAWER_WIDTH}
          overflow="hidden"
          height={height * 0.61}
        >
        </Box>
      </Box>
    );
  };
  
  export default Drawer;
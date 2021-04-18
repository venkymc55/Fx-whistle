import { DrawerActions } from "@react-navigation/native";
import React from "react";
import { Dimensions } from "react-native";

import { Box, DrawerHeader, Text, useTheme } from "../../../components";
import { HomeNavigationProps } from "../../../Navigation/Navigation";

import PersonalInfo from "./PersonalInfo";

const { width } = Dimensions.get("window");
const tabs = [
  { id: "configuration", title: "Configuration" },
  { id: "info", title: "Personal Info" },
];

const EditProfile = ({ navigation }: HomeNavigationProps<"EditProfile">) => {
  const theme = useTheme();
  return (
    <Box flex={1} backgroundColor="background">
      <Box flex={0.25} backgroundColor="background">
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          borderBottomRightRadius="xl"
          backgroundColor="secondary"
        >
          <DrawerHeader
            title="Edit Profile"
            left={{
              icon: "menu",
              onPress: () => navigation.dispatch(DrawerActions.openDrawer()),
            }}
            dark
          />
        </Box>
      </Box>
      <Box>
        <Box
          position="absolute"
          left={width / 2 - 50}
          top={-50}
          backgroundColor="primary"
          width={100}
          height={100}
          style={{ borderRadius: 50 }}
        />
        <Box marginVertical="m" style={{ marginTop: 50 + theme.spacing.m }}>
          <Text variant="title1" textAlign="center">
            Mike Peter
          </Text>
          <Text variant="body" textAlign="center">
            mike@flexinstudio.com
          </Text>
        </Box>
      </Box>
        <PersonalInfo />
    </Box>
  );
};

export default EditProfile;
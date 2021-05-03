import React from "react";

import { Box, DrawerContent, DrawerHeader } from "../../../components";
import { HomeNavigationProps } from "../../../navigation/navigation";

import Notification from "./Notification";

const Settings = ({ navigation }: HomeNavigationProps<"Settings">) => {
    return (
      <DrawerContent>
        <Box backgroundColor="background">
          <DrawerHeader
            left={{icon: "menu", onPress: () => navigation.openDrawer(), color: "background"}}
            right={{ icon: "share", onPress: () => true }}
            title="Notifications"
          />
          <Box padding="m">
            <Notification
              title="Push Notifcations"
              description="Receive daily notifications"
            />
          </Box>
        </Box>
      </DrawerContent>
    );
  };
  
  export default Settings;
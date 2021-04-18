import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { HomeRoutes } from "../../navigation/navigation";

// import TransactionHistory from "./TransactionHistory";
import DrawerContent, { DRAWER_WIDTH } from "./Drawer";
import EditProfile from "./EditProfile";
import Settings from "./Settings";


const Drawer = createDrawerNavigator<HomeRoutes>();

export const HomeNavigator = () => (
  <Drawer.Navigator
    drawerContent={() => <DrawerContent />}
    drawerStyle={{
      width: DRAWER_WIDTH,
    }}
  >
    <Drawer.Screen name="EditProfile" component={EditProfile} />
    <Drawer.Screen name="Settings" component={Settings} />
  </Drawer.Navigator>
);
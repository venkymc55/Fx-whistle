import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from '@react-navigation/stack';
import { HomeRoutes } from "../../navigation/navigation";

import NotFoundScreen from '../NotFoundScreen';
import { RootStackParamList } from '../../../types';

import BottomTabNavigator from '../../navigation/BottomTabNavigator';
// import TransactionHistory from "./TransactionHistory";
import DrawerContent, { DRAWER_WIDTH } from "./Drawer";
// import EditProfile from "./EditProfile";
import Settings from "./Settings";


const Drawer = createDrawerNavigator<HomeRoutes>();

export const HomeNavigator = () => (
  <Drawer.Navigator
    drawerContent={() => <DrawerContent />}
    drawerStyle={{
      width: DRAWER_WIDTH,
    }}
  >
    
    <Drawer.Screen name="HomeScreen" component={RootNavigator} />
    <Drawer.Screen name="Settings" component={Settings} />
  </Drawer.Navigator>
);

const Stack = createStackNavigator<RootStackParamList>();


function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
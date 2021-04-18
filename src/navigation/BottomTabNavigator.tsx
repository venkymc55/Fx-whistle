import { Ionicons, Entypo, AntDesign, MaterialCommunityIcons, FontAwesome5   } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { BottomTabParamList } from '../types';

import HomeScreen from '../screens/HomeScreen/Index';
import HistoryScreen from '../screens/RankingScreen/Index';
import PortfolioScreen from '../screens/PortfolioScreen/Index';
import WhistleScreen from '../screens/WhistleScreen/Index';
import ProfileScreen from '../screens/ProfileScreen/Index';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="home" size={25} color={"#00162B"} 
          style={{ borderWidth: 1, borderColor: "#DDDDDD", borderRadius:5}} />,
        }}
      />
      <BottomTab.Screen
        name="Share"
        component={HistoryScreen}
        options={{
          tabBarIcon: ({ color }) => <Entypo name="folder-images" size={25} color="#00162B"
          style={{ borderWidth: 1, borderColor: "#DDDDDD", borderRadius:5}} />,
        }}
      />
      <BottomTab.Screen
        name="Signal"
        component={PortfolioScreen}
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="piechart" size={25} color={"#00162B"} 
          style={{ borderWidth: 1, borderColor: "#DDDDDD", borderRadius:5}}/>,
        }}
      />
      <BottomTab.Screen
        name="Chart"
        component={WhistleScreen}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="chart-line"  size={25} color={"#00162B"} 
          style={{ borderWidth: 1, borderColor: "#DDDDDD", borderRadius:5}} />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="account-cog" size={25} color={"#00162B"} 
          style={{ borderWidth: 1, borderColor: "#DDDDDD", borderRadius:5}} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab


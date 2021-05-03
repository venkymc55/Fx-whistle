import { Ionicons, Entypo, MaterialIcons, MaterialCommunityIcons, FontAwesome5   } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { BottomTabRoutes } from '../navigation/navigation';

import HomeScreen from '../screens/HomeScreen';
import HistoryScreen from '../screens/RankingScreen/Index';
import MyContestScreen from '../screens/MyContestScreen';
import ContestDetails from "../screens/ContestScreen/ContestDetails";
import WhistleScreen from '../screens/WhistleScreen';
import ContestScreen from '../screens/ContestScreen/Index'
import { createStackNavigator } from '@react-navigation/stack';


const BottomTab = createBottomTabNavigator<BottomTabRoutes>();

const HomeStack = createStackNavigator();
const ContestStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator screenOptions={{
    headerShown: false}}>
    <HomeStack.Screen  name='Home' component={HomeScreen}/>
  </HomeStack.Navigator>
)

const ContestStackScreen = () => (
  <ContestStack.Navigator screenOptions={{
    headerShown: false}}>
    <ContestStack.Screen  name='Contests' component={ContestScreen}/>
    <ContestStack.Screen name="Graph" component={ContestDetails}/>
  </ContestStack.Navigator>
)

const MyContestStackScreen = () => (
  <ContestStack.Navigator screenOptions={{
    headerShown: false}}>
    <ContestStack.Screen  name='MyContests' component={MyContestScreen}/>
    
  </ContestStack.Navigator>
)

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="home" size={25} color={"#00162B"} 
          style={{ borderWidth: 1, borderColor: "#DDDDDD", borderRadius:5}} />,
        }}
      />
      <BottomTab.Screen
        name="Contests"
        component={ContestStackScreen}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="money-check" size={22} color="#00162B"
          style={{ borderWidth: 1, borderColor: "#DDDDDD", borderRadius:5}} />,
        }}
      />
      <BottomTab.Screen
        name="MyContest"
        component={MyContestStackScreen}
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="emoji-events" size={28} color={"#00162B"} 
          style={{ borderWidth: 1, borderColor: "#DDDDDD", borderRadius:5}}/>,
        }}
      />
      <BottomTab.Screen
        name="Binary"
        component={WhistleScreen}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="chart-line"  size={25} color={"#00162B"} 
          style={{ borderWidth: 1, borderColor: "#DDDDDD", borderRadius:5}} />,
        }}
      />
      <BottomTab.Screen
        name="Share"
        component={HistoryScreen}
        options={{
          tabBarIcon: ({ color }) =>  <Entypo name="folder-images" size={25} color={"#00162B"} 
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


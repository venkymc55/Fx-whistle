import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CurrentTopBar from './CurrentTopBar'
import CompletedTopBar from "./CompletedTopBar"
import { FontDisplay } from 'expo-font';

const Tab = createMaterialTopTabNavigator();

function MaterialTopTabNavigator() {
    return (
      <Tab.Navigator tabBarOptions={{labelStyle: { fontSize: 13, fontWeight: 'bold' }, }}>
        <Tab.Screen name="Current" component={CurrentTopBar} />
        <Tab.Screen name="Completed" component={CompletedTopBar} />
      </Tab.Navigator>
    );
  }

export default MaterialTopTabNavigator;
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from "@react-navigation/stack";
import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
// import Navigation from './src/navigation';
import { AppRoutes } from "./src/navigation/navigation";
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import { ThemeProvider } from "./src/components/Theme";
import { HomeNavigator } from "./src/screens/ProfileDrawer";
import { LoadAssets } from "./src/components";

const fonts = {
  "SFProDisplay-Bold": require("./assets/fonts/SF-Pro-Display-Bold.otf"),
  "SFProDisplay-Semibold": require("./assets/fonts/SF-Pro-Display-Semibold.otf"),
  "SFProDisplay-Regular": require("./assets/fonts/SF-Pro-Display-Regular.otf"),
  "SFProDisplay-Medium": require("./assets/fonts/SF-Pro-Display-Medium.otf"),
};

const AppStack = createStackNavigator<AppRoutes>();

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ThemeProvider>
        <LoadAssets {...{ fonts}}>
      <SafeAreaProvider>
  
        <AppStack.Navigator headerMode="none">
        {/* <AppStack.Screen name="Home" component={BottomTabNavigator} /> */}
            <AppStack.Screen name="Drawer" component={HomeNavigator} />
        </AppStack.Navigator>
      </SafeAreaProvider>
      </LoadAssets>
      </ThemeProvider>
    );
  }
}

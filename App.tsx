import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from "@react-navigation/stack";
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { AppRoutes } from "./navigation/navigation";
import { ThemeProvider } from "./components/Theme";
import { HomeNavigator } from "./screens/ProfileDrawer/Index";

// const fonts = {
//   "SFProDisplay-Bold": require("./assets/fonts/SF-Pro-Display-Bold.otf"),
//   "SFProDisplay-Semibold": require("./assets/fonts/SF-Pro-Display-Semibold.otf"),
//   "SFProDisplay-Regular": require("./assets/fonts/SF-Pro-Display-Regular.otf"),
//   "SFProDisplay-Medium": require("./assets/fonts/SF-Pro-Display-Medium.otf"),
// };

const AppStack = createStackNavigator<AppRoutes>();

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ThemeProvider>
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <HomeNavigator />
        <StatusBar />
      </SafeAreaProvider>
      </ThemeProvider>
    );
  }
}

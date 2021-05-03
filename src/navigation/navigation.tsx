import { RouteProp, CompositeNavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

export interface AuthNavigationProps<
  RouteName extends keyof AuthenticationRoutes
> {
  navigation: CompositeNavigationProp<
    StackNavigationProp<AuthenticationRoutes, RouteName>,
    CompositeNavigationProp<
    BottomTabNavigationProp<AppRoutes, "Home">,
    DrawerNavigationProp<AppRoutes, "Drawer">
    >
  >;
  route: RouteProp<AuthenticationRoutes, RouteName>;
}

export interface MainNavigationProps<RouteName extends keyof BottomTabRoutes> {
  navigation: BottomTabNavigationProp<BottomTabRoutes, RouteName>
  route: RouteProp<BottomTabRoutes, RouteName>;
}

export interface HomeNavigationProps<RouteName extends keyof HomeRoutes> {
  navigation: DrawerNavigationProp<HomeRoutes, RouteName>;
  route: RouteProp<HomeRoutes, RouteName>;
}





export type AppRoutes = {
  Authentication: undefined;
  Drawer: undefined;
  Home: undefined;
};

export type AuthenticationRoutes = {
  Onboarding: undefined;
  Welcome: undefined;
  Login: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  PasswordChanged: undefined;
};

export type HomeRoutes = {
  TransactionHistory: undefined;
  EditProfile: undefined;
  HomeScreen: undefined;
  Settings: undefined;
};

export type BottomTabRoutes = {
  Home: undefined;
  Share: undefined;
  MyContest: undefined;
  Binary: undefined;
  Contests: undefined;
  Graph: undefined;
  Worklet: undefined;
};

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  Worklet: undefined;
};
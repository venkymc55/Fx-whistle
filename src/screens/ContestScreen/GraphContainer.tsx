import React, { FC, ReactNode } from "react";
import { Dimensions, View } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

import { Box, useTheme } from "../../components";
import Graph from "../../components/LineChart"
import ContestJoiningCard from './ContestJoiningCard';

const { width } = Dimensions.get("window");
const aspectRatio = width / 375;
const height = 682 * aspectRatio;
const minHeight = 228 * aspectRatio;
const snapPoints = [-(height - minHeight), 0];

interface GraphProps {
  children: ReactNode;
}

const GraphContainer = ({ children }: GraphProps ) => {
  const theme = useTheme();
  const translateY = useSharedValue(0);
  const style = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));
  return (
    <Box flex={1}>
        <Animated.View
          style={[
            {
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height,
              backgroundColor: "white",
            },
            style,
          ]}
        >
          <Graph />
          <View
            style={{
              flex: 1,
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              // height: theme.borderRadii.xl,
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <ContestJoiningCard />
          </View>
        </Animated.View>
    </Box>
  );
};

export default GraphContainer;
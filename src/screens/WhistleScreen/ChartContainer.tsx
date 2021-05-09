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
import Chart from "../../components/LineChart/Chart";

const { width, height } = Dimensions.get("window");
const aspectRatio = width / 375;
// const height = 682 * height;
const minHeight = 228 * aspectRatio;
const snapPoints = [-(height - minHeight), 0];

interface GraphProps {
  children: ReactNode;
}

const ChartContainer = () => {
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
              left: 0,
              right: 0,
              height,
              backgroundColor: "white",
              borderBottomLeftRadius: theme.borderRadii.xl,
              borderBottomRightRadius: theme.borderRadii.xl,
            },
            style,
          ]}
        >
          <Chart />
          <View
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: theme.borderRadii.xl,
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <View
              style={{
                height: 5 * aspectRatio,
                backgroundColor: theme.colors.background2,
                width: 60 * aspectRatio,
                borderRadius: 2.5 * aspectRatio,
                marginBottom: 200,
              }}
            />
          </View>
        </Animated.View>
    </Box>
  );
};

export default ChartContainer;
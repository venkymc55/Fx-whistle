import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import { Appbar } from 'react-native-paper'; 
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

import Chart from "../../components/Chart";
// import Values from "../../components/Values";
import Line from "../../components/Line";
import Label from "../../components/Label";
import Content from "../../components/Content";
import Header from "../../components/Header";
import { SIZE, STEP, clamp } from "../../components/ChartHelpers";

const { height, width } = Dimensions.get("window")

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00162B",
    height: height, 
    marginTop: 40
  },
});

const WhistleScreen = () => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const opacity = useSharedValue(0);
  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');
  const onGestureEvent = useAnimatedGestureHandler({
    onActive: ({ x, y }) => {
      opacity.value = 1;
      translateY.value = clamp(y, 0, SIZE);
      translateX.value = x - (x % STEP) + STEP / 2;
    },
    onEnd: () => {
      opacity.value = 0;
    },
  });
  const horizontal = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }],
  }));
  const vertical = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateX: translateX.value }],
  }));
  return (
    <View style={styles.container}>
      <View>
      <Appbar.Header style={{ backgroundColor: "#00162B", height: height * 0.05}}>
                <Appbar.Content title="Whistle" subtitle="Trading signals" style={{paddingBottom: 15, justifyContent: "center"}} />
                {/* <Appbar.Action icon="magnify" onPress={_handleSearch} style={{paddingBottom: 15, justifyContent: "center"}}/> */}
                <Appbar.Action icon="logout" onPress={_handleMore} style={{paddingBottom: 15, justifyContent: "center"}}/>
            </Appbar.Header>
        <View >
        <Header />
        </View>
      </View>
      <View style={{ marginTop: 90, paddingVertical:10}}>
        <Chart />
        <PanGestureHandler minDist={0} {...{ onGestureEvent }}>
          <Animated.View style={StyleSheet.absoluteFill}>
            <Animated.View style={[StyleSheet.absoluteFill, horizontal]}>
              <Line x={SIZE} y={0} />
            </Animated.View>
            <Animated.View style={[StyleSheet.absoluteFill, vertical]}>
              <Line x={0} y={SIZE} />
            </Animated.View>
            <Label {...{ translateY, opacity }} />
          </Animated.View>
        </PanGestureHandler>
      </View>
      <Content />
    </View>
  );
};

export default WhistleScreen;
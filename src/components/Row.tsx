import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import { ReText } from "./ReText";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    label: {
        fontSize: 20,
        color: "grey"
    },
    value: {
        fontSize: 20,
        fontVariant: ["tabular-nums"]
    }
});

interface RowProps {
    label: string;
    color: Animated.SharedValue<string>;
    value: Animated.SharedValue<number>;
  }
  
  const Row = ({ label, value, color }: RowProps) => {
    'worklet';
    const style = useAnimatedStyle(() => ({ color: color.value }));
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <ReText text={value} style={[styles.value, style]} />
      </View>
    );
  };
  
  export default Row;
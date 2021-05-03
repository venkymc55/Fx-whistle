import React from "react";
import { Dimensions, ImageRequireSource, StyleSheet, View, Text } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

import { Box } from "../../components";

const { width: wWidth } = Dimensions.get("window");
const width = wWidth * 0.75;
const height = width * (425 / 294);
const borderRadius = 24;
const snapPoints = [-wWidth, 0, wWidth];

interface CardProps {
  step: number;
  index: number;
  aIndex: Animated.SharedValue<number>;
}

const ContestJoiningCard = () => {

  return (
      <View style={styles.cartCard}>
        <View
          style={{
            height: 100,
            paddingVertical: 10,
            flex: 1,
          }}>
          <Text style={{fontSize: 13, color: 'white'}}>Join Contest</Text>
          <Text style={{marginTop:10, fontSize: 18, color: 'white', marginLeft: 10}}>
            GBPUSD
          </Text>
          <Text style={{marginTop:10, fontSize: 13, color: 'white', marginLeft: 10}}>
            upto 3 predict
          </Text>
        </View>
        <View style={{marginRight: 30, alignItems: 'center'}} >
        <Text style={{fontSize: 15, marginBottom: 5, color: 'white', marginRight: 30}}>1.34567</Text>
        </View>
        <View style={{marginRight: 20, alignItems: 'center'}}>
          
          <View style={styles.actionBtn}>
          <Text style={{fontWeight: 'bold', fontSize: 13, color: '#000', marginTop: 5}}>
            Join
          </Text>
          </View>
        </View>
      </View>
  );
};
const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  cartCard: {
    height: 100,
    elevation: 15,
    width: wWidth,
    backgroundColor: "#00162B",
    marginVertical: 28,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionBtn: {
    width: 80,
    height: 30,
    backgroundColor: "#FFA500",
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
});

// Chetak@5077
export default ContestJoiningCard;
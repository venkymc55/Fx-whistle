import React, { useState, useEffect } from "react";
import { Dimensions, ImageRequireSource, StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native";
import { Icon } from 'react-native-elements'
import { useNavigation } from "@react-navigation/native";
import Animated from "react-native-reanimated";
import { MainNavigationProps } from "../../navigation/navigation";
import CountDown from 'react-native-countdown-component';
import moment from 'moment';
import { MaterialIcons } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';
import { Box } from "../../components";

const { width: wWidth } = Dimensions.get("window");
const card_width = wWidth * 0.90;
const bar_width = wWidth * 0.75;
const height = wWidth * (150 / 300);

interface Item {
  contest: string;
  pair: string;
  time: string;
  contest_fees: string;
  id: number;
  status: string;
  duration: number;
}

const CurrentContestCard = (item: Item) => {
  const navigation = useNavigation();

  return (

    <TouchableWithoutFeedback onPress={() => true}>
      <View style={styles.cartCard}>
        <View
          style={{
            height: height,
            marginLeft: 20,
            paddingVertical: 20,
            flex: 1,
          }}>
             <Progress.Bar progress={0.8} width={bar_width} color={'green'}/>
          <Text style={{ marginTop: 20, fontWeight: 'bold', fontSize: 25, color: 'white' }}>
            {item.pair}
          </Text>
            {/* <MaterialIcons name="access-time" size={25} color="white"/> */}
        </View>
        <View style={{ marginRight: 30, alignItems: 'center' }} >
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', marginRight: 20, marginTop: 10, alignItems: 'center' }}>
            {item.status}</Text>
            
        </View>
        <View style={{ marginRight: 20, alignItems: 'center' }}>
          <Icon name="arrow-up" size={75} color="green" type="entypo" />
        </View>
      </View>
    </TouchableWithoutFeedback>
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
    height: height,
    width: card_width,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: "#00162B",
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionBtn: {
    width: 80,
    height: 30,
    backgroundColor: "#fcffa4",
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
  },
});

export default CurrentContestCard;
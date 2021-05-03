import React, {useState, useEffect} from "react";
import { Dimensions, ImageRequireSource, StyleSheet, View, Text , TouchableWithoutFeedback} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from "@react-navigation/native";
import Animated from "react-native-reanimated";
import { MainNavigationProps } from "../../navigation/navigation";
import CountDown from 'react-native-countdown-component';
import moment from 'moment';
import { Box } from "../../components";

const { width: wWidth } = Dimensions.get("window");
const width = wWidth * 0.75;
const height = width * (425 / 294);
const borderRadius = 24;
const snapPoints = [-wWidth, 0, wWidth];

interface Item {
  contest: string;
  pair: string;
  time: string;
  contest_fees: string;
  id: number;
  status: string;
  duration: number;
}

const CompletedContestCard = (item: Item) => {
  const navigation = useNavigation();

  return (
    
    <TouchableWithoutFeedback onPress={() => true}> 
      <View style={styles.cartCard}>
        <View
          style={{
            height: 100,
            marginLeft: 10,
            paddingVertical: 20,
            flex: 1,
          }}>
          <Text style={{marginTop:18, fontSize: 18, color: 'white'}}>
          {item.pair}
          </Text>
  
        </View>
        <View style={{marginRight: 30, alignItems: 'center'}} >
        <Text style={{fontSize: 15, color: 'white', marginRight: 3, marginTop:10, alignItems: 'center'}}>
        {item.status}</Text>
        </View>
        <View style={{marginRight: 20, alignItems: 'center'}}>
          
          <View style={styles.actionBtn}>
          <Text style={{fontWeight: 'bold', fontSize: 13, color: '#000', marginTop: 5}} onPress={() => true}>
          {item.contest_fees}
          </Text>
          </View>
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
    height: 200,
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

export default CompletedContestCard;
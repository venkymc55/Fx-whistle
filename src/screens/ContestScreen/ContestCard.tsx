import React, {useState, useEffect} from "react";
import { Dimensions, ImageRequireSource, StyleSheet, View, Text , TouchableWithoutFeedback} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from "@react-navigation/native";
import Animated from "react-native-reanimated";
import { MainNavigationProps } from "../../navigation/navigation";
import CountDown from 'react-native-countdown-component';
import moment from 'moment';
import { Box } from "../../components";
import * as Progress from 'react-native-progress';

const { width: wWidth } = Dimensions.get("window");
const width = wWidth * 0.75;
const height = width * 0.40;
// const borderRadius = 24;
// const snapPoints = [-wWidth, 0, wWidth];

interface Item {
  contest: string;
  pair: string;
  time: string;
  contest_fees: string;
  id: number;
  duration: number;
}

const ContestCard = (item: Item) => {
  const navigation = useNavigation();

  return (
    
    <TouchableWithoutFeedback onPress={() => navigation.navigate("Graph")}> 
      <View style={styles.cartCard}>
        <View
          style={{
            height: height,
            marginLeft: 10,
            paddingVertical: 20,
            flex: 1,
            marginTop:height/2.5
          }}>
          <Text style={{ fontSize: 18, color: 'white'}}>
          {item.pair}
          </Text>
        </View>
        <View style={{marginRight: width/15, justifyContent:'center', marginTop: width/30}} >
          <CountDown
          until={item.duration}
          digitStyle={{backgroundColor: '#FFF'}}
          digitTxtStyle={{color: '#DC143C'}}
          separatorStyle={{color: '#FFF', marginBottom: 15}}
          timeToShow={['H', 'M', 'S']}
          //on Press call
          size={width/28}
          showSeparator/>
        </View>
        <View style={{marginRight: 20, alignItems: 'center'}}>
          
          <View style={styles.actionBtn}>
          <Text style={{fontWeight: 'bold', fontSize: 13, color: '#000', marginTop: width/50}} onPress={() => navigation.navigate("Graph")}>
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
    height: height,
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
    width: width /3.5,
    height: width/9,
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

export default ContestCard;
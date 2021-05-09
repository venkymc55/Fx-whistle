import React, { Component } from "react";
import {Image, Text, View, StyleSheet} from "react-native";
import { string } from "yup";

const oddRowColor = "white";
const evenRowColor = "#f2f5f7";

interface Items  {
    index: number;
    icon: string;
    sort: void;
    labelBy: object;
    sortBy: object;
    containerStyle: object;
    scoreStyle: object,
    rankStyle: object,
    labelStyle: object,
    avatarStyle: object,
}

const LeaderBoard = (index , items: Items) => {
    const sortBy = items.sortBy;
    const evenColor = 'white' || evenRowColor;
    const oddColor = 'white'  || oddRowColor;
    const rowColor = items.index % 2 === 0 ? evenColor : oddColor;
    return (
    <View style={[styles.row, { backgroundColor: rowColor }]}>
      <View style={styles.left}>
        <Text
          style={[
            styles.rank,
            items.rankStyle,
            items.index < 9 ? styles.singleDidget : styles.doubleDidget
          ]}
        >
          {parseInt(index) + 1}
        </Text>
        {items.icon && (
          <Image
            source={{ uri: items.icon }}
            style={[styles.avatar, items.avatarStyle]}
          />
        )}
        <Text style={[styles.label, items.labelStyle]} numberOfLines={1}>
          {items.labelBy}
        </Text>
      </View>
      <Text style={[styles.score, items.scoreStyle]}>
        {sortBy || 0}
      </Text>
    </View>
    )};

  const styles = StyleSheet.create({
    row: {
      paddingTop: 15,
      paddingBottom: 15,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      borderWidth: 0.5,
      borderRadius: 5,
      borderColor: "#d6d7da"
    },
    left: {
      flexDirection: "row",
      alignItems: "center"
    },
    rank: {
      fontSize: 17,
      fontWeight: "bold",
      marginRight: 5
    },
    singleDidget: {
      paddingLeft: 16,
      paddingRight: 6
    },
    doubleDidget: {
      paddingLeft: 10,
      paddingRight: 2
    },
    label: {
      fontSize: 17,
      flex: 1,
      paddingRight: 80
    },
    score: {
      fontSize: 20,
      fontWeight: "bold",
      position: "absolute",
      right: 15,
      paddingLeft: 15
    },
    avatar: {
      height: 30,
      width: 30,
      borderRadius: 30 / 2,
      marginRight: 10
    }
  });

  export default LeaderBoard;
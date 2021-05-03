import React from 'react';
import { Dimensions, Image, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");
const ratio = 228 / 362;
export const CARD_WIDTH = width * 0.8;
export const CARD_HEIGHT = CARD_WIDTH * ratio;
const styles = StyleSheet.create({
    card: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT
    }
});

export enum Cards{
    CARD1,
    CARD2,
    CARD3,
    CARD4,
}

interface CardProps {
    item: Cards,
}

export default ({ item }: CardProps ) => {
    let source: number;
    switch (item) {
        case Cards.CARD1:
            source = require("../../assets/images/drawer.png")
            break;
        case Cards.CARD2:
            source = require("../../assets/images/drawer.png")
            break;
        case Cards.CARD3:
            source = require("../../assets/images/drawer.png")
            break;
        case Cards.CARD4:
            source = require("../../assets/images/drawer.png")
            break;
        default:
            throw Error("Invalid card style");

    }
    return <Image style={styles.card} {...{source}}/>;
}
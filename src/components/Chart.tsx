import React from "react";
import { ScrollView } from "react-native";
import { Svg } from "react-native-svg";
import { Grid } from 'react-native-svg-charts'

import Candle from './Candle';
import { SIZE, STEP, CANDLES } from "./ChartHelpers";

const Chart = () => (
  <ScrollView
    horizontal={true}
    contentOffset={{ x: 10000, y: 0 }} 
    showsHorizontalScrollIndicator={false} >
        <Svg width={SIZE+SIZE+SIZE} height={SIZE}>
          {CANDLES.map((candle, index) => (
            <Candle key={candle.Time} width={STEP} {...{ candle, index }} />
          ))}
          <Grid />
        </Svg>
        
  </ScrollView>
);

export default Chart;
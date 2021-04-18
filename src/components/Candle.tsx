import React from "react";
import { Line, Rect } from "react-native-svg";

import { scaleY, scaleBody } from "./ChartHelpers";

const MARGIN = 2;

export interface Candle {
  Time: string;
  Open: number;
  High: number;
  Low: number;
  Close: number;
}

interface CandleProps {
  candle: Candle;
  index: number;
  width: number;
}

const Candle = ({ candle, index, width }: CandleProps) => {
  const { Close, Open, High, Low } = candle;
  const fill = Close > Open ? "#008900" : "#b10000";
  const x = index * width;
  const max = Math.max(Open, Close);
  const min = Math.min(Open, Close);
  return (
    <>
      <Line
        x1={x + width / 2}
        y1={scaleY(Low)}
        x2={x + width / 2}
        y2={scaleY(High)}
        stroke={fill}
        strokeWidth={1}
      />
      <Rect
        x={x + MARGIN}
        y={scaleY(max)}
        width={width - MARGIN * 2}
        height={scaleBody(max - min)}
        {...{ fill }}
      />
    </>
  );
};

export default Candle;
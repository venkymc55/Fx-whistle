import { Dimensions } from "react-native";
import { interpolate, Extrapolate } from "react-native-reanimated";


import data from "../assets/data/data.json";
import { Candle } from "./Candle";

export const CANDLES = data.slice(0, 25) as Candle[];

export const { width: SIZE } = Dimensions.get("window");
export const STEP = SIZE / CANDLES.length;

export const round = (value: number, precision = 0) => {
  "worklet";
  const p = Math.pow(10, precision);
  return Math.round(value * p) / p;
};

export const formatUSD = (value: number) => {
  "worklet";
  return `$ ${round(value, 5).toLocaleString("en-US", { currency: "USD" })}`;
};

export const formatDatetime = (value: string) => {
  "worklet";
  const d = new Date(value);
  console.log("Date*****", d)
  return d.toLocaleTimeString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const getDomain = (rows: Candle[]): [number, number] => {
  "worklet";
  const values = rows.map(({ High, Low }) => [High, Low]).flat();
  return [Math.min(...values), Math.max(...values)];
};

const DOMAIN = getDomain(CANDLES);

export const scaleY = (value: number) => {
  "worklet";
  return interpolate(value, DOMAIN, [SIZE, 0], Extrapolate.CLAMP);
};

export const scaleBody = (value: number) => {
  "worklet";
  return interpolate(
    value,
    [0, Math.max(...DOMAIN) - Math.min(...DOMAIN)],
    [0, SIZE],
    Extrapolate.CLAMP
  );
};

export const scaleYInvert = (y: number) => {
  "worklet";
  return interpolate(y, [0, SIZE], DOMAIN.reverse(), Extrapolate.CLAMP);
};

export const clamp = (
  value: number,
  lowerBound: number,
  upperBound: number
) => {
  "worklet";
  return Math.min(Math.max(lowerBound, value), upperBound);
};
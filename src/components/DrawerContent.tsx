import React from "react";
import { Dimensions, View, StyleSheet, Image } from "react-native";
import Svg, { Path } from "react-native-svg";

import { useTheme } from "./Theme";

const { width } = Dimensions.get("window");
const viewBox = {
  width: 375,
  height: 100,
};
const height = (100 * width) / viewBox.width;
const d = "M 0 0 H 375 A 50 50 0 0 1 325 50 H 50 A 50 50 0 0 0 0 100";
const styles = StyleSheet.create({
  background: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
  },
  image: {
    width,
    height: (width * 900) / 1125,
  },
});
interface ContentFooterProps {
    children: React.ReactNode;
  }

  const DrawerContent = ({ children }: ContentFooterProps) => {
    const theme = useTheme();
    return (
      <>
        {children}
        {/* <Svg
          width={width}
          height={height/2}
          viewBox={[0, 0, viewBox.width, viewBox.height].join(" ")}
        >
          <Path fill={theme.colors.background} d={d} />
        </Svg> */}
      </>
    );
  };
  
  export default DrawerContent;
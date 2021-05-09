import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Svg, { Path } from "react-native-svg";
import { DrawerActions } from "@react-navigation/native";
import { Box, DrawerHeader } from "../../components";
import { MainNavigationProps } from "../../navigation/navigation";
import { aspectRatio, useTheme } from "../../components/Theme";
import Graph from '../../components/LineChart';

import GraphContainer from "./GraphContainer";

const height = 100 * aspectRatio;
const d = "M 0 0 A 50 50 0 0 0 50 50 H 325 A 50 50 0 0 1 375 100 V 0 Z";

const defaultItems = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

const LineChart = ({ navigation }: MainNavigationProps<"Graph">) => {
    // const [items, setItems] = useState(defaultItems);
    const theme = useTheme();
    return (
      <GraphContainer>
        <Box>
            <DrawerHeader
              left={{ icon: "arrow-left", onPress: () =>  navigation.dispatch(DrawerActions.openDrawer()), color: "background" }}
              title="Line Chart"
            />
        </Box>
        <Box flex={1} backgroundColor={"background3"}>
          <ScrollView
            style={{
              borderBottomLeftRadius: theme.borderRadii.xl,
              borderBottomRightRadius: theme.borderRadii.xl,
            }}
            contentContainerStyle={{ paddingVertical: 20 * aspectRatio }}
            showsVerticalScrollIndicator={false}
          >
            <Graph />
          </ScrollView>
        </Box>
      </GraphContainer>
    );
  };
  
  export default LineChart;

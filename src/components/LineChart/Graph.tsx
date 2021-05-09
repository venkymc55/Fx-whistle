import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Box } from '../Theme';
import DrawerHeader from '../DrawerHeader';
import { graphs } from "./Model";
const { width } = Dimensions.get("window");

const SELECTION_WIDTH = width - 32;
const BUTTON_WIDTH = (width - 32) / graphs.length;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  backgroundSelection: {
    backgroundColor: "#f3f3f3",
    ...StyleSheet.absoluteFillObject,
    width: BUTTON_WIDTH,
    borderRadius: 8,
  },
  selection: {
    flexDirection: "row",
    width: width,
    alignSelf: "center",
    marginLeft:5,
    marginRight: 5,
  },
  labelContainer: {
    padding: 16,
    width: BUTTON_WIDTH,
  },
  label: {
    fontSize: 16,
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
});

const Graph = () => {
  return (
    <Box style={styles.container}>

      <Box>
        <DrawerHeader
          left={{ icon: "menu", onPress: () => true, color: "background" }}
          right={{ icon: "bell", onPress: () => true }}
          title="Contest Details"
        />
      </Box>
      <Box style={styles.selection}>
        <LineChart
          data={{
            labels: ["11:00", "12:00", "13:00", "14:00", "15:00", "16:00"],
            datasets: [
              {
                data: [
                  Math.random() * 10,
                  Math.random() * 10,
                  Math.random() * 10,
                  Math.random() * 10,
                  Math.random() * 10,
                  Math.random() * 10
                ]
              }
            ]
          }}
          width={Dimensions.get("window").width} // from react-native
          height={300}
          yAxisLabel="$"
          yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#fb8c00",
            backgroundGradientTo: "#ffa726",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 10,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#fcffa4"
            }
          }}
          bezier
        />
      </Box>
      <Box>
        
      </Box>
    </Box>
  );
};

export default Graph;
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View } from "react-native";

import { Box, Text } from "./Theme";
import RoundedIconButton from "./RoundedIconButton";
import { white } from "react-native-paper/lib/typescript/styles/colors";

interface HeaderProps {
    left: {
      icon: string;
      onPress: () => void;
      color: "background"
    };
    title: string;
    right?: {
      icon: string;
      onPress: () => void;
    };
    dark: boolean;
  }

  const DrawerHeader = ({ title, left, right }: HeaderProps) => {
    const insets = useSafeAreaInsets();
    const color = "background"
    return (
      <Box
        flexDirection="row"
        style={{ marginTop: insets.top }}
        alignItems="center"
        justifyContent="space-between"
        paddingHorizontal="m"
        backgroundColor="background3"
      >
        <RoundedIconButton
          size={44}
          iconRatio={0.4}
          name={left.icon}
          onPress={left.onPress}
          align={"center"}
          {...{color}}
        />
        <Text variant="header" {...{color}}>
          {title.toUpperCase()}
        </Text>
        {right ? (
          <RoundedIconButton
            size={44}
            iconRatio={0.4}
            name={right.icon}
            onPress={right.onPress}
            align={"center"}
            {...{ color }}
          />
        ) : (
          <View style={{ width: 44 }} />
        )}
      </Box>
    );
  };
  
  DrawerHeader.defaultProps = {
    dark: false,
  };
  
  export default DrawerHeader;
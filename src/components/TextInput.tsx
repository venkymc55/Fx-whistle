import React, { forwardRef } from "react";
import {
    TextInput as RNTextInput,
    StyleSheet,
    TextInputProps as RNTextInputProps,
  } from "react-native";
import { Feather } from "@expo/vector-icons";

import { Box, useTheme } from "./Theme";
import RoundedIcon from "./RoundedIcon";
import { Text } from "./Theme";

interface TextInputProps extends RNTextInputProps {
  icon: string;
    touched?: boolean;
    error?: string;
  }

const TextInput = forwardRef<RNTextInput, TextInputProps>(
  ({ icon, touched, error, ...props }, ref) => {
      const theme = useTheme();
      const SIZE = theme.borderRadii.m * 2.5;
      const validationColor = error ? "danger" : "primary";
      const color = !touched ? "text" : validationColor;
      return (
        <Box
          flexDirection="row"
          height={48}
          alignItems="center"
          borderRadius="s"
          borderWidth={StyleSheet.hairlineWidth}
          borderColor='background'
          padding="s"
        >
          <Box padding="s">
            <Text {...{ color }}>
              <Feather name={icon} size={16} />
            </Text>
          </Box>
          <Box flex={1}>
            <RNTextInput
              underlineColorAndroid="transparent"
              placeholderTextColor="white"
              {...{ ref }}
              {...props}
            />
          </Box>
          {touched && (
            <RoundedIcon
              name={!error ? "check" : "x"}
              size={SIZE}
              backgroundColor={!error ? "primary" : "danger"}
              color="background"
            />
          )}
        </Box>
      );
    }
)

export default TextInput;

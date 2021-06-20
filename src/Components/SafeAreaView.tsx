import React from "react";
import { View, ViewProps } from "react-native";
import { useSafeArea } from "react-native-safe-area-context";

export function SafeAreaView({
    style,
    ...rest
  }: ViewProps & { children: React.ReactNode }) {
    const insets = useSafeArea();
  
    return (
      <View
        style={[
          {
            paddingTop: insets.top,
            paddingRight: insets.right,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
          },
          style,
        ]}
        {...rest}
      />
    );
  }
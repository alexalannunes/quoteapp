import React from "react";
import { Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { AppHeaderContainer, AppTitle } from "../style";

const Header = ({ y }) => {
  const ty = y.interpolate({
    inputRange: [0, 100],
    outputRange: [0, -50],
    extrapolate: "clamp",
  });
  return (
    <AppHeaderContainer style={{ transform: [{ translateY: ty }] }}>
      <AppTitle>Coins</AppTitle>
    </AppHeaderContainer>
  );
};

export default Header;

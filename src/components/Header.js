import React from "react";
import { Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { AppHeaderContainer, AppTitle } from "../style";

const Header = () => {
  return (
    <AppHeaderContainer>
      <AppTitle>Coins</AppTitle>
    </AppHeaderContainer>
  );
};

export default Header;

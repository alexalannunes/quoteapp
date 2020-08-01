import React from "react";
import { Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { AppHeaderContainer, AppTitle } from "../style";

const Header = () => {
  return (
    <AppHeaderContainer>
      <AppTitle>Coins</AppTitle>
      <Text>
        <Ionicons name="md-refresh" size={28} color="#fff" />
      </Text>
    </AppHeaderContainer>
  );
};

export default Header;

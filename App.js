import React from "react";
import { Container, AppHeaderContainer, AppTitle } from "./style";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";
export default function App() {
  return (
    <Container>
      <AppHeaderContainer>
        <AppTitle>Coins</AppTitle>
        <Text>
          <Ionicons name="md-refresh" size={32} color="#fff" />
        </Text>
      </AppHeaderContainer>
    </Container>
  );
}

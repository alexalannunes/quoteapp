import React from "react";
import { Container, AppHeaderContainer, AppTitle } from "./style";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";
import api from "./services/api";
import { allCoins } from "./constants/urls";
export default function App() {
  React.useEffect(() => {
    api
      .get(allCoins)
      .then((response) => {
        console.log(response.data);
      })
      .catch((er) => {
        console.log(er.response.data.message);
      });
  }, []);
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

import React from "react";
import { RefreshControl, ActivityIndicator } from "react-native";
import { Container, Content, ListContainer } from "./style";
import Header from "./components/Header";
import ListItemCP from "./components/ListItem";
import { allCoins } from "./constants/urls";
import api from "./services/api";
import coinsToArray from "./services/coins";

const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

export default function Coins() {
  const [refreshing, setRefreshing] = React.useState(false);
  const [coins, setCoins] = React.useState([]);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);

  React.useEffect(() => {
    api
      .get(allCoins)
      .then((response) => {
        console.log(coinsToArray(response.data));
        setCoins(coinsToArray(response.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        {coins.length ? (
          <ListContainer
            decelerationRate="normal"
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={20}
            bounces={false}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            keyExtractor={(item) => item.code + item.codein}
            data={coins}
            renderItem={({ item, index }) => <ListItemCP {...{ item, index }} />}
          />
        ) : (
          <ActivityIndicator />
        )}
      </Content>
    </Container>
  );
}

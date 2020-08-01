import React from "react";
import { RefreshControl, ActivityIndicator, Alert } from "react-native";
import { Container, Content, ListContainer } from "./style";
import Header from "./components/Header";
import ListItemCP from "./components/ListItem";
import { allCoins } from "./constants/urls";
import api from "./services/api";
import coinsToArray from "./services/coins";
import mock_coins from "./mock/index";
import colors from "./constants/colors";

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

export default function Coins() {
  const [refreshing, setRefreshing] = React.useState(false);
  const [coins, setCoins] = React.useState(mock_coins);
  const [favoriteCoins, setFavoriteCoins] = React.useState([]);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);

  React.useEffect(() => {
    // api
    //   .get(allCoins)
    //   .then((response) => {
    //     console.log(coinsToArray(response.data));
    //     setCoins(coinsToArray(response.data));
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    console.log("oi");
  }, [refreshing]);

  const onFavoriteCoin = function (coinCode) {
    // Alert.alert("oi");
    setFavoriteCoins((prev) => {
      const i = prev.indexOf(coinCode) != -1;

      return i ? prev.filter((a) => a != coinCode) : [...prev, coinCode];
    });
    console.log("oii", coinCode, favoriteCoins);
  };

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
            renderItem={({ item, index }) => <ListItemCP {...{ item, index, onFavoriteCoin, favoriteCoins }} />}
          />
        ) : (
          <ActivityIndicator color={colors.primary} />
        )}
      </Content>
    </Container>
  );
}

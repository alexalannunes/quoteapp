import React from "react";
import { RefreshControl, ActivityIndicator, Alert, Text, AsyncStorage } from "react-native";
import { Container, Content, ListContainer } from "./style";
import Header from "./components/Header";
import ListItemCP from "./components/ListItem";
import mock_coins from "./mock/index";
import colors from "./constants/colors";
import Badges from "./components/Badges";

import badges from "./constants/badges";
import { ScrollView } from "react-native-gesture-handler";

const [defaultBadgeActive] = badges;

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

export default class Coins extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      refreshing: false,
      coins: mock_coins,
      badgeActive: defaultBadgeActive.id,
      onlyFavorites: false,
    };
  }

  onBadgeActive = (id) => {
    this.setState({ badgeActive: id });
  };

  onRefresh = () => {
    this.setState({ refreshing: true });
    wait(3000).then(() => this.setState({ refreshing: false }));
  };

  onFavoriteCoin = (coinCode) => {
    let { coins } = this.state;

    const newCoins = coins.map((coin) => {
      return coin.code == coinCode ? { ...coin, favorite: !coin.favorite } : coin;
    });

    this.setState({ coins: newCoins }, async () => {
      const favorites = this.state.coins.filter((i) => i.favorite).map((i) => i.code);
      await AsyncStorage.setItem("favorites", JSON.stringify(favorites));

      console.log(await AsyncStorage.getItem("favorites"));
    });
  };

  onOnlyFavorites = () => {
    this.setState((prevState) => (prevState.onlyFavorites = !prevState.onlyFavorites));
  };

  async componentDidMount() {
    const favorites = await AsyncStorage.getItem("favorites");

    const { coins } = this.state;

    // map
    let f = coins.map((i) => {
      return { ...i, favorite: favorites.indexOf(i.code) != -1 ? true : false };
    });

    this.setState({ coins: f });
  }

  render() {
    const { badgeActive, coins, refreshing, onlyFavorites } = this.state;
    const { onBadgeActive, onRefresh, onFavoriteCoin, onOnlyFavorites } = this;
    const filteredCoins = onlyFavorites ? coins.filter((i) => i.favorite) : coins;

    return (
      <Container>
        <Header />
        <Badges {...{ badgeActive, onBadgeActive, onlyFavorites, onOnlyFavorites }} />
        <ScrollView showsVerticalScrollIndicator={false} scrollEventThrottle={20} bounces={false} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
          {filteredCoins.length ? filteredCoins.map((item, index) => <ListItemCP key={index} {...{ item, index, onFavoriteCoin }} />) : <ActivityIndicator color={colors.primary} />}
        </ScrollView>
      </Container>
    );
  }
}

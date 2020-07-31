import React from "react";
import { RefreshControl } from "react-native";
import { Container, Content, ListContainer } from "./style";
import Header from "./components/Header";
import ListItemCP from "./components/ListItem";

const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

export default function Coins() {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <ListContainer
          decelerationRate="normal"
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={20}
          bounces={false}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
          keyExtractor={(item) => item.toString()}
          data={data}
          renderItem={({ item }) => <ListItemCP {...{ item }} />}
        />
      </Content>
    </Container>
  );
}

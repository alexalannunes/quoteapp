import React, { Fragment } from "react";
import { ActivityIndicator, TouchableNativeFeedback, Animated } from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";

import axios from "axios";
import {
  Container,
  CoinCodeText,
  CoinDateUpdate,
  CoinInfoText,
  CoinName,
  CoinInfoRow,
  CoinInitials,
  CoinInitialsContainer,
  CoinInitialsText,
  Content,
  CoinValue,
  LoaderContainer,
  CoinCodeContainer,
  Footer,
} from "./style";

const coins = ["USD", "USDT", "EUR", "CAD", "BTC", "ARS"];

export default class App extends React.Component {
  translateY = new Animated.Value(0);
  _onPanGestureEvent = Animated.event([{ nativeEvent: { translationY: this.translateY } }], { useNativeDriver: true });

  offsetY = 0;

  _change = ({ nativeEvent }) => {
    if (nativeEvent.oldState == State.ACTIVE) {
      this.setState({ loading: true });

      this.offsetY += nativeEvent.translationY;

      Animated.timing(this.translateY, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }).start(() => this._get());
    }
  };

  state = {
    coin: null,
    loading: false,
    current: "USD",
  };

  _get = () => {
    axios.get(`https://economia.awesomeapi.com.br/${this.state.current}-BRL`).then((response) => {
      this.setState({ coin: response.data[0], loading: false });
    });
  };

  _to_money = (num) => {
    return new Number(num).toFixed(2).replace(".", ",");
  };

  _set = (item) => {
    this.setState({ current: item, loading: true }, () => this._get());
  };

  componentDidMount() {
    this._get();
  }
  render() {
    const { coin, current, loading } = this.state;
    const { _to_money, _set } = this;

    const loaderOpacity = this.translateY.interpolate({
      inputRange: [0, 50],
      outputRange: [0, 1],
      extrapolate: "clamp",
    });

    const scaleLoader = this.translateY.interpolate({
      inputRange: [0, 50],
      outputRange: [0.5, 1],
      extrapolate: "clamp",
    });

    const translateYContent = this.translateY.interpolate({
      outputRange: [0, 50],
      inputRange: [0, 50],
      extrapolate: "clamp",
    });

    const opacityFooter = this.translateY.interpolate({
      inputRange: [0, 50],
      outputRange: [1, 0.4],
      extrapolate: "clamp",
    });

    const translateYFooter = this.translateY.interpolate({
      inputRange: [0, 50],
      outputRange: [0, 30],
      extrapolate: "clamp",
    });

    return (
      <Container>
        {!coin ? (
          <ActivityIndicator size="large" color="#01ff70" />
        ) : (
          <Fragment>
            <LoaderContainer style={{ opacity: loaderOpacity, transform: [{ scale: scaleLoader }] }}>{!loading && <ActivityIndicator size="small" color="#01ff70" />}</LoaderContainer>
            <PanGestureHandler onGestureEvent={this._onPanGestureEvent} onHandlerStateChange={this._change}>
              <Content style={{ transform: [{ translateY: translateYContent }] }}>
                <CoinName>
                  {coin.name} ({coin.code})
                </CoinName>

                <CoinValue>{_to_money(coin.high)}</CoinValue>

                <CoinCodeContainer>
                  <CoinCodeText>R$ ({coin.codein})</CoinCodeText>
                </CoinCodeContainer>
                <CoinInfoRow>
                  <CoinInfoText>Máxima</CoinInfoText>
                  <CoinInfoText>{coin.high}</CoinInfoText>
                </CoinInfoRow>
                <CoinInfoRow>
                  <CoinInfoText>Mínima</CoinInfoText>
                  <CoinInfoText>{coin.low}</CoinInfoText>
                </CoinInfoRow>
                <CoinInfoRow>
                  <CoinInfoText>Compra</CoinInfoText>
                  <CoinInfoText>{coin.bid}</CoinInfoText>
                </CoinInfoRow>
                <CoinInfoRow>
                  <CoinInfoText>Venda</CoinInfoText>
                  <CoinInfoText>{coin.ask}</CoinInfoText>
                </CoinInfoRow>

                <CoinInfoRow>
                  <CoinInfoText>Variação</CoinInfoText>
                  <CoinInfoText>{coin.varBid}</CoinInfoText>
                </CoinInfoRow>

                <CoinInfoRow>
                  <CoinInfoText>Porcentagem de Variação</CoinInfoText>
                  <CoinInfoText>{coin.pctChange}%</CoinInfoText>
                </CoinInfoRow>
              </Content>
            </PanGestureHandler>

            <Footer style={{ opacity: opacityFooter, transform: [{ translateY: translateYFooter }] }}>
              <CoinInitialsContainer>
                {coins.map((item) => (
                  <TouchableNativeFeedback key={item} useForeground={true} background={TouchableNativeFeedback.SelectableBackground()} onPress={() => _set(item)}>
                    <CoinInitials selected={item == current ? true : false}>
                      <CoinInitialsText>{item}</CoinInitialsText>
                    </CoinInitials>
                  </TouchableNativeFeedback>
                ))}
              </CoinInitialsContainer>

              <CoinDateUpdate>{coin.create_date}</CoinDateUpdate>
            </Footer>
          </Fragment>
        )}
      </Container>
    );
  }
}

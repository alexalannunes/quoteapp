import styled from "styled-components/native";
import { STATUSBAR_HEIGHT, HORIZONTAL } from "./constants/layout";
import { FlatList, StatusBar, Animated } from "react-native";
import { RectButton, BorderlessButton } from "react-native-gesture-handler";
import colors from "./constants/colors";

export const Container = styled.View`
  flex: 1;
  background-color: #1c2833;
  padding-top: ${STATUSBAR_HEIGHT}px;
`;

export const AppHeaderContainer = styled(Animated.View)`
  height: 50px;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${HORIZONTAL}px;
  flex-direction: row;
  position: absolute;
  top: ${StatusBar.currentHeight}px;
  z-index: 2;
`;

export const AppTitle = styled.Text`
  font-size: 22px;
  color: #ffffff;
  font-weight: bold;
`;

export const Content = styled.View`
  flex: 1;
`;

export const ListContainer = styled(FlatList)`
  flex: 1;
`;

export const ListItem = styled(RectButton)`
  flex-direction: row;
  padding: 10px 0 10px ${HORIZONTAL}px;
  border-radius: 0;
`;

export const CoinCircle = styled.View`
  height: 60px;
  width: 60px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background-color: ${colors.secondary};
  margin-right: ${HORIZONTAL}px;
`;

export const CoinLetter = styled.Text`
  font-weight: bold;
  font-size: 13px;
  color: ${colors.light};
`;

export const CoinDetailContainer = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const CoinFavoriteContainer = styled(BorderlessButton)`
  width: 40px;
  align-items: center;
  justify-content: center;
`;

export const CoinDetailRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;

export const CoinNamePriceText = styled.Text`
  color: ${colors.light};
  font-size: 16px;
  font-weight: bold;
  margin-bottom: -10px;
`;

export const BadgesContainer = styled.ScrollView.attrs({ horizontal: true, showsHorizontalScrollIndicator: false })`
  padding: 10px ${HORIZONTAL}px;
  position: absolute;
  top: ${StatusBar.currentHeight + 26}px;
  z-index: 1;
`;

export const BadgeButton = styled(RectButton)`
  padding: 10px 20px;
  border-radius: 100px;
  margin-right: 10px;
  background-color: ${(props) => (props.active ? colors.secondary : colors.primary)};
`;

export const BadgeButtonText = styled.Text`
  font-weight: bold;
  font-size: 15px;
  color: ${(props) => (props.active ? colors.light : colors.secondary)};
`;
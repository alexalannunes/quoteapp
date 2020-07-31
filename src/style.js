import styled from "styled-components/native";
import { STATUSBAR_HEIGHT, HORIZONTAL } from "./constants/layout";
import { FlatList } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import colors from "./constants/colors";

export const Container = styled.View`
  flex: 1;
  background-color: #1c2833;
  padding-top: ${STATUSBAR_HEIGHT}px;
`;

export const AppHeaderContainer = styled.View`
  height: 100px;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${HORIZONTAL}px;
  flex-direction: row;
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
  padding: 10px ${HORIZONTAL}px;
`;

export const CoinCircle = styled.View`
  height: 60px;
  width: 60px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background-color: ${colors.light};
  margin-right: ${HORIZONTAL}px;
`;

export const CoinLetter = styled.Text`
  font-weight: bold;
  font-size: 13px;
  color: ${colors.primary};
`;

export const CoinDetailContainer = styled.View`
  flex: 1;
  flex-direction: column;
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
`;

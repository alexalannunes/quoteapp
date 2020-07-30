import { Animated } from "react-native";
import styled from "styled-components";

export const Container = styled.View`
  flex: 1;
  background-color: #1c2833;
  align-items: center;
  justify-content: center;
`;

export const CoinName = styled.Text`
  font-size: 25px;
  text-align: center;
  color: #ffffff;
  margin: 20px 0 10px 0;
`;

export const CoinCodeContainer = styled.View`
  margin: 10px 0;
`;

export const CoinCodeText = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 18px;
  border-bottom-width: 1px;
  padding-bottom: 20px;
  border-bottom-color: #2d3c4a40;
`;

export const CoinValue = styled.Text`
  font-size: 60px;
  text-align: center;
  color: #ffffff;
`;

export const CoinInitials = styled.View`
  justify-content: center;
  height: 50px;
  width: 50px;
  align-items: center;
  margin-right: 5px;
  border-width: 2px;
  border-color: ${(props) => (props.selected ? "#01ff70" : "#1c2833")};
  border-radius: 100px;
  background-color: #2d3c4a;
  overflow: hidden;
`;

export const CoinInitialsText = styled.Text`
  color: #ffffff;
  text-align: center;
  font-weight: bold;
`;

export const CoinInitialsContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 35px;
  margin-bottom: 10px;
`;

export const Content = styled(Animated.View)`
  width: 80%;
`;

export const CoinInfoRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5px;
  padding-bottom: 10px;
  margin-bottom: 5px;
  border-bottom-width: 1px;
  border-bottom-color: #2d3c4a40;
`;

export const CoinInfoText = styled.Text`
  color: #ffffff;
  font-size: 16px;
`;

export const CoinDateUpdate = styled.Text`
  color: #4e769a;
  font-size: 14px;
  margin-top: 10px;
`;

export const LoaderContainer = styled(Animated.View)`
  height: 30px;
  justify-content: center;
  align-items: center;
`;

export const Footer = styled(Animated.View)`
  align-items: center;
`;

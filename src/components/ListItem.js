import React from "react";
import { Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { ListItem, CoinCircle, CoinDetailContainer, CoinFavoriteContainer, CoinLetter, CoinDetailRow, CoinNamePriceText } from "../style";
import numberToMoney from "../utils/currency";
import colors from "../constants/colors";

/**
 * @param {{
    item: {code: String, codein: String, name: String, high: String, low: String, varBid: String, pctChange: String, bid: String, ask: String, timestamp: String, create_date: String}
    index: number
  }} object
  *
  * @return {React.FC}
 */
const ListItemCP = ({ item, index, onFavoriteCoin, favoriteCoins }) => {
  const variationColor = item.varBid < 0 ? "#e74c3c" : "#2ecc71";
  const variantIconName = item.varBid < 0 ? "caretdown" : "caretup";
  const favoriteIconName = favoriteCoins.indexOf(item.code) != -1 ? "star" : "staro";
  const favoriteIconColor = favoriteCoins.indexOf(item.code) != -1 ? colors.warning : colors.secondary;

  return (
    <ListItem>
      <CoinCircle>
        <CoinLetter>{item.code}</CoinLetter>
      </CoinCircle>
      <CoinDetailContainer>
        <CoinDetailRow>
          <CoinNamePriceText>{item.name}</CoinNamePriceText>
          <CoinNamePriceText>{numberToMoney(item.high)}</CoinNamePriceText>
        </CoinDetailRow>
        {/* criar components pra este */}
        <CoinDetailRow>
          <Text style={{ color: variationColor, fontSize: 12 }}>
            <AntDesign name={variantIconName} size={12} color={variationColor} /> {item.pctChange}%
          </Text>
          <Text style={{ color: "#526580", fontSize: 12 }}>min: {numberToMoney(item.low)}</Text>
        </CoinDetailRow>
      </CoinDetailContainer>
      <CoinFavoriteContainer onPress={() => onFavoriteCoin(item.code)}>
        <Text>
          <AntDesign name={favoriteIconName} size={20} color={favoriteIconColor} />
        </Text>
      </CoinFavoriteContainer>
    </ListItem>
  );
};

export default ListItemCP;

import React from "react";
import { Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { ListItem, CoinCircle, CoinDetailContainer, CoinLetter, CoinDetailRow, CoinNamePriceText } from "../style";
import numberToMoney from "../utils/currency";
/**
 * 
 * @param {{
    item: {code: String, codein: String, name: String, high: String, low: String, varBid: String, pctChange: String, bid: String, ask: String, timestamp: String, create_date: String}
    index: number
  }} object
 */
const ListItemCP = ({ item, index }) => {
  const variationColor = item.varBid < 0 ? "#e74c3c" : "#2ecc71";

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
            <AntDesign name={item.varBid < 0 ? "caretdown" : "caretup"} size={12} color={variationColor} /> {item.pctChange}%
          </Text>
          <Text style={{ color: "#526580", fontSize: 12 }}>min: {numberToMoney(item.low)}</Text>
        </CoinDetailRow>
      </CoinDetailContainer>
    </ListItem>
  );
};

export default ListItemCP;

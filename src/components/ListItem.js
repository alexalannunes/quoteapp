import React from "react";
import { Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { ListItem, CoinCircle, CoinDetailContainer, CoinLetter, CoinNamePriceRow } from "../style";

const ListItemCP = ({ item }) => {
  return (
    <ListItem>
      <CoinCircle>
        <CoinLetter>BRL-{item}</CoinLetter>
      </CoinCircle>
      <CoinDetailContainer>
        <CoinNamePriceRow>
          <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>Bitcoin</Text>
          <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>R$ 81.945,87</Text>
        </CoinNamePriceRow>
        {/* criar components pra este */}
        <CoinNamePriceRow>
          <Text style={{ color: item % 2 == 0 ? "#e74c3c" : "#2ecc71" }}>
            <AntDesign name="caretdown" size={12} color={item % 2 == 0 ? "#e74c3c" : "#2ecc71"} /> 2.42%
          </Text>
          <Text style={{ color: "#526580" }}>min: 32911</Text>
        </CoinNamePriceRow>
      </CoinDetailContainer>
    </ListItem>
  );
};

export default ListItemCP;

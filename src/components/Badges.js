import React from "react";
import { Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { BadgesContainer, BadgeButton, BadgeButtonText } from "../style";
import badges from "../constants/badges";
import colors from "../constants/colors";

const Badges = ({ badgeActive, onBadgeActive, onlyFavorites, onOnlyFavorites }) => {
  const iconName = onlyFavorites ? "star" : "staro";
  return (
    <View>
      <BadgesContainer>
        <BadgeButton onPress={onOnlyFavorites} active={onlyFavorites}>
          <AntDesign name={iconName} size={15} color={colors.warning} />
        </BadgeButton>
        {badges.map(({ title, id }) => (
          <BadgeButton active={badgeActive == id} key={id} onPress={() => onBadgeActive(id)}>
            <BadgeButtonText active>{title}</BadgeButtonText>
          </BadgeButton>
        ))}
      </BadgesContainer>
    </View>
  );
};
export default Badges;

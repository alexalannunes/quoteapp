import React from "react";
import Coins from "./src/Coins";
import { View, TouchableOpacity, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
// https://enappd.com/blog/refreshcontrol-pull-to-refresh-in-react-native-apps/130/
export default function App() {
  // return (
  //   <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
  //     <RectButton
  //       onPress={() => {
  //         console.log(">oi");
  //       }}
  //     >
  //       <Text style={{ fontSize: 30 }}>Oi</Text>
  //     </RectButton>
  //   </View>
  // );
  return <Coins />;
}

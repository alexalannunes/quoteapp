import styled from "styled-components/native";
import { STATUSBAR_HEIGHT, HORIZONTAL } from "./constants/layout";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #1c2833;
  padding-top: ${STATUSBAR_HEIGHT}px;
`;

export const AppHeaderContainer = styled.View`
  height: 100px;
  background-color: #837;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${HORIZONTAL}px;
  flex-direction: row;
`;

export const AppTitle = styled.Text`
  font-size: 20px;
  color: #ffffff;
  font-weight: bold;
`;

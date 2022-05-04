import { View } from "react-native";
import React from "react";
import Card from "./Card";
import CardButton from "./CardButton";
import Divider from "../core/Divider";
import styled from "styled-components/native";

const ListCard = () => {
  return (
    <View>
      <Card />
      <CardButton />
      <StyledDivider />
    </View>
  );
};

export default ListCard;

const StyledDivider = styled(Divider)`
  margin: 20px 0;
`;

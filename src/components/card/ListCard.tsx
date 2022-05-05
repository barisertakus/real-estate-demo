import { View } from "react-native";
import React from "react";
import Card from "./Card";
import CardButton from "./CardButton";
import Divider from "../core/Divider";
import styled from "styled-components/native";
import { House } from "../../types";
import { addBasket } from "../../features/basketSlice";
import { useDispatch } from "react-redux";

interface IListCardProps{
  house: House;
}

const ListCard = ({ house }: IListCardProps) => {

  const dispatch = useDispatch();

  const handlePress = () => {
    dispatch(addBasket(house));
  }

  return (
    <View>
      <Card
        name={house.name}
        description={house.description}
        imageUrl={house.imageUrl}
        rates={house.rates}
        distance={house.distance}
      />
      <CardButton onPress={handlePress} />
      <StyledDivider />
    </View>
  );
};

export default ListCard;

const StyledDivider = styled(Divider)`
  margin: 20px 0;
`;

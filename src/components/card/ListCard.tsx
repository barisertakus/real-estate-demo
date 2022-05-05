import React from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import styled from "styled-components/native";
import { addBasket } from "../../features/basketSlice";
import { House } from "../../types";
import { hp } from "../../utils/responsiveScreen";
import Divider from "../core/Divider";
import Card from "./Card";
import CardButton from "./CardButton";

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
  margin: ${hp(2)}px 0;
`;

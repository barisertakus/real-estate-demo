import React, { useEffect, useState } from "react";
import SafeLayout from "../components/core/SafeLayout";
import { useSelector } from "react-redux";
import { selectLanguage } from "../features/appSlice";
import styled from "styled-components/native";
import { hp, wp } from "../utils/responsiveScreen";
import ListCard from "../components/card/ListCard";
import BasketDetails from "../components/basket/BasketDetails";
import houseService from "../service/houseService";
import { House } from "../types";

const List = () => {
  useSelector(selectLanguage);
  const [houses, setHouses] = useState<House[]>([]);

  useEffect(() => {
    houseService
      .getAll()
      .then((response) => {
        setHouses(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <SafeLayout>
      <Container>
        <StyledScroll>
          {houses.map((house) => (
            <ListCard key={house.id} house={house} />
          ))}
        </StyledScroll>
        <BasketWrapper>
          <BasketDetails />
        </BasketWrapper>
      </Container>
    </SafeLayout>
  );
};

export default List;

const Container = styled.View`
  flex: 1;
  padding: 0 ${wp(5)}px;
`;

const StyledScroll = styled.ScrollView`
  flex: 0.7;
  margin-bottom: ${hp(2)}px;
  margin-top: ${hp(2)}px;
`;

const BasketWrapper = styled.View`
  flex: 0.3;
`;

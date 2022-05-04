import { ScrollView, Text } from "react-native";
import React from "react";
import SafeLayout from "../components/core/SafeLayout";
import { useSelector } from "react-redux";
import { selectLanguage } from "../features/appSlice";
import styled from "styled-components/native";
import { hp, wp } from "../utils/responsiveScreen";
import ListCard from "../components/card/ListCard";

const List = () => {
  useSelector(selectLanguage);

  return (
    <SafeLayout>
      <Container>
        <StyledScroll>
          {Array(20)
            .fill(0)
            .map((item, i) => (
              <ListCard key={i} />
            ))}
        </StyledScroll>
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
  margin-bottom: ${hp(2)}px;
  margin-top: ${hp(2)}px;
`;

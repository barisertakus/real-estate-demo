import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import styled from "styled-components/native";
import { selectBasket } from "../../features/basketSlice";
import i18n from "../../i18n";
import rf from "../../utils/responsiveFont";
import { hp } from "../../utils/responsiveScreen";
import Text from "../core/Text";

const BasketDetails = () => {
  const { totalPrice, shipping, grandTotal } = useSelector(selectBasket);

  return (
    <Container>
      <Text title={`${i18n.t("totalOfProducts")}:`} h3 bold />
      <View>
        <RegularText title={`${i18n.t("total")}: ${totalPrice} TL`} />
        <RegularText title={`${i18n.t("taxesAndShipping")}: ${shipping} TL`} />
      </View>
      <Text title={`${i18n.t("grandTotal")}: ${grandTotal} TL`} h4 bold />
    </Container>
  );
};

export default BasketDetails;

const Container = styled.View`
  flex: 1;
  padding: ${hp(3)}px 0;
  justify-content: space-between;
`;

const RegularText = styled(Text)`
  font-size: ${rf(14)}px;
  margin: 10px 0;
`;

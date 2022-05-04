import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import i18n from "../../i18n";
import rf from "../../utils/responsiveFont";
import { hp } from "../../utils/responsiveScreen";
import Text from "../core/Text";

const BasketDetails = () => {
  return (
    <Container>
      <Text title={i18n.t("totalOfProducts") + ": "} h3 bold />
      <View>
        <RegularText title={i18n.t("total") + ": "} />
        <RegularText title={i18n.t("taxesAndShipping") + ": "} />
      </View>
      <Text title={i18n.t("grandTotal") + ": "} h4 bold />
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

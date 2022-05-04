import { View } from "react-native";
import React from "react";
import villa from "../../../assets/villa.png";
import styled from "styled-components/native";
import { hp, wp } from "../../utils/responsiveScreen";
import Text from "../core/Text";
import Ionicon from "@expo/vector-icons/Ionicons";
import Colors from "../../constants/Colors";

const Card = () => {
  return (
    <Container>
      <View>
        <StyledImage source={villa} />
      </View>
      <Details>
        <Text title="Villa Bosphorus" h5 />
        <PrimaryText title="Lorem İpsum Sit Dolor Met" />
        <Icons>
          <Text title="⭐ 3.9" style={{ marginTop: 2 }} />
          <TextIcon>
            <Ionicon size={20} name="location" color={Colors.primaryBorder} />
            <Text title="3.7km" />
          </TextIcon>
        </Icons>
      </Details>
    </Container>
  );
};

export default Card;

const Container = styled.View`
  flex-direction: row;
  margin-bottom: ${hp(2)}px;
`;

const Details = styled.View`
  justify-content: space-between;
  margin-left: ${wp(3)}px;
`;

const StyledImage = styled.Image`
  width: ${hp(9)}px;
  height: ${hp(9)}px;
`;

const TextIcon = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: ${wp(6)}px;
`;

const Icons = styled.View`
  flex-direction: row;
`;

const PrimaryText = styled(Text)`
  color: ${Colors.primaryText};
`;

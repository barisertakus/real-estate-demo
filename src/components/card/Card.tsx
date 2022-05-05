import Ionicon from "@expo/vector-icons/Ionicons";
import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";
import { hp, wp } from "../../utils/responsiveScreen";
import Text from "../core/Text";

interface ICardProps {
  name: string;
  description: string;
  imageUrl: string;
  rates: number;
  distance: number;
}

const Card = ({ name, description, imageUrl, rates, distance }: ICardProps) => {
  return (
    <Container>
      <View>
        <StyledImage source={{ uri: imageUrl }} />
      </View>
      <Details>
        <Text title={name} h5 />
        <PrimaryText title={description} />
        <Icons>
          <Text title={`⭐ ${rates}`} style={{ marginTop: 2 }} />
          <TextIcon>
            <Ionicon size={20} name="location" color={Colors.primaryBorder} />
            <Text title={`${distance}km`} />
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

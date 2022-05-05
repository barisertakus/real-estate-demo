import Ionicon from "@expo/vector-icons/Ionicons";
import React from "react";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";
import i18n from "../../i18n";
import rf from "../../utils/responsiveFont";
import { wp } from "../../utils/responsiveScreen";
import Text from "../core/Text";

interface IButtonProps {
  title?: string;
  onPress?: () => void;
}

const CardButton = ({ title, onPress }: IButtonProps) => {
  return (
    <Container onPress={onPress}>
      <StyledIcon name="ios-location-outline" size={20} color={Colors.primaryBtn} />
      <StyledText title={i18n.t("addBasket")} />
    </Container>
  );
};

export default CardButton;

const Container = styled.TouchableOpacity`
  border-radius: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StyledIcon = styled(Ionicon)`
  margin-right: ${wp(1)}px;
`;

const StyledText = styled(Text)`
  font-size: ${rf(13)}px;
  text-align: center;
  font-weight: 500;
  color: ${Colors.primaryBtn};
  text-transform: uppercase;
`;

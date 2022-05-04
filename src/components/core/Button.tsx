import { TouchableOpacityProps } from "react-native";
import React, { useState } from "react";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";
import Text from "./Text";
import rf from "../../utils/responsiveFont";
import { hp } from "../../utils/responsiveScreen";

type ButtonType = TouchableOpacityProps & {
  active: boolean;
};

interface IButtonProps {
  title: string;
}

const Button = ({ title }: IButtonProps) => {
  const [active, setActive] = useState(false);

  return (
    <Container
      onPressIn={() => setActive(true)}
      onPressOut={() => setActive(false)}
      active={active}
      activeOpacity={0.9}
    >
      <StyledText title={title} bold />
    </Container>
  );
};

export default Button;

const Container = styled.TouchableOpacity<ButtonType>`
  margin-top: ${hp(2)}px;
  padding: ${hp(2)}px 0;
  background-color: ${(props) =>
    props.active ? Colors.primaryActiveBtn : Colors.primaryBtn};
  border-radius: 10px;
`;

const StyledText = styled(Text)`
  color: white;
  font-size: ${rf(13)}px;
  text-align: center;
`;

import { TouchableOpacityProps, Text, TextProps } from "react-native";
import React, { useState } from "react";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";
import rf from "../../utils/responsiveFont";
import { hp } from "../../utils/responsiveScreen";

type ButtonType = TouchableOpacityProps & {
  active: boolean;
  variant?: "contained" | "outlined";
};

type TextType = TextProps & {
  variant?: "contained" | "outlined";
  active: boolean;
};

interface IButtonProps {
  title: string;
  variant?: "contained" | "outlined";
  onPress?: () => void;
}

const Button = ({ title, variant = "contained", onPress }: IButtonProps) => {
  const [active, setActive] = useState(false);

  return (
    <Container
      onPressIn={() => setActive(true)}
      onPressOut={() => setActive(false)}
      active={active}
      activeOpacity={0.9}
      variant={variant}
      onPress={onPress}
    >
      <StyledText active={active} variant={variant}>
        {title}
      </StyledText>
    </Container>
  );
};

export default Button;

const Container = styled.TouchableOpacity<ButtonType>`
  margin-top: ${hp(2)}px;
  padding: ${hp(2)}px 0;
  background-color: ${({ active, variant }) =>
    active
      ? variant === "outlined"
        ? Colors.primaryBtn
        : Colors.primaryActiveBtn
      : variant === "outlined"
      ? Colors.white
      : Colors.primaryBtn};
  border-radius: 10px;
  ${(props) => props.variant === "outlined" && `border : 1px solid red;`}
`;

const StyledText = styled.Text<TextType>`
  font-size: ${rf(13)}px;
  text-align: center;
  font-weight: bold;
  color: ${({ variant, active }) =>
    variant === "outlined" && !active ? Colors.primaryBtn : Colors.white};
`;

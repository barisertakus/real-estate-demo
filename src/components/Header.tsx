import React from "react";
import styled from "styled-components/native";
import { hp } from "../utils/responsiveScreen";
import Text from "./core/Text";

interface IHeaderProps {
  title?: string;
}

const Header = ({ title }: IHeaderProps) => {
  return (
    <Container>
      <Text title={title} h2 />
    </Container>
  );
};

export default Header;

const Container = styled.View`
  padding-top: ${hp(6)}px;
`;

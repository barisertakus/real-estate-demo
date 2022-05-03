import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";

interface ISafeLayoutProps {
  children?: React.ReactChild;
}

const SafeLayout = ({ children }: ISafeLayoutProps) => {
  return <Container>{children}</Container>;
};

export default SafeLayout;

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${Colors.background};
`;

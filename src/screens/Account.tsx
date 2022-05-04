import { TouchableOpacity, View } from "react-native";
import React from "react";
import Text from "../components/core/Text";
import SafeLayout from "../components/core/SafeLayout";
import styled from "styled-components/native";
import i18n from "../i18n";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage, selectLanguage } from "../features/appSlice";
import { TextField } from "rn-material-ui-textfield";

const Account = () => {
  const dispatch = useDispatch();
  const language = useSelector(selectLanguage);

  return (
    <SafeLayout>
      <Header>
        <Text title={i18n.t("account")} h2 />
        <TextField label={i18n.t("email")} />
        <TextField label={i18n.t("password")} />
      </Header>
      <Bottom></Bottom>
    </SafeLayout>
  );
};

export default Account;

const Header = styled.View`
  flex: 0.6;
`;

const Bottom = styled.View`
  flex: 0.4;
  /* border: 1px solid red; */
`;


const styles = StyleSheet.create({})
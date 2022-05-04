import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { TextField } from "rn-material-ui-textfield";
import styled from "styled-components/native";
import Button from "../components/core/Button";
import Dropdown from "../components/core/Dropdown";
import SafeLayout from "../components/core/SafeLayout";
import Text from "../components/core/Text";
import Colors from "../constants/Colors";
import { changeLanguage, selectLanguage } from "../features/appSlice";
import i18n from "../i18n";
import { hp, wp } from "../utils/responsiveScreen";

const languages = [
  { label: "English", value: "en" },
  { label: "Türkçe", value: "tr" },
];

const Account = () => {
  const dispatch = useDispatch();
  const language = useSelector(selectLanguage);

  const updateLanguage = (languageName: string) => {
    i18n.locale = languageName;
    dispatch(changeLanguage(languageName));
  };

  return (
    <SafeLayout>
      <Container>
        <Content>
          <Header>
            <Text title={i18n.t("account")} h2 />
          </Header>
          <Inputs>
            <TextField
              label={i18n.t("email")}
              baseColor={Colors.primaryText}
              inputContainerStyle={{ borderColor: Colors.primaryBorder }}
            />
            <TextField
              label={i18n.t("password")}
              baseColor={Colors.primaryText}
              inputContainerStyle={{ borderColor: Colors.primaryBorder }}
            />
            <DropdownWrapper>
              <Dropdown
                label={i18n.t("locale")}
                data={languages}
                handleChange={updateLanguage}
              />
            </DropdownWrapper>
          </Inputs>
          <Button title={i18n.t("signup")} />
        </Content>
        <Bottom />
      </Container>
    </SafeLayout>
  );
};

export default Account;

const Container = styled.View`
  flex: 1;
  padding: 0 ${wp(5)}px;
`;

const Header = styled.View`
  padding-top: ${hp(4)}px;
`;

const Inputs = styled.View``;

const Content = styled.View`
  flex: 0.65;
  justify-content: space-between;
`;

const DropdownWrapper = styled.View`
  margin-top: ${hp(2)}px;
`;

const Bottom = styled.View`
  flex: 0.35;
`;

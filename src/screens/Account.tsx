import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { TextField } from "rn-material-ui-textfield";
import styled from "styled-components/native";
import Dropdown from "../components/core/Dropdown";
import SafeLayout from "../components/core/SafeLayout";
import Text from "../components/core/Text";
import Colors from "../constants/Colors";
import { changeLanguage, selectLanguage } from "../features/appSlice";
import i18n from "../i18n";
import { wp } from "../utils/responsiveScreen";

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
        <Header>
          <Text title={i18n.t("account")} h2 />
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
          <Dropdown
            label={i18n.t("locale")}
            data={languages}
            handleChange={updateLanguage}
          />
        </Header>
        <Bottom></Bottom>
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
  flex: 0.6;
`;

const Bottom = styled.View`
  flex: 0.4;
`;

import { TouchableOpacity, View } from "react-native";
import React, { Component } from "react";
import SafeLayout from "../components/core/SafeLayout";
import { Account, AppType, RootStackScreenProps } from "../types";
import { connect } from "react-redux";
import { logout, changeLanguage } from "../features/appSlice";
import Header from "../components/Header";
import i18n from "../i18n";
import Button from "../components/core/Button";
import styled from "styled-components/native";
import { hp, wp } from "../utils/responsiveScreen";
import Text from "../components/core/Text";
import rf from "../utils/responsiveFont";
import Dropdown from "../components/core/Dropdown";
import { languages } from "./Account";
import Divider from "../components/core/Divider";
import { ActionCreatorWithoutPayload, ActionCreatorWithPayload } from "@reduxjs/toolkit";

interface IAccountInfoProps extends RootStackScreenProps<"AccountInfo"> {
  account: Account;
  language: string;
  logout: ActionCreatorWithoutPayload;
  changeLanguage: ActionCreatorWithPayload<any, string>;
}

type AccountInfoState = {};

export class AccountInfo extends Component<
  IAccountInfoProps,
  AccountInfoState
> {
  constructor(props: IAccountInfoProps) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.updateLanguage = this.updateLanguage.bind(this);
  }

  handleLogout() {
    this.props.logout();
    this.props.navigation.goBack();
  }

  updateLanguage(languageName: string) {
    this.props.changeLanguage(languageName);
    i18n.locale = languageName;
  }

  render() {
    const { account, language } = this.props;
    return (
      <SafeLayout>
        <Container>
          <Content>
          <Header title={i18n.t("account")} />

            <Text title="Barış Ertakuş" h2 bold />
            <Details>
              <DetailText title={`${i18n.t("email")}: ${account.email}`} p />
              <DetailText
                title={`${i18n.t("password")}: ${account.password}`}
              />
              <DetailText
                title={`${i18n.t("currentLocale")}: ${language.toUpperCase()}`}
              />
            </Details>
            <Divider />
            <Dropdown
              label={i18n.t("locale")}
              data={languages}
              handleChange={this.updateLanguage}
              initialValue={language}
            />
          </Content>
          <Space />
          <Button
            title={i18n.t("logout")}
            variant="outlined"
            onPress={this.handleLogout}
          />
        </Container>
      </SafeLayout>
    );
  }
}

const mapStateToProps = (state: AppType) => ({
  language: state.app.language,
  account: state.app.account,
});

export default connect(mapStateToProps, { logout, changeLanguage })(
  AccountInfo
);

const Container = styled.View`
  flex: 1;
  padding: 0 ${wp(5)}px;
`;

const Content = styled.View`
  flex: 0.6;
  justify-content: space-between;
`;

const Space = styled.View`
  flex: 0.4;
`;

const Details = styled.View``;

const DetailText = styled(Text)`
  font-size: ${rf(12.2)}px;
  font-weight: 500;
  margin-bottom: ${hp(1)}px;
`;

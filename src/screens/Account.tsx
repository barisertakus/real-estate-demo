import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField } from "rn-material-ui-textfield";
import styled from "styled-components/native";
import Button from "../components/core/Button";
import Dropdown from "../components/core/Dropdown";
import SafeLayout from "../components/core/SafeLayout";
import Header from "../components/Header";
import Colors from "../constants/Colors";
import { changeLanguage, login, selectLanguage } from "../features/appSlice";
import i18n from "../i18n";
import { RootStackScreenProps } from "../types";
import { hp, wp } from "../utils/responsiveScreen";

export const languages = [
  { label: "English", value: "en" },
  { label: "Türkçe", value: "tr" },
];

const Account = ({ navigation }: RootStackScreenProps<"Account">) => {
  const dispatch = useDispatch();
  const language = useSelector(selectLanguage);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const updateLanguage = (languageName: string) => {
    i18n.locale = languageName;
    dispatch(changeLanguage(languageName));
  };

  const handleLogin = () => {
    dispatch(login({ email, password }));
    navigation.navigate("AccountInfo");
    setEmail("");
    setPassword("");
  };

  return (
    <SafeLayout>
      <Container>
        <Content>
          <Header title={i18n.t("account")} />
          <Inputs>
            <TextField
              label={i18n.t("email")}
              value={email}
              onChangeText={setEmail}
              baseColor={Colors.primaryText}
              inputContainerStyle={{ borderColor: Colors.primaryBorder }}
              underlineColorAndroid="red"
              tintColor={Colors.primaryText}
            />
            <TextField
              label={i18n.t("password")}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              baseColor={Colors.primaryText}
              inputContainerStyle={{ borderColor: Colors.primaryBorder }}
              underlineColorAndroid="red"
              tintColor={Colors.primaryText}
            />
            <DropdownWrapper>
              <Dropdown
                label={i18n.t("locale")}
                data={languages}
                handleChange={updateLanguage}
                initialValue={language}
              />
            </DropdownWrapper>
          </Inputs>
          <Button
            title={i18n.t("signup")}
            variant="contained"
            onPress={handleLogin}
          />
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

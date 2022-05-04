import { Text } from "react-native";
import React from "react";
import SafeLayout from "../components/core/SafeLayout";
import i18n from "../i18n";
import { useSelector } from "react-redux";
import { selectLanguage } from "../features/appSlice";

const List = () => {
  useSelector(selectLanguage);

  return (
    <SafeLayout>
      <Text>{i18n.t("hello")}</Text>
    </SafeLayout>
  );
};

export default List;

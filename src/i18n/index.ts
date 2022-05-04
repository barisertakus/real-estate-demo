import i18n from "i18n-js";
import tr from "./tr.json";
import en from "./en.json";

i18n.fallbacks = true;
i18n.locales.no = "en";
i18n.translations = {
  en,
  tr,
};

export default i18n;
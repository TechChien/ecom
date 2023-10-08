import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en/translation.json";
import translationZH from "./locales/zh/translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  zh: {
    translation: translationZH,
  },
};

i18next.use(initReactI18next).init({
  fallbackLng: "en",
  // lng: "zh",
  resources,
  interpolation: {
    skipOnVariables: false,
  },
});

export default i18next;

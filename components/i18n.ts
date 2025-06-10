// i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: "Welcome",
      home: "Home",
      about: "About",
      // Add other translations here
    },
  },
  hi: {
    translation: {
      welcome: "स्वागत है",
      home: "होम",
      about: "हमारे बारे में",
      // Add other translations here
    },
  },
  mr: {
    translation: {
      welcome: "स्वागत आहे",
      home: "मुख्यपृष्ठ",
      about: "आमच्याबद्दल",
      // Add other translations here
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
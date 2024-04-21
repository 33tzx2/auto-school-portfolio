import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translations
import ruTranslation from './locales/ru.json';
import plTranslation from './locales/pl.json';

const resources = {
  ru: { translation: ruTranslation },
  pl: { translation: plTranslation }
};

const language = localStorage.getItem('language') || 'ru'; // Default language

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: language, // Set initial language from local storage
    fallbackLng: 'pl', // Fallback language
    interpolation: {
      escapeValue: false // not needed for React
    }
  });

export const changeLanguage = (language) => {
  localStorage.setItem('language', language); // Save language to local storage
  i18n.changeLanguage(language);
};

export default i18n;

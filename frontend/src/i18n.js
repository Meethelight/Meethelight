import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import enTranslations from './locales/en.json'
import esTranslations from './locales/es.json'

i18n
  .use(initReactI18next) // Pasa la internalización i18n a react-i18next (el módulo).
  .init({
    lng: 'es', // Idioma por defecto
    fallbackLng: 'es', // Idioma de respaldo
    resources: {
      en: {
        translation: enTranslations
      },
      es: {
        translation: esTranslations
      }
    }
  })

export default i18n

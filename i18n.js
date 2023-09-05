import i18next from 'i18next';
import fsBackend from 'i18next-node-fs-backend';

export const BASE_LANGUAGE = 'en';

const namespaces = [
  'base',
  'follow-up-payment'
];

let languages;

/**
 * Initialize i18next
 *
 * @returns {Promise<Record<string, value>} the supported languages
 */
export async function i18nInit() {
  const en = await i18next.use(fsBackend).init({
    debug: false, // For development
    lng: "en", // Default language
    fallbackLng: "en", // Fallback language
    ns: namespaces, // defaults and template namespaces
    defaultNS: "base", // Default namespace
    backend: {
      loadPath: "./locales/{{lng}}/{{ns}}.json", // Path to translation files
    },
  });

  const i18nextClone = i18next.cloneInstance();
  const pt_BR = await i18nextClone.changeLanguage("pt_BR");

  languages = {en, pt_BR};
}

/**
 * Returns the i18n language object
 * @param {*} lng
 * @returns The i18next language object
 */
export function setLanguage(lng = BASE_LANGUAGE) {
  return languages[lng] || languages[BASE_LANGUAGE];
}

export function setT(locale, namespace) {
  const t = setLanguage(locale);

  return (key, options) => {
    return t(key, {...options, ns: ['base', namespace]});
  }
}

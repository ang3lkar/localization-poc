import i18next from 'i18next';
import fsBackend from 'i18next-node-fs-backend';

let languages;

/**
 * Initialize i18next
 *
 * @returns {Promise<Record<string, value>} the supported languages
 */
export async function i18nInit() {
  const en_US = await i18next.use(fsBackend).init({
    debug: false, // For development
    lng: "en-US", // Default language
    fallbackLng: "en-US", // Fallback language
    ns: ["base", "template1"], // defaults and template namespaces
    defaultNS: "base", // Default namespace
    backend: {
      loadPath: "./locales/{{lng}}/{{ns}}.json", // Path to translation files
    },
  });

  const i18nextClone = i18next.cloneInstance();
  const pt_BR = await i18nextClone.changeLanguage("pt-BR");

  languages = {
    'en-US': en_US,
    'pt-BR': pt_BR
  };
}

/**
 * Returns the i18n language object
 * @param {*} lng
 * @returns The i18next language object
 */
export function setLanguage(lng = "en-US") {
  return languages[lng] || languages['en-US'];
}

export function setT(locale, namespace) {
  const t = setLanguage(locale);

  return (key, options) => {
    return t(key, {...options, ns: ['base', namespace]});
  }
}

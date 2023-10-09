import { i18nInit, setT } from './i18n.js';

const user = {
  locale: 'pt_BR'
};

(async () => {
  await i18nInit();

  console.log("\n--pt-BR--");

  const t = setT(user.locale, 'follow-up-payment');

  // 1. happy path: finds a key and loads translation from 'followUpPayment' namespace
  console.log(t('welcomeNote'));

  // 2. fallback case: if key does not exist in namespace, we load from 'base' namespace
  console.log(t('body.p1', {name: 'Soul Hitman'}));

  // 3. no translation case: renders just the key => 'foo.bar'
  console.log(t('foo.bar'));

  // 4. Unsupported language: fallbacks to 'en'
  const t2 = setT('en-GB', 'follow-up-payment');

  console.log("\n--en-GB--");
  console.log(t2('welcomeNote'));
})();

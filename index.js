import { i18nInit, setT } from './i18n.js';

const user = {
  locale: 'pt_BR'
};

(async () => {
  await i18nInit();

  console.log("\n--pt-BR--");

  const t = setT(user.locale, 'follow-up-payment');

  // finds a key and loads translation from followUpPayment namespace
  console.log(t('welcomeNote'));

  // fallback, if key does not exist in namespace, we load from base
  console.log(t('body.p1', {name: 'Soul Hitman'}));

  // key does not exist, renders just the key => 'foo.bar'
  console.log(t('foo.bar'));


  // Unsupported language fallbacks to 'en'
  const t2 = setT('en-GB', 'follow-up-payment');

  console.log("\n--en-GB--");
  console.log(t2('welcomeNote'));
})();

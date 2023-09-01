import { i18nInit, setT } from './i18n.js';

const user = {
  locale: 'pt-BR'
};

(async () => {
  await i18nInit();

  console.log("\n--pt-BR--");

  const t = setT(user.locale, 'template1');

  // finds a key and loads translation from template1 namespace
  console.log(t('foo.welcomeNote'));

  // fallback, if key does not exist in namespace, we load from base
  console.log(t('body.p1', {name: 'Soul Hitman'}));

  // key does not exist, renders foo.bar
  console.log(t('foo.bar'));


  // Unsupported language fallbacks to en-US
  const t2 = setT('en-GB', 'template1');

  console.log("\n--en-US--");
  console.log(t2('foo.welcomeNote'));
})();

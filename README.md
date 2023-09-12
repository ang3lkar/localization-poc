# localization-poc

This is just a PoC project to test the integration with [lokalise](https://app.lokalise.com/).

## Integration steps

The flow uses a Github action defined on `.github/workflows/localise.yml` (yes, typo here 😎)

1. Checkout a new branch
2. Add/update some keys on `locales/en/*.json` (`en` is the base language)
3. Open a new PR
4. When the PR is opened, the github action will be triggerd, almost instantly
   you should see the new keys on Lokalise's Editor tab
6. If all translations are good to go, go to Lokalise's Download tab and click "Build only"
7. This will open a new PR on Github with the translations

## Check translations

```sh
npm install
```

```sh
node index.js
```

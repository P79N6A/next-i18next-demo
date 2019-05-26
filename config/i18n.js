const { localeSubpaths } = require('next/config').default().publicRuntimeConfig;
const NextI18Next = require('next-i18next/dist/commonjs');

module.exports = new NextI18Next({
  otherLanguages: ['id', 'ms', 'my', 'th', 'zh_CN', 'zh_TW'],
  localeSubpaths,
  detection: {
    order: ['querystring', 'navigator'],
    lookupQuerystring: 'lang',
  },
});

// const languageDetectionBasedUponHeader = {
//     name: "language-detection-header",
//     lookup: (req, res, options) => {
//       console.log(req.query);
//       return  "en";
//     }
//   };

//   module.exports =  new NextI18Next({
//     debug: true,
//     browserLanguageDetection: false,
//     //fallbackLng: inUseLocales.toFallbackLanguagesObject(),
//     //otherLanguages: inUseLocales.toString(),
//     otherLanguages: ['de'],
//     customDetectors: [languageDetectionBasedUponHeader],
//     detection: {
//       order: ["language-detection-header"]
//     }
// });

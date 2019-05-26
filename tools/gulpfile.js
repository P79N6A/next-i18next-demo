// const i18nextParser = require('i18next-parser').gulp;
// const gulp = require('gulp');

// gulp.task('i18next', function() {
//   gulp.src(['./pages/**/*', './components/**/*'])
//     .pipe(new i18nextParser({
//       locales: ['en'],
//       namespace: 'common',
//       output: 'static/locales/$LOCALE/$NAMESPACE.json'
//     }))
//     .pipe(gulp.dest('./'));
// });

const gulp = require("gulp");
const scanner = require("i18next-scanner");

gulp.task("i18next", function() {
  return gulp
    .src(["pages/**/*.{js,html}"])
    .pipe(
      scanner({
        lngs: ["en", "id", "zh_TW", "zh_CN", "th", "ms", "my"], // supported languages
        resource: {
          // the source path is relative to current working directory
          loadPath: "static/locales/{{lng}}/{{ns}}.json",

          // the destination path is relative to your `gulp.dest()` path
          savePath: "locales/{{lng}}/{{ns}}.json"
        }
      })
    )
    .pipe(gulp.dest("static"));
});

gulp.task("t", ["i18next"]);

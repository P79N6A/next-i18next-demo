const scanner = require("i18next-scanner");
const vfs = require("vinyl-fs");
const options = require("./i18next-scanner.config");

vfs
  .src(["pages/**/*", "components/**/*"])
  .pipe(scanner(options))
  .pipe(vfs.dest("static/"));

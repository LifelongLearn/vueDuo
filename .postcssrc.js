// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    // to edit target browsers: use "browserslist" field in package.json
    "postcss-import": {},
    "autoprefixer": {browsers: 'safari >= 7, ie >= 11,ios >= 6.0'},
    "postcss-cssnext":{warnForDuplicates:false}
  }
}

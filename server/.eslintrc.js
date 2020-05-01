module.exports = {
  root: true,
  parser: "babel-eslint",
  env: {
    "es6": true,
    "browser": true
  },
  extends: [
    "airbnb-base"
  ],
  rules: {
    'linebreak-style': 0,
    'max-len': ["error", {"code": 150}],
    'no-restricted-syntax': 'off',
    'guard-for-in': 'off'
  }
};

module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "airbnb",
  ],
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
      },
    },
  },
  plugins: ["react", "import", "jsx-a11y"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "react/forbid-prop-types": "off",
    "no-unused-vars": "off",
    "import/no-cycle": "off",
    eslintquotes: "off",
    "linebreak-style": ["error", "unix"],
    quotes: "off",
    semi: "off",
    "no-use-before-define": "off",
    "react/jsx-filename-extension": "off",
    "react/prop-types": "off",
    "comma-dangle": "off",
    "consistent-return": "off",
    "object-curly-spacing": "off",
    "import/prefer-default-export": "off",
    "arrow-parens": "off",
    "import/named": "off",
    "import/no-unresolved": "off",
    "operator-linebreak": "off",
    "react/no-did-update-set-state": "off",
    "object-curly-newline": "off",
    "implicit-arrow-linebreak": "off",
    "function-paren-newline": "off",
    "no-prototype-builtins": "off",
    "no-console": "off",
    "no-underscore-dangle": "off",
    "nonblock-statement-body-position": "off",
    "import/extensions": "off",
    "react/jsx-props-no-spreading": "off",
    "import/no-dynamic-require": "off",
    "global-require": "off",
    "class-methods-use-this": "off",
    "react/jsx-no-bind": "off",
    // "jsx-no-bind": "off",
    indent: "off",
    "react/require-default-props": "off",
    // "require-default-props": "off",
    "class-methods-use-this": "off",
    "spaced-comment": "off",
    "react/prefer-stateless-function": "off",
    "react/jsx-wrap-multilines": "off",
    "react/jsx-tag-spacing": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/no-array-index-key": "off",
    "padded-blocks": "off",
    "import/no-useless-path-segments": "off",
    "max-len": "off",
    "no-param-reassign": "off"
  },
};
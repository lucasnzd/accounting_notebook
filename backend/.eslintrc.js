module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": ["airbnb", "prettier"],
    "plugins": ["prettier"],
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "prettier/prettier": ["error"],
        "no-underscore-dangle": "off",
        "no-restricted-syntax": "off",
        "import/prefer-default-export": "off",
        "class-methods-use-this": "off"
    }
};

// https://eslint.org/docs/user-guide/configuring

module.exports = {
    "extends": "standard",
    "root": true,
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module"
    },
    "env": {
        "browser": true,
        "node": true
    },
    "plugins": [ "html", "standard" ],
    "rules": {
        "indent": ["error", 4, { "SwitchCase": 1 }],
        "quotes": "off",
        "semi": ["error", "always"],
        "no-console": "off",
        "no-empty": "off",
        "no-eq-null": "off",
        "no-new": 0,
        "no-fallthrough": 0,
        "no-unreachable": 0,
        "space-before-function-paren": ["error", "never"],
        "eqeqeq": "off"      
    }
}

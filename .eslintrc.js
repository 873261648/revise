module.exports = {
    "root": false,
    "env": {
        "node": true,
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/recommended"
    ],
    "plugins": [
        "vue"
    ],
    "rules": {
        "indent": [
            "error",
            4
        ],
        "eqeqeq": "error",
        "default-case": "error",
        "dot-notation": "error",
        "no-alert": "error",
        "no-else-return": "error",
        "no-empty-function": "error",
        "no-extra-label": "error",
        "no-fallthrough": "error",
        "no-multi-spaces": "error",
        "no-useless-return": "error",
        "require-await": "error",
        "vars-on-top": "error",
        "vue/html-indent": [
            "error",
            4
        ],
        "vue/script-indent": [
            "error",
            4
        ],
        "vue/html-closing-bracket-newline": [
            "error",
            {
                "singleline": "never",
                "multiline": "never"
            }
        ]
    },
    "parser": "vue-eslint-parser",
    "parserOptions": {
        "parser": "babel-eslint",
        "ecmaVersion": 2020
    }
}

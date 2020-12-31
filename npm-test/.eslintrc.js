/*
 * @Descripttion: 
 * @version: 
 * @Author: WaitingChen
 * @Date: 2020-12-31 16:33:21
 * @LastEditors: WaitingChen
 * @LastEditTime: 2020-12-31 16:35:27
 */
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        "indent": ['error', 2],
        'linebreak-style': ['error', 'unix'],
        "quotes": ['error', 'single'],
        "semi": ['error', 'always'],
    },
};

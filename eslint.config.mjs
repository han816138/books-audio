import globals from "globals";

/** @type {import("eslint").Linter.Config[]} */
export default [
    {
        files: ["*.js"],
        languageOptions: {
            ecmaVersion: 2020,
            sourceType: "script",
            globals: {
                ...globals.browser
            }
        },
        rules: {
            // 可能造成 bug 的問題
            "no-undef": "error",
            "no-unused-vars": ["warn", { "args": "none" }],
            "no-redeclare": "error",
            "no-unreachable": "error",
            // 程式碼品質
            "eqeqeq": ["error", "always"],
            "no-var": "error",
            "prefer-const": "warn",
            // 格式（寬鬆，不要求分號風格）
            "semi": ["error", "always"],
            "no-extra-semi": "error"
        }
    }
];

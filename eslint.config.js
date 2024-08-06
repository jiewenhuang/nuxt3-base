import withNuxt from "./.nuxt/eslint.config.mjs"
import globals from "globals"
import pluginJs from "@eslint/js"
import tseslint from "typescript-eslint"
import pluginVue from "eslint-plugin-vue"
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettier from "eslint-plugin-prettier";



export default withNuxt(
  [
    {
      languageOptions: {
        globals: { ...globals.browser, ...globals.node, ...globals.es2021 },
        ecmaVersion: "latest",
        parser: tseslint.parser
      }
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    ...pluginVue.configs["flat/recommended"], // Vue3
    eslintConfigPrettier,
    {
      plugins: {
        prettier: eslintPluginPrettier,
      },
      rules: {
        // 写上规范代码的规则，具体规则参考 ESLint 官方文档啦
        "vue/no-unused-components": "error",
        "vue/multi-word-component-names": "off",
        "@typescript-eslint/no-explicit-any": "off",
        // Prettier 规则
        "prettier/prettier": "error",
      }
    },
    { ignores: ['node_modules', 'dist', 'public', '.nuxt'] }, // 忽略校验 .nuxt/ 目录下的所有文件

  ]

)

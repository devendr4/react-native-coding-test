module.exports = {
  parser: "@typescript-eslint/parser",
  overrides: [
    {
      files: ["*.json", "*.json5", "*.jsonc"],
      parser: "jsonc-eslint-parser",
    },
    {
      files: ["*.js", "*.jsx"],
      rules: {
        "simple-import-sort/imports": [
          "error",
          {
            groups: [
              // Node.js builtins. You could also generate this regex if you use a `.js` config.
              // For example: `^(${require("module").builtinModules.join("|")})(/|$)`
              // Note that if you use the `node:` prefix for Node.js builtins,
              // you can avoid this complexity: You can simply use "^node:".
              [
                "^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)",
              ],
              // Packages. `react` related packages come first.
              ["^react", "^@?\\w"],
              // Internal packages.
              ["^(@|@company|@ui|components|utils|config|vendored-lib)(/.*|$)"],
              // Side effect imports.
              ["^\\u0000"],
              // Parent imports. Put `..` last.
              ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
              // Other relative imports. Put same-folder imports and `.` last.
              ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
              // Style imports.
              ["^.+\\.s?css$"],
            ],
          },
        ],
      },
    },
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      globalReturn: false,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    allowImportExportEverywhere: false,
    requireConfigFile: true,
    babelOptions: { configFile: "./babel.config.js" },
  },
  env: {
    es6: true,
    node: true,
    jest: true,
    "react-native/react-native": true,
  },
  plugins: [
    "react",
    "react-native",
    "unicorn",
    "sonarjs",
    "react-hooks",
    "simple-import-sort",
    "import",
    "prettier",
  ],
  extends: [
    "eslint:recommended",
    "@react-native-community",
    "plugin:react/jsx-runtime",
    "plugin:react/recommended",
    "plugin:sonarjs/recommended",
    "plugin:unicorn/recommended",
    "plugin:import/recommended",
    "plugin:prettier/recommended",
    "plugin:jsonc/recommended-with-jsonc",
    "prettier",
  ],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".tsx", ".ts"] }],
    "react/react-in-jsx-scope": "off",
    "unicorn/no-for-loop": "error",
    "unicorn/filename-case": [
      "error",
      {
        cases: {
          camelCase: true,
          pascalCase: true,
        },
      },
    ],
    "unicorn/prevent-abbreviations": [
      "error",
      {
        replacements: {
          res: false,
          cmd: {
            command: true,
          },
          props: false,
          ref: false,
          args: false,
          func: false,
        },
      },
    ],
    "unicorn/prefer-module": 0,
    "unicorn/no-fn-reference-in-iterator": 0,
    "unicorn/numeric-separators-style": [0],
    "linebreak-style": 0,
    "comma-dangle": ["error", "always-multiline"],
    "react/jsx-props-no-spreading": 0,
    "no-param-reassign": 0,
    "prettier/prettier": "error",
    "react/prop-types": [2],
    "import/no-named-as-default": [0],
    "react-native/no-unused-styles": 2,
    "react-native/no-inline-styles": 2,
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
  },
  globals: {
    test: "readonly",
    expect: "readonly",
    jest: "readonly",
    describe: "readonly",
    beforeEach: "readonly",
    afterEach: "readonly",
    it: "readonly",
    render: "readonly",
    sinon: "readonly",
    act: "readonly",
    fireEvent: "readonly",
    waitFor: "readonly",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".json"],
        paths: ["./"],
      },
      "eslint-import-resolver-custom-alias": {
        alias: { "@": "./src" },
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
      },
    },
    "import/ignore": ["node_modules/react-native/index\\.js$"],
  },
};

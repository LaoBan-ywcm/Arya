module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["airbnb-typescript", "prettier", "plugin:@typescript-eslint/recommended", 'plugin:@typescript-eslint/recommended-requiring-type-checking'],
  plugins: ["prettier", "react", "react-hooks", "jsx-a11y", "@typescript-eslint", "import"],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      globalReturn: true,
    },
    project: ['./tsconfig.json'],
  },
  rules: {
    "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-floating-promises": "off"
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        project: ["tsconfig.json"],
      },
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        project: ["tsconfig.json"],
      },
    },
  },
  ignorePatterns: ['package.json', 'babel-plugin-macros.config.js', '.eslintrc.js', 'babel.config.js', 'postcss.config.js', "webpack.dev.js", "webpack.common.js", "webpack.prod.js"]
};
